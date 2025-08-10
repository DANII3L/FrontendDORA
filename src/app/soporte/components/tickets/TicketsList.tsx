import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicCardList from '../../../shared/components/ui/DynamicCardList';
import { TicketIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

const mockTickets = [
  { id: 1, titulo: 'Problema de acceso a la plataforma', descripcion: 'El usuario no puede iniciar sesión con sus credenciales.', estado: 'abierto', prioridad: 'alta', fechaCreacion: '2024-03-01', asignadoA: 'Soporte Nivel 1' },
  { id: 2, titulo: 'Error al cargar reportes', descripcion: 'Los reportes financieros no se muestran correctamente.', estado: 'en progreso', prioridad: 'media', fechaCreacion: '2024-02-28', asignadoA: 'Equipo de Desarrollo' },
  { id: 3, titulo: 'Solicitud de nueva característica', descripcion: 'El cliente ABC Corp solicita una nueva funcionalidad de exportación.', estado: 'pendiente', prioridad: 'baja', fechaCreacion: '2024-03-03', asignadoA: 'Product Manager' },
  { id: 4, titulo: 'Configuración de correo electrónico', descripcion: 'Ayuda para configurar la integración de email con el CRM.', estado: 'abierto', prioridad: 'media', fechaCreacion: '2024-03-02', asignadoA: 'Soporte Nivel 1' },
  { id: 5, titulo: 'Caída intermitente del servicio', descripcion: 'El sistema se desconecta por breves periodos de forma aleatoria.', estado: 'en progreso', prioridad: 'alta', fechaCreacion: '2024-02-29', asignadoA: 'DevOps' },
  { id: 6, titulo: 'Actualización de datos de cliente', descripcion: 'Necesidad de corregir información de contacto de cliente XYZ.', estado: 'cerrado', prioridad: 'baja', fechaCreacion: '2024-02-25', asignadoA: 'Soporte Nivel 1' },
  { id: 7, titulo: 'Problema con la generación de facturas', descripcion: 'Las facturas generadas tienen errores en los montos.', estado: 'abierto', prioridad: 'alta', fechaCreacion: '2024-03-04', asignadoA: 'Equipo de Contabilidad' },
  { id: 8, titulo: 'Restablecimiento de contraseña', descripcion: 'Usuario olvidó su contraseña y necesita restablecimiento.', estado: 'cerrado', prioridad: 'baja', fechaCreacion: '2024-03-01', asignadoA: 'Soporte Nivel 1' },
  { id: 9, titulo: 'Mejora en la interfaz de usuario', descripcion: 'Sugerencia para mejorar la experiencia de usuario en el módulo de productos.', estado: 'pendiente', prioridad: 'baja', fechaCreacion: '2024-03-02', asignadoA: 'Diseño UX/UI' },
];

const estadoBadge = (estado: string) => {
  if (estado === 'abierto') return <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">abierto</span>;
  if (estado === 'en progreso') return <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">en progreso</span>;
  if (estado === 'pendiente') return <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">pendiente</span>;
  if (estado === 'cerrado') return <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">cerrado</span>;
  return <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">{estado}</span>;
};
const prioridadColor = (prioridad : string) => {
  if (prioridad === 'alta') return 'text-red-500 font-semibold';
  if (prioridad === 'media') return 'text-yellow-500 font-semibold';
  if (prioridad === 'baja') return 'text-green-500 font-semibold';
  return 'text-gray-500';
};

const TicketsList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <DynamicCardList
        apiEndpoint=""
        mockData={mockTickets}
        cardFields={[]}
        title="Tickets de Soporte"
        subtitle="Gestiona los tickets de soporte"
        newButtonText="Nuevo Ticket"
        onNew={() => navigate('/soporte/nuevo')}
        filters={[
          { type: 'search', key: 'titulo', placeholder: 'Buscar tickets...' },
          { type: 'select', key: 'estado', placeholder: 'Todos', options: [
            { value: 'abierto', label: 'Abiertos' },
            { value: 'en progreso', label: 'En Progreso' },
            { value: 'pendiente', label: 'Pendientes' },
            { value: 'cerrado', label: 'Cerrados' },
          ] },
        ]}
        pagination
        renderCard={item => (
          <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                  {item.titulo}
                </h3>
                <p className="text-sm text-text-secondary">Asignado a: {item.asignadoA}</p>
              </div>
              {estadoBadge(item.estado)}
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-text-secondary mb-2">{item.descripcion}</p>
              <div className="flex items-center space-x-2 text-text-secondary">
                <CalendarIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Creado: {new Date(item.fechaCreacion).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <span className="text-sm">Prioridad: <span className={prioridadColor(item.prioridad)}>{item.prioridad}</span></span>
              </div>
            </div>
            <div className="flex items-center justify-end pt-4 border-t border-border mt-auto">
              <button
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => navigate(`/soporte/${item.id}`)}
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

export default TicketsList;