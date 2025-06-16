import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusIcon, 
  MagnifyingGlassIcon, 
  FunnelIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import Pagination from '../../shared/components/Pagination';

const ClientesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const clientes = [
    {
      id: 1,
      nombre: 'ABC Corporation',
      contacto: 'Juan Pérez',
      email: 'juan.perez@abc.com',
      telefono: '+1 (555) 123-4567',
      estado: 'activo',
      valor: '$125,000',
      ultimaActividad: '2024-01-15',
      industria: 'Tecnología'
    },
    {
      id: 2,
      nombre: 'XYZ Industries',
      contacto: 'María García',
      email: 'maria.garcia@xyz.com',
      telefono: '+1 (555) 987-6543',
      estado: 'prospecto',
      valor: '$75,000',
      ultimaActividad: '2024-01-14',
      industria: 'Manufactura'
    },
    {
      id: 3,
      nombre: 'Tech Solutions Ltd',
      contacto: 'Carlos Rodríguez',
      email: 'carlos@techsolutions.com',
      telefono: '+1 (555) 456-7890',
      estado: 'activo',
      valor: '$200,000',
      ultimaActividad: '2024-01-13',
      industria: 'Software'
    },
    {
      id: 4,
      nombre: 'Global Enterprises',
      contacto: 'Ana Martínez',
      email: 'ana.martinez@global.com',
      telefono: '+1 (555) 321-0987',
      estado: 'inactivo',
      valor: '$50,000',
      ultimaActividad: '2024-01-10',
      industria: 'Servicios'
    },
    {
      id: 5,
      nombre: 'Innovate Solutions',
      contacto: 'Pedro Gómez',
      email: 'pedro.gomez@innovate.com',
      telefono: '+1 (555) 111-2222',
      estado: 'activo',
      valor: '$90,000',
      ultimaActividad: '2024-01-20',
      industria: 'Consultoría'
    },
    {
      id: 6,
      nombre: 'Dynamic Systems',
      contacto: 'Laura Fernández',
      email: 'laura.fernandez@dynamic.com',
      telefono: '+1 (555) 333-4444',
      estado: 'prospecto',
      valor: '$60,000',
      ultimaActividad: '2024-01-18',
      industria: 'Energía'
    },
    {
      id: 7,
      nombre: 'Future Tech',
      contacto: 'Miguel Torres',
      email: 'miguel.torres@futuretech.com',
      telefono: '+1 (555) 555-6666',
      estado: 'activo',
      valor: '$150,000',
      ultimaActividad: '2024-01-22',
      industria: 'Robótica'
    },
    {
      id: 8,
      nombre: 'Creative Minds',
      contacto: 'Sofía Ruíz',
      email: 'sofia.ruiz@creative.com',
      telefono: '+1 (555) 777-8888',
      estado: 'inactivo',
      valor: '$30,000',
      ultimaActividad: '2024-01-19',
      industria: 'Publicidad'
    },
    {
      id: 9,
      nombre: 'Digital Solutions',
      contacto: 'Ricardo Castro',
      email: 'ricardo.castro@digital.com',
      telefono: '+1 (555) 999-0000',
      estado: 'activo',
      valor: '$180,000',
      ultimaActividad: '2024-01-21',
      industria: 'Marketing Digital'
    }
  ];

  const filteredClientes = clientes.filter(cliente => {
    const matchesSearch = cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cliente.contacto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cliente.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'todos' || cliente.estado === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClientes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredClientes.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (numItems: number) => {
    setItemsPerPage(numItems);
    setCurrentPage(1);
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'activo':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30';
      case 'prospecto':
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/30';
      case 'inactivo':
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/20 dark:text-gray-400 dark:border-gray-500/30';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/20 dark:text-gray-400 dark:border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Clientes</h1>
          <p className="text-text-secondary mt-1">Gestiona tu cartera de clientes</p>
        </div>
        <Link
          to="/clientes/nuevo"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nuevo Cliente</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-text-secondary" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-background border border-border rounded-lg text-text-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            >
              <option value="todos">Todos</option>
              <option value="activo">Activos</option>
              <option value="prospecto">Prospectos</option>
              <option value="inactivo">Inactivos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((cliente) => (
          <div key={cliente.id} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-primary/10 rounded-xl flex items-center justify-center">
                  <BuildingOfficeIcon className="h-6 w-6 text-orange-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                    {cliente.nombre}
                  </h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(cliente.estado)}`}>
                    {cliente.estado}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <UserIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{cliente.contacto}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <EnvelopeIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{cliente.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <PhoneIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{cliente.telefono}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="text-sm text-text-secondary">Valor</p>
                <p className="text-lg font-semibold text-text-primary">{cliente.valor}</p>
              </div>
              <Link
                to={`/clientes/${cliente.id}`}
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredClientes.length === 0 && (
        <div className="text-center py-12">
          <BuildingOfficeIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron clientes</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza agregando un nuevo cliente'}
          </p>
        </div>
      )}

      {filteredClientes.length > 0 && (
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

export default ClientesList;