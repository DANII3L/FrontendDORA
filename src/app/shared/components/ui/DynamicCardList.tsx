import React, { useEffect, useState } from 'react';
import { apiService } from '../../services/apiService';
import { Card } from './Card';
import Pagination from '../Pagination';
import { PlusIcon } from '@heroicons/react/24/outline';

interface CardField {
  label: string;
  key: string;
  render?: (value: any, item: any) => React.ReactNode;
}

interface FilterConfig {
  type: 'search' | 'select';
  key: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface DynamicCardListProps {
  apiEndpoint: string;
  cardFields: CardField[];
  filters?: FilterConfig[];
  pagination?: boolean;
  cardActions?: (item: any) => React.ReactNode;
  itemsPerPageOptions?: number[];
  className?: string;
  mockData?: any[];
  getCardClassName?: (item: any) => string;
  renderCard?: (item: any) => React.ReactNode;
  title?: string;
  subtitle?: string;
  newButtonText?: string;
  newButtonLink?: string;
  onNew?: () => void;
}

const DynamicCardList: React.FC<DynamicCardListProps> = ({
  apiEndpoint,
  cardFields,
  filters = [],
  pagination = true,
  cardActions,
  itemsPerPageOptions = [6, 12, 24],
  className = '',
  mockData,
  getCardClassName,
  renderCard,
  title,
  subtitle,
  newButtonText,
  newButtonLink,
  onNew,
}) => {
  const [data, setData] = useState<any[]>(mockData || []);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  useEffect(() => {
    if (mockData) {
      setData(mockData);
      return;
    }
    fetchData();
    // eslint-disable-next-line
  }, [apiEndpoint, mockData]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params: any = {};
      filters.forEach(f => {
        if (f.type === 'search' && search) params[f.key] = search;
        if (f.type === 'select' && filterValues[f.key]) params[f.key] = filterValues[f.key];
      });
      const res = await apiService.get(apiEndpoint, params);
      setData(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      setData([]);
    }
    setLoading(false);
  };

  // Filtros locales (search y select)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSelect = (key: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (mockData) {
      setData(mockData);
      return;
    }
    fetchData();
    // eslint-disable-next-line
  }, [search, filterValues, mockData]);

  // Filtrado local para mockData
  let filteredData = data;
  if (mockData) {
    filteredData = mockData.filter(item => {
      let matches = true;
      filters.forEach(f => {
        if (f.type === 'search' && search) {
          const val = (item[f.key] || '').toString().toLowerCase();
          if (!val.includes(search.toLowerCase())) matches = false;
        }
        if (f.type === 'select' && filterValues[f.key]) {
          if ((item[f.key] || '') !== filterValues[f.key]) matches = false;
        }
      });
      return matches;
    });
  }

  // Paginación local
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pagination ? filteredData.slice(indexOfFirstItem, indexOfLastItem) : filteredData;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header reutilizable */}
      {title && (
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">{title}</h1>
            {subtitle && <p className="text-text-secondary mt-1">{subtitle}</p>}
          </div>
          {newButtonText && (newButtonLink ? (
            <a
              href={newButtonLink}
              className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <PlusIcon className="h-5 w-5" />
              <span>{newButtonText}</span>
            </a>
          ) : (
            <button
              onClick={onNew}
              className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <PlusIcon className="h-5 w-5" />
              <span>{newButtonText}</span>
            </button>
          ))}
        </div>
      )}
      {/* Filtros */}
      {filters.length > 0 && (
        <div className="bg-card-background p-4 rounded-xl border border-border flex flex-col sm:flex-row gap-4">
          {filters.map((filter) => {
            if (filter.type === 'search') {
              return (
                <input
                  key={filter.key}
                  type="text"
                  placeholder={filter.placeholder || 'Buscar...'}
                  value={search}
                  onChange={handleSearch}
                  className="w-full sm:w-64 px-3 py-2 border rounded-lg"
                />
              );
            }
            if (filter.type === 'select') {
              return (
                <select
                  key={filter.key}
                  value={filterValues[filter.key] || ''}
                  onChange={e => handleSelect(filter.key, e.target.value)}
                  className="w-full sm:w-48 px-3 py-2 border rounded-lg"
                >
                  <option value="">{filter.placeholder || 'Todos'}</option>
                  {filter.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              );
            }
            return null;
          })}
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12">Cargando...</div>
        ) : currentItems.length === 0 ? (
          <div className="col-span-full text-center py-12">No se encontraron registros</div>
        ) : (
          currentItems.map((item, idx) => (
            renderCard ? (
              <React.Fragment key={item.id || idx}>{renderCard(item)}</React.Fragment>
            ) : (
              <Card key={item.id || idx} className={`p-6 ${getCardClassName ? getCardClassName(item) : ''}`}>
                {cardFields.map(field => (
                  <div key={field.key} className="mb-2">
                    <span className="font-semibold">{field.label}: </span>
                    {field.render ? field.render(item[field.key], item) : item[field.key]}
                  </div>
                ))}
                {cardActions && (
                  <div className="pt-4 border-t mt-2">{cardActions(item)}</div>
                )}
              </Card>
            )
          ))
        )}
      </div>

      {/* Paginación */}
      {pagination && currentItems.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      )}
    </div>
  );
};

export default DynamicCardList; 