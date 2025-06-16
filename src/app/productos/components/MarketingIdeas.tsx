import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, LightBulbIcon, TagIcon, PlusIcon, MagnifyingGlassIcon, FunnelIcon, PencilIcon } from '@heroicons/react/24/outline';
import Pagination from '../../shared/components/Pagination';

const MarketingIdeas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('todas');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Estado para ítems por página

  const marketingIdeas = [
    {
      id: 1,
      title: 'Campaña de Lanzamiento de Producto X',
      description: 'Crear una campaña digital completa para el lanzamiento del nuevo Smart Thermometer, incluyendo ads en redes sociales, email marketing y colaboraciones con influencers.',
      associatedProducts: [
        { id: 2, name: 'Smart Thermometer' },
      ],
      status: 'Activa',
      date: '2024-03-10',
    },
    {
      id: 2,
      title: 'Promoción de Primavera - Botellas Ecológicas',
      description: 'Ofrecer un 20% de descuento en todas las botellas ecológicas durante el mes de abril, destacando los beneficios ambientales.',
      associatedProducts: [
        { id: 3, name: 'Eco-friendly Water Bottle' },
      ],
      status: 'Pendiente',
      date: '2024-04-01',
    },
    {
      id: 3,
      title: 'Content Marketing - Testers de Alimentos',
      description: 'Desarrollar una serie de artículos de blog y videos cortos mostrando cómo usar el Pocket Tester para vegetales y sus beneficios para una vida saludable.',
      associatedProducts: [
        { id: 1, name: 'Pocket Tester (for vegetables)' },
      ],
      status: 'En Progreso',
      date: '2024-03-20',
    },
    {
      id: 4,
      title: 'Taller de Cocina Saludable',
      description: 'Organizar un taller de cocina en línea demostrando cómo preparar comidas saludables usando productos frescos y nuestro Pocket Tester.',
      associatedProducts: [
        { id: 1, name: 'Pocket Tester (for vegetables)' },
      ],
      status: 'Activa',
      date: '2024-04-15',
    },
    {
      id: 5,
      title: 'Colaboración con Nutricionistas',
      description: 'Establecer alianzas con nutricionistas e influencers de salud para promocionar nuestros productos en sus plataformas.',
      associatedProducts: [
        { id: 2, name: 'Smart Thermometer' },
        { id: 3, name: 'Eco-friendly Water Bottle' },
      ],
      status: 'Pendiente',
      date: '2024-05-01',
    },
  ];

  const filteredIdeas = marketingIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          idea.associatedProducts.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = selectedStatus === 'todas' || idea.status.toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredIdeas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredIdeas.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (numItems: number) => {
    setItemsPerPage(numItems);
    setCurrentPage(1); // Resetear a la primera página cuando cambian los ítems por página
  };

  const availableStatuses = Array.from(new Set(marketingIdeas.map(idea => idea.status)));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/productos"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Ideas de Marketing para Productos</h1>
            <p className="text-text-secondary mt-1">Gestiona tus estrategias de marketing relacionadas con productos</p>
          </div>
        </div>
        <Link
          to="/productos/ideas-marketing/nueva"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nueva Idea de Marketing</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar ideas de marketing..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-text-secondary" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-background border border-border rounded-lg text-text-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            >
              <option value="todas">Todos los estados</option>
              {availableStatuses.map(status => (
                <option key={status} value={status.toLowerCase()}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Marketing Ideas List */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border space-y-6">
        {currentItems.map((idea) => (
          <div key={idea.id} className="p-4 border border-border rounded-lg bg-background hover:border-orange-primary transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
                <LightBulbIcon className="h-6 w-6 text-orange-primary" />
                <span>{idea.title}</span>
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Estado: {idea.status}</span>
                <Link
                  to={`/productos/ideas-marketing/${idea.id}/editar`}
                  className="text-text-secondary hover:text-orange-primary transition-colors duration-200"
                  title="Editar Idea"
                >
                  <PencilIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <p className="text-text-secondary mb-3">{idea.description}</p>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-sm font-medium text-text-primary">Productos Asociados:</span>
              {idea.associatedProducts.length > 0 ? (
                idea.associatedProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/productos/${product.id}`}
                    className="flex items-center space-x-1 px-2 py-1 bg-accent-light rounded-full text-xs font-medium text-text-primary hover:bg-orange-primary/20 transition-colors duration-200"
                  >
                    <TagIcon className="h-4 w-4" />
                    <span>{product.name}</span>
                  </Link>
                ))
              ) : (
                <span className="text-sm text-text-secondary">Ninguno</span>
              )}
            </div>
            <p className="text-xs text-text-tertiary mt-2">Fecha de Creación: {idea.date}</p>
          </div>
        ))}
      </div>

      {filteredIdeas.length === 0 && (
        <div className="text-center py-12">
          <LightBulbIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron ideas de marketing</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza a crear nuevas estrategias para tus productos.'}
          </p>
        </div>
      )}

      {filteredIdeas.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}
    </div>
  );
};

export default MarketingIdeas; 