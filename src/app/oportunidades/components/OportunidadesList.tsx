import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicCardList from '../../shared/components/ui/DynamicCardList';
import { CurrencyDollarIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

const mockOportunidades = [
  { id: 1, nombre: 'Sistema CRM Empresarial', cliente: 'ABC Corporation', valor: '$125,000', estado: 'negociacion', fechaCierre: '2024-02-15', probabilidad: 75, responsable: 'Juan Pérez' },
  { id: 2, nombre: 'Consultoría IT', cliente: 'XYZ Industries', valor: '$75,000', estado: 'propuesta', fechaCierre: '2024-02-28', probabilidad: 50, responsable: 'María García' },
  { id: 3, nombre: 'Migración a la Nube', cliente: 'Tech Solutions Ltd', valor: '$200,000', estado: 'calificacion', fechaCierre: '2024-03-10', probabilidad: 25, responsable: 'Carlos Rodríguez' },
  { id: 4, nombre: 'Implementación de ERP', cliente: 'Global Solutions', valor: '$300,000', estado: 'negociacion', fechaCierre: '2024-03-20', probabilidad: 80, responsable: 'Ana López' },
  { id: 5, nombre: 'Desarrollo de App Móvil', cliente: 'Mobile Innovations', valor: '$90,000', estado: 'propuesta', fechaCierre: '2024-03-25', probabilidad: 60, responsable: 'Pedro Martínez' },
  { id: 6, nombre: 'Servicios de Ciberseguridad', cliente: 'Secure Corp', valor: '$180,000', estado: 'calificacion', fechaCierre: '2024-04-01', probabilidad: 40, responsable: 'Sofía García' },
  { id: 7, nombre: 'Actualización de Infraestructura', cliente: 'Old Systems Inc.', valor: '$100,000', estado: 'ganada', fechaCierre: '2024-01-30', probabilidad: 100, responsable: 'Juan Pérez' },
  { id: 8, nombre: 'Soporte Técnico Anual', cliente: 'New Startups LLC', valor: '$50,000', estado: 'perdida', fechaCierre: '2024-02-01', probabilidad: 0, responsable: 'María García' },
];

const estadoBadge = (estado: string) => {
  if (estado === 'negociacion') return <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">negociación</span>;
  if (estado === 'propuesta') return <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">propuesta</span>;
  if (estado === 'calificacion') return <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">calificación</span>;
  if (estado === 'ganada') return <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">ganada</span>;
  if (estado === 'perdida') return <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">perdida</span>;
  return <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">{estado}</span>;
};

const OportunidadesList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <DynamicCardList
        apiEndpoint=""
        mockData={mockOportunidades}
        cardFields={[]}
        title="Oportunidades"
        subtitle="Gestiona tu pipeline de ventas"
        newButtonText="Nueva Oportunidad"
        onNew={() => navigate('/oportunidades/nuevo')}
        filters={[
          { type: 'search', key: 'nombre', placeholder: 'Buscar oportunidades...' },
          { type: 'select', key: 'estado', placeholder: 'Todas', options: [
            { value: 'calificacion', label: 'Calificación' },
            { value: 'propuesta', label: 'Propuesta' },
            { value: 'negociacion', label: 'Negociación' },
            { value: 'ganada', label: 'Ganadas' },
            { value: 'perdida', label: 'Perdidas' },
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
                <p className="text-sm text-text-secondary">Cliente: {item.cliente}</p>
              </div>
              {estadoBadge(item.estado)}
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <CurrencyDollarIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Valor: {item.valor}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <CalendarIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Cierre: {new Date(item.fechaCierre).toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <UserIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">Responsable: {item.responsable}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <span className="text-sm">Probabilidad: <span className="font-semibold">{item.probabilidad}%</span></span>
              </div>
            </div>
            <div className="flex items-center justify-end pt-4 border-t border-border mt-auto">
              <button
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => navigate(`/oportunidades/${item.id}`)}
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

export default OportunidadesList;