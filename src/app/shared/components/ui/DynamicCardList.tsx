import React, { useEffect, useState } from 'react';
import { apiService } from '../../services/apiService';
import { Card } from './Card';
import Pagination from '../Pagination';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useNotification } from '../../contexts/NotificationContext';
import { Link } from 'react-router-dom';

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
  additionalParams?: { [key: string]: any };
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
  additionalParams = {},
}) => {
  const [data, setData] = useState<any[]>(mockData || []);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [totalRecords, setTotalRecords] = useState(0);
  const { addNotification } = useNotification();

  useEffect(() => {
    if (mockData) {
      setData(mockData);
      return;
    }
    fetchData();
    // eslint-disable-next-line
  }, [apiEndpoint, mockData, search, filterValues, currentPage, itemsPerPage, additionalParams]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params: any = {};
      params.pageNumber = currentPage;
      params.pageSize = itemsPerPage;

      // Agregar parámetros adicionales
      Object.assign(params, additionalParams);

      // Construir el parámetro Filter
      const filterStrings: string[] = [];
      Object.entries(filterValues).forEach(([key, value]) => {
        if (value) filterStrings.push(`${key} = '${value}'`);
      });
      const filterParam = filterStrings.join(', ');
      if (filterParam) {
        params.Filter = 'AND ' + filterParam;
      }

      const res = await apiService.post(apiEndpoint, params);
      const list = res?.data?.listFind;
      const total =
        res && 'totalRecords' in res && typeof res.totalRecords === 'number'
          ? res.totalRecords
          : Array.isArray(list)
            ? list.length
            : 0;

      if (Array.isArray(list)) {
        setData(list);
        setTotalRecords(res && res.data && typeof res.data.totalRecords === 'number' ? res.data.totalRecords : 0);
        if (total === 0) {
          addNotification('No se encontraron registros', 'info');
        }
      } else if (res && res.message) {
        const isSuccess = res.status >= 200 && res.status < 300;
        addNotification(res.message, isSuccess ? 'success' : 'error');
        setData([]);
        setTotalRecords(0);
      } else {
        setData([]);
        setTotalRecords(0);
        addNotification('Respuesta vacía del servidor', 'error');
      }
    } catch (e: any) {
      setData([]);
      setTotalRecords(0);
      const errorMessage = e?.response?.data?.message || e?.message || 'Error al cargar los datos';
      addNotification(errorMessage, 'error');
    }
    setLoading(false);
  };

  // Filtros locales (search y select)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };
  const handleSelect = (key: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

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

  let currentItems = data;
  if (mockData) {
    // paginación local solo para mockData
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  }

  // Paginación local
  const totalRecordsLocal = mockData ? filteredData.length : totalRecords;
  const totalPages = Math.max(1, Math.ceil(totalRecordsLocal / itemsPerPage));

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
            <Link
              to={newButtonLink}
              className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <PlusIcon className="h-5 w-5" />
              <span>{newButtonText}</span>
            </Link>
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
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <div className="flex flex-col sm:flex-row gap-4">
            {filters.map((filter) => {
              if (filter.type === 'search') {
                return (
                  <div key={filter.key} className="flex-1 relative">
                    <input
                      type="text"
                      placeholder={filter.placeholder || 'Buscar...'}
                      value={search}
                      onChange={handleSearch}
                      className="w-full pl-4 pr-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                    />
                  </div>
                );
              }
              if (filter.type === 'select') {
                return (
                  <div key={filter.key} className="flex items-center space-x-2">
                    <select
                      value={filterValues[filter.key] || ''}
                      onChange={e => handleSelect(filter.key, e.target.value)}
                      className="bg-background border border-border rounded-lg text-text-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                    >
                      <option value="">{filter.placeholder || 'Todos'}</option>
                      {filter.options?.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-primary mx-auto"></div>
            <p className="mt-2 text-text-secondary">Cargando...</p>
          </div>
        ) : currentItems.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="text-text-secondary text-6xl mb-4">📋</div>
            <h3 className="text-lg font-medium text-text-primary">No se encontraron registros</h3>
            <p className="text-text-secondary mt-1">
              {search || Object.values(filterValues).some(v => v) ? 'Intenta con otros filtros' : 'Comienza agregando un nuevo registro'}
            </p>
          </div>
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
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}

      {/* Info de paginación */}
      {pagination && totalRecordsLocal > 0 && (
        <div className="flex justify-end text-sm text-text-secondary">
          Mostrando página {currentPage} de {totalPages} | Total de registros: {totalRecordsLocal}
        </div>
      )}
    </div>
  );
};

export default DynamicCardList; 