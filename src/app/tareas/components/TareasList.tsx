import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Pagination from '../../shared/components/Pagination';

const TareasList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todas');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Estado para ítems por página

  const tareas = [
    {
      id: 1,
      nombre: 'Preparar presentación para junta semanal',
      descripcion: 'Revisar los datos de ventas del último trimestre y crear diapositivas.',
      fechaVencimiento: '2024-03-10',
      estado: 'pendiente',
      prioridad: 'alta',
      responsable: 'Joaquín',
    },
    {
      id: 2,
      nombre: 'Enviar reporte de gastos',
      descripcion: 'Compilar todos los recibos y enviarlos a contabilidad.',
      fechaVencimiento: '2024-03-05',
      estado: 'completada',
      prioridad: 'media',
      responsable: 'María',
    },
    {
      id: 3,
      nombre: 'Programar reunión con nuevo cliente',
      descripcion: 'Contactar a ABC Corp para agendar la primera reunión.',
      fechaVencimiento: '2024-03-12',
      estado: 'en progreso',
      prioridad: 'alta',
      responsable: 'Carlos',
    },
    {
      id: 4,
      nombre: 'Actualizar base de datos de productos',
      descripcion: 'Añadir las nuevas referencias de productos al sistema.',
      fechaVencimiento: '2024-03-15',
      estado: 'pendiente',
      prioridad: 'media',
      responsable: 'Joaquín',
    },
    {
      id: 5,
      nombre: 'Revisar contratos pendientes',
      descripcion: 'Analizar los contratos de proveedores con el equipo legal.',
      fechaVencimiento: '2024-03-08',
      estado: 'completada',
      prioridad: 'alta',
      responsable: 'María',
    },
    {
      id: 6,
      nombre: 'Capacitación de nuevo software',
      descripcion: 'Asistir a la sesión de entrenamiento del nuevo CRM.',
      fechaVencimiento: '2024-03-20',
      estado: 'en progreso',
      prioridad: 'baja',
      responsable: 'Carlos',
    },
    {
      id: 7,
      nombre: 'Diseñar campaña de email marketing',
      descripcion: 'Crear el contenido y las plantillas para la campaña de primavera.',
      fechaVencimiento: '2024-03-22',
      estado: 'pendiente',
      prioridad: 'alta',
      responsable: 'Joaquín',
    },
    {
      id: 8,
      nombre: 'Investigar nuevas herramientas de análisis',
      descripcion: 'Buscar opciones de software para mejorar el seguimiento de ventas.',
      fechaVencimiento: '2024-03-25',
      estado: 'en progreso',
      prioridad: 'media',
      responsable: 'María',
    },
    {
      id: 9,
      nombre: 'Organizar archivo de documentos',
      descripcion: 'Digitalizar y organizar documentos antiguos en la nube.',
      fechaVencimiento: '2024-03-18',
      estado: 'completada',
      prioridad: 'baja',
      responsable: 'Carlos',
    },
  ];

  const filteredTareas = tareas.filter(tarea => {
    const matchesSearch = tarea.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tarea.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tarea.responsable.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'todas' || tarea.estado === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTareas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTareas.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (numItems: number) => {
    setItemsPerPage(numItems);
    setCurrentPage(1); // Resetear a la primera página cuando cambian los ítems por página
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'pendiente':
        return 'bg-status-orange-light text-status-orange border-status-orange-light';
      case 'en progreso':
        return 'bg-status-blue-light text-status-blue border-status-blue-light';
      case 'completada':
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
          <h1 className="text-3xl font-bold text-text-primary">Tareas</h1>
          <p className="text-text-secondary mt-1">Gestiona tus tareas y actividades</p>
        </div>
        <Link
          to="/tareas/nuevo"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nueva Tarea</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar tareas..."
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
              <option value="todas">Todas</option>
              <option value="pendiente">Pendientes</option>
              <option value="en progreso">En Progreso</option>
              <option value="completada">Completadas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((tarea) => (
          <div key={tarea.id} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                  {tarea.nombre}
                </h3>
                <p className="text-sm text-text-secondary">Responsable: {tarea.responsable}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(tarea.estado)}`}>
                {tarea.estado}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <CalendarIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Vence: {new Date(tarea.fechaVencimiento).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <UserIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Prioridad: <span className={`${getPrioridadColor(tarea.prioridad)} font-semibold`}>{tarea.prioridad}</span></span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Link
                to={`/tareas/${tarea.id}`}
                className="w-full bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center block"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredTareas.length === 0 && (
        <div className="text-center py-12">
          <CalendarIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron tareas</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza agregando una nueva tarea'}
          </p>
        </div>
      )}

      {filteredTareas.length > 0 && (
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

export default TareasList;