import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import DynamicCardList from '../../shared/components/ui/DynamicCardList';

const mockTareas = [
  {
    id: 1,
    nombre: 'Preparar presentación para junta semanal',
    responsable: 'Joaquín',
    fechaVencimiento: '2024-03-09',
    prioridad: 'alta',
    estado: 'pendiente',
  },
  {
    id: 2,
    nombre: 'Enviar reporte de gastos',
    responsable: 'María',
    fechaVencimiento: '2024-03-04',
    prioridad: 'media',
    estado: 'completada',
  },
  {
    id: 3,
    nombre: 'Programar reunión con nuevo cliente',
    responsable: 'Carlos',
    fechaVencimiento: '2024-03-11',
    prioridad: 'alta',
    estado: 'en progreso',
  },
  {
    id: 4,
    nombre: 'Actualizar base de datos de productos',
    responsable: 'Joaquín',
    fechaVencimiento: '2024-03-14',
    prioridad: 'media',
    estado: 'pendiente',
  },
  {
    id: 5,
    nombre: 'Revisar contratos pendientes',
    responsable: 'María',
    fechaVencimiento: '2024-03-07',
    prioridad: 'alta',
    estado: 'completada',
  },
  {
    id: 6,
    nombre: 'Capacitación de nuevo software',
    responsable: 'Carlos',
    fechaVencimiento: '2024-03-19',
    prioridad: 'baja',
    estado: 'en progreso',
  },
];

const estadoBadge = (estado: string) => {
  if (estado === 'pendiente') return <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">pendiente</span>;
  if (estado === 'completada') return <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">completada</span>;
  if (estado === 'en progreso') return <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">en progreso</span>;
  return <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">{estado}</span>;
};

const prioridadColor = (prioridad: string) => {
  if (prioridad === 'alta') return 'text-red-500 font-semibold';
  if (prioridad === 'media') return 'text-yellow-500 font-semibold';
  if (prioridad === 'baja') return 'text-green-500 font-semibold';
  return 'text-gray-500';
};

const TareasList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <DynamicCardList
        apiEndpoint=""
        mockData={mockTareas}
        cardFields={[]}
        filters={[
          { type: 'search', key: 'nombre', placeholder: 'Buscar tareas...' },
          { type: 'select', key: 'estado', placeholder: 'Todas', options: [
            { value: 'pendiente', label: 'Pendientes' },
            { value: 'en progreso', label: 'En Progreso' },
            { value: 'completada', label: 'Completadas' },
          ] },
        ]}
        pagination
        title="Tareas"
        subtitle="Gestiona tus tareas y actividades"
        newButtonText="Nueva Tarea"
        onNew={() => navigate('/tareas/nuevo')}
        renderCard={item => (
          <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                  {item.nombre}
                </h3>
                <p className="text-sm text-text-secondary">Responsable: {item.responsable}</p>
              </div>
              {estadoBadge(item.estado)}
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <CalendarIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Vence: {new Date(item.fechaVencimiento).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <UserIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Prioridad: <span className={prioridadColor(item.prioridad)}>{item.prioridad}</span></span>
              </div>
            </div>
            <div className="pt-4 border-t border-border mt-auto">
              <button
                className="w-full bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center block"
                onClick={() => navigate(`/tareas/${item.id}`)}
              >
                Ver Detalle
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TareasList;