import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicCardList from '../../../shared/components/ui/DynamicCardList';
import { UserIcon, EnvelopeIcon, PhoneIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const mockContactos = [
  { id: 1, nombre: 'Juan Pérez', cargo: 'Director IT', empresa: 'ABC Corporation', email: 'juan.perez@abc.com', telefono: '+1 (555) 123-4567', estado: 'activo', ultimaActividad: '2024-01-15' },
  { id: 2, nombre: 'María García', cargo: 'Gerente de Compras', empresa: 'XYZ Industries', email: 'maria.garcia@xyz.com', telefono: '+1 (555) 987-6543', estado: 'activo', ultimaActividad: '2024-01-14' },
  { id: 3, nombre: 'Carlos Rodríguez', cargo: 'CEO', empresa: 'Tech Solutions Ltd', email: 'carlos@techsolutions.com', telefono: '+1 (555) 456-7890', estado: 'activo', ultimaActividad: '2024-01-13' },
  { id: 4, nombre: 'Ana Martínez', cargo: 'Directora Financiera', empresa: 'Global Enterprises', email: 'ana.martinez@global.com', telefono: '+1 (555) 321-0987', estado: 'inactivo', ultimaActividad: '2024-01-10' },
];

const estadoBadge = (estado: string) => {
  if (estado === 'activo') return <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">activo</span>;
  if (estado === 'inactivo') return <span className="bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-xs font-semibold">inactivo</span>;
  return <span className="bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-xs font-semibold">{estado}</span>;
};

const ContactosList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <DynamicCardList
        apiEndpoint=""
        mockData={mockContactos}
        cardFields={[]}
        title="Contactos"
        subtitle="Gestiona todos los contactos de tus clientes"
        newButtonText="Nuevo Contacto"
        onNew={() => navigate('/contactos/nuevo')}
        filters={[
          { type: 'search', key: 'nombre', placeholder: 'Buscar contactos...' },
          { type: 'select', key: 'estado', placeholder: 'Todos', options: [
            { value: 'activo', label: 'Activos' },
            { value: 'inactivo', label: 'Inactivos' },
          ] },
        ]}
        pagination
        renderCard={item => (
          <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-primary/10 rounded-xl flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-orange-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                    {item.nombre}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.cargo}</p>
                </div>
              </div>
              {estadoBadge(item.estado)}
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <BuildingOfficeIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{item.empresa}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <EnvelopeIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{item.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <PhoneIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{item.telefono}</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
              <div>
                <p className="text-sm text-text-secondary">Última actividad</p>
                <p className="text-sm font-medium text-text-primary">{new Date(item.ultimaActividad).toLocaleDateString('es-ES')}</p>
              </div>
              <button
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => navigate(`/contactos/${item.id}/editar`)}
              >
                Editar
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default ContactosList;