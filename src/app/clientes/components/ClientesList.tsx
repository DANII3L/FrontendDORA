import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicCardList from '../../shared/components/ui/DynamicCardList';
import { EnvelopeIcon, PhoneIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const mockClientes = [
  { id: 1, nombre: 'ABC Corporation', contacto: 'Juan Pérez', email: 'juan.perez@abc.com', telefono: '+1 (555) 123-4567', estado: 'activo', valor: '$125,000', ultimaActividad: '2024-01-15', industria: 'Tecnología' },
  { id: 2, nombre: 'XYZ Industries', contacto: 'María García', email: 'maria.garcia@xyz.com', telefono: '+1 (555) 987-6543', estado: 'prospecto', valor: '$75,000', ultimaActividad: '2024-01-14', industria: 'Manufactura' },
  { id: 3, nombre: 'Tech Solutions Ltd', contacto: 'Carlos Rodríguez', email: 'carlos@techsolutions.com', telefono: '+1 (555) 456-7890', estado: 'activo', valor: '$200,000', ultimaActividad: '2024-01-13', industria: 'Software' },
  { id: 4, nombre: 'Global Enterprises', contacto: 'Ana Martínez', email: 'ana.martinez@global.com', telefono: '+1 (555) 321-0987', estado: 'inactivo', valor: '$50,000', ultimaActividad: '2024-01-10', industria: 'Servicios' },
  { id: 5, nombre: 'Innovate Solutions', contacto: 'Pedro Gómez', email: 'pedro.gomez@innovate.com', telefono: '+1 (555) 111-2222', estado: 'activo', valor: '$90,000', ultimaActividad: '2024-01-20', industria: 'Consultoría' },
  { id: 6, nombre: 'Dynamic Systems', contacto: 'Laura Fernández', email: 'laura.fernandez@dynamic.com', telefono: '+1 (555) 333-4444', estado: 'prospecto', valor: '$60,000', ultimaActividad: '2024-01-18', industria: 'Energía' },
  { id: 7, nombre: 'Future Tech', contacto: 'Miguel Torres', email: 'miguel.torres@futuretech.com', telefono: '+1 (555) 555-6666', estado: 'activo', valor: '$150,000', ultimaActividad: '2024-01-22', industria: 'Robótica' },
  { id: 8, nombre: 'Creative Minds', contacto: 'Sofía Ruíz', email: 'sofia.ruiz@creative.com', telefono: '+1 (555) 777-8888', estado: 'inactivo', valor: '$30,000', ultimaActividad: '2024-01-19', industria: 'Publicidad' },
  { id: 9, nombre: 'Digital Solutions', contacto: 'Ricardo Castro', email: 'ricardo.castro@digital.com', telefono: '+1 (555) 999-0000', estado: 'activo', valor: '$180,000', ultimaActividad: '2024-01-21', industria: 'Marketing Digital' },
];

const estadoBadge = (estado: string) => {
  if (estado === 'activo') return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">activo</span>;
  if (estado === 'prospecto') return <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">prospecto</span>;
  if (estado === 'inactivo') return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">inactivo</span>;
  return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">{estado}</span>;
};

const ClientesList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <DynamicCardList
        apiEndpoint=""
        mockData={mockClientes}
        cardFields={[]}
        title="Clientes"
        subtitle="Gestiona tu cartera de clientes"
        newButtonText="Nuevo Cliente"
        onNew={() => navigate('/clientes/nuevo')}
        filters={[
          { type: 'search', key: 'nombre', placeholder: 'Buscar clientes...' },
          { type: 'select', key: 'estado', placeholder: 'Todos', options: [
            { value: 'activo', label: 'Activos' },
            { value: 'prospecto', label: 'Prospectos' },
            { value: 'inactivo', label: 'Inactivos' },
          ] },
        ]}
        pagination
        renderCard={item => (
          <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                  {item.nombre}
                </h3>
                <p className="text-sm text-text-secondary">Contacto: {item.contacto}</p>
              </div>
              {estadoBadge(item.estado)}
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <EnvelopeIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{item.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <PhoneIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{item.telefono}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <BuildingOfficeIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Industria: {item.industria}</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
              <div>
                <p className="text-xs text-text-secondary">Última actividad</p>
                <p className="text-sm font-medium text-text-primary">{new Date(item.ultimaActividad).toLocaleDateString('es-ES')}</p>
              </div>
              <button
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => navigate(`/clientes/${item.id}`)}
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

export default ClientesList;