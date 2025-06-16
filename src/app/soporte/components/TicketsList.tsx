import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  TicketIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Pagination from '../../shared/components/Pagination';

const TicketsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Estado para ítems por página

  const tickets = [
    {
      id: 1,
      titulo: 'Problema de acceso a la plataforma',
      descripcion: 'El usuario no puede iniciar sesión con sus credenciales.',
      estado: 'abierto',
      prioridad: 'alta',
      fechaCreacion: '2024-03-01',
      asignadoA: 'Soporte Nivel 1',
    },
    {
      id: 2,
      titulo: 'Error al cargar reportes',
      descripcion: 'Los reportes financieros no se muestran correctamente.',
      estado: 'en progreso',
      prioridad: 'media',
      fechaCreacion: '2024-02-28',
      asignadoA: 'Equipo de Desarrollo',
    },
    {
      id: 3,
      titulo: 'Solicitud de nueva característica',
      descripcion: 'El cliente ABC Corp solicita una nueva funcionalidad de exportación.',
      estado: 'pendiente',
      prioridad: 'baja',
      fechaCreacion: '2024-03-03',
      asignadoA: 'Product Manager',
    },
    {
      id: 4,
      titulo: 'Configuración de correo electrónico',
      descripcion: 'Ayuda para configurar la integración de email con el CRM.',
      estado: 'abierto',
      prioridad: 'media',
      fechaCreacion: '2024-03-02',
      asignadoA: 'Soporte Nivel 1',
    },
    {
      id: 5,
      titulo: 'Caída intermitente del servicio',
      descripcion: 'El sistema se desconecta por breves periodos de forma aleatoria.',
      estado: 'en progreso',
      prioridad: 'alta',
      fechaCreacion: '2024-02-29',
      asignadoA: 'DevOps',
    },
    {
      id: 6,
      titulo: 'Actualización de datos de cliente',
      descripcion: 'Necesidad de corregir información de contacto de cliente XYZ.',
      estado: 'cerrado',
      prioridad: 'baja',
      fechaCreacion: '2024-02-25',
      asignadoA: 'Soporte Nivel 1',
    },
    {
      id: 7,
      titulo: 'Problema con la generación de facturas',
      descripcion: 'Las facturas generadas tienen errores en los montos.',
      estado: 'abierto',
      prioridad: 'alta',
      fechaCreacion: '2024-03-04',
      asignadoA: 'Equipo de Contabilidad',
    },
    {
      id: 8,
      titulo: 'Restablecimiento de contraseña',
      descripcion: 'Usuario olvidó su contraseña y necesita restablecimiento.',
      estado: 'cerrado',
      prioridad: 'baja',
      fechaCreacion: '2024-03-01',
      asignadoA: 'Soporte Nivel 1',
    },
    {
      id: 9,
      titulo: 'Mejora en la interfaz de usuario',
      descripcion: 'Sugerencia para mejorar la experiencia de usuario en el módulo de productos.',
      estado: 'pendiente',
      prioridad: 'baja',
      fechaCreacion: '2024-03-02',
      asignadoA: 'Diseño UX/UI',
    },
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ticket.asignadoA.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'todos' || ticket.estado === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTickets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (numItems: number) => {
    setItemsPerPage(numItems);
    setCurrentPage(1); // Resetear a la primera página cuando cambian los ítems por página
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'abierto':
        return 'bg-status-blue-light text-status-blue border-status-blue-light';
      case 'en progreso':
        return 'bg-status-orange-light text-status-orange border-status-orange-light';
      case 'pendiente':
        return 'bg-status-yellow-light text-status-yellow border-status-yellow-light';
      case 'cerrado':
        return 'bg-status-green-light text-status-green border-status-green-light';
      default:
        return 'bg-status-gray-light text-status-gray border-status-gray-light';
    }
  };

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'alta':
        return 'text-red-500';
      case 'media':
        return 'text-yellow-500';
      case 'baja':
        return 'text-green-500';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Tickets de Soporte</h1>
          <p className="text-text-secondary mt-1">Gestiona los tickets de soporte</p>
        </div>
        <Link
          to="/tickets/nuevo"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nuevo Ticket</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar tickets..."
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
              <option value="abierto">Abiertos</option>
              <option value="en progreso">En Progreso</option>
              <option value="pendiente">Pendientes</option>
              <option value="cerrado">Cerrados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tickets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((ticket) => (
          <div key={ticket.id} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                  {ticket.titulo}
                </h3>
                <p className="text-sm text-text-secondary">Asignado a: {ticket.asignadoA}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(ticket.estado)}`}>
                {ticket.estado}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <CalendarIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Creado: {new Date(ticket.fechaCreacion).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <UserIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Prioridad: <span className={`${getPrioridadColor(ticket.prioridad)} font-semibold`}>{ticket.prioridad}</span></span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Link
                to={`/tickets/${ticket.id}`}
                className="w-full bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center block"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredTickets.length === 0 && (
        <div className="text-center py-12">
          <TicketIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron tickets</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza agregando un nuevo ticket'}
          </p>
        </div>
      )}

      {filteredTickets.length > 0 && (
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

export default TicketsList;