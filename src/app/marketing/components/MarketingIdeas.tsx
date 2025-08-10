import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicCardList from '../../shared/components/ui/DynamicCardList';
import { LightBulbIcon, TagIcon, PencilIcon } from '@heroicons/react/24/outline';

const mockIdeas = [
  { id: 1, title: 'Campaña de Lanzamiento de Producto X', description: 'Crear una campaña digital completa para el lanzamiento del nuevo Smart Thermometer, incluyendo ads en redes sociales, email marketing y colaboraciones con influencers.', associatedProducts: [{ id: 2, name: 'Smart Thermometer' }], status: 'Activa', date: '2024-03-10' },
  { id: 2, title: 'Promoción de Primavera - Botellas Ecológicas', description: 'Ofrecer un 20% de descuento en todas las botellas ecológicas durante el mes de abril, destacando los beneficios ambientales.', associatedProducts: [{ id: 3, name: 'Eco-friendly Water Bottle' }], status: 'Pendiente', date: '2024-04-01' },
  { id: 3, title: 'Content Marketing - Testers de Alimentos', description: 'Desarrollar una serie de artículos de blog y videos cortos mostrando cómo usar el Pocket Tester para vegetales y sus beneficios para una vida saludable.', associatedProducts: [{ id: 1, name: 'Pocket Tester (for vegetables)' }], status: 'En Progreso', date: '2024-03-20' },
  { id: 4, title: 'Taller de Cocina Saludable', description: 'Organizar un taller de cocina en línea demostrando cómo preparar comidas saludables usando productos frescos y nuestro Pocket Tester.', associatedProducts: [{ id: 1, name: 'Pocket Tester (for vegetables)' }], status: 'Activa', date: '2024-04-15' },
  { id: 5, title: 'Colaboración con Nutricionistas', description: 'Establecer alianzas con nutricionistas e influencers de salud para promocionar nuestros productos en sus plataformas.', associatedProducts: [{ id: 2, name: 'Smart Thermometer' }, { id: 3, name: 'Eco-friendly Water Bottle' }], status: 'Pendiente', date: '2024-05-01' },
];

const availableStatuses = Array.from(new Set(mockIdeas.map(idea => idea.status)));

const statusBadge = (status: string) => {
  if (status === 'Activa') return <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">Activa</span>;
  if (status === 'Pendiente') return <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Pendiente</span>;
  if (status === 'En Progreso') return <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">En Progreso</span>;
  return <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">{status}</span>;
};

const MarketingIdeas: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <DynamicCardList
          apiEndpoint=""
          mockData={mockIdeas}
          cardFields={[]}
          title="Ideas de Marketing para Productos"
          subtitle="Gestiona tus estrategias de marketing relacionadas con productos"
          newButtonText="Nueva Idea de Marketing"
          onNew={() => navigate('/marketing/nueva')}
          filters={[
            { type: 'search', key: 'title', placeholder: 'Buscar ideas de marketing...' },
            { type: 'select', key: 'status', placeholder: 'Todos los estados', options: availableStatuses.map(status => ({ value: status, label: status })) },
          ]}
          pagination
          renderCard={idea => (
            <div className="p-4 border border-border rounded-lg bg-background hover:border-orange-primary transition-colors duration-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-text-primary flex items-center space-x-2">
                  <LightBulbIcon className="h-6 w-6 text-orange-primary" />
                  <span>{idea.title}</span>
                </h3>
                <div className="flex items-center space-x-2">
                  {statusBadge(idea.status)}
                  <button
                    className="text-text-secondary hover:text-orange-primary transition-colors duration-200"
                    title="Editar Idea"
                    onClick={() => navigate(`/marketing/${idea.id}/editar`)}
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-text-secondary mb-3">{idea.description}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-sm font-medium text-text-primary">Productos Asociados:</span>
                {idea.associatedProducts.length > 0 ? (
                  idea.associatedProducts.map((product: any) => (
                    <button
                      key={product.id}
                      onClick={() => navigate(`/inventario/${product.id}`)}
                      className="flex items-center space-x-1 px-2 py-1 bg-accent-light rounded-full text-xs font-medium text-text-primary hover:bg-orange-primary/20 transition-colors duration-200"
                    >
                      <TagIcon className="h-4 w-4" />
                      <span>{product.name}</span>
                    </button>
                  ))
                ) : (
                  <span className="text-sm text-text-secondary">Ninguno</span>
                )}
              </div>
              <p className="text-xs text-text-tertiary mt-2">Fecha de Creación: {idea.date}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default MarketingIdeas; 