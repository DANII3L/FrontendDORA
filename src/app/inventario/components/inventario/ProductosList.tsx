import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicCardList from '../../../shared/components/ui/DynamicCardList';

const mockProducts = [
  {
    id: 1,
    name: 'Pocket Tester (for vegetables)',
    price: '$385.00',
    description: 'Dispositivo para testear niveles de nitrato.',
    image: 'https://via.placeholder.com/150x100?text=Producto+1',
    category: 'Herramientas',
  },
  {
    id: 2,
    name: 'Smart Thermometer',
    price: '$99.99',
    description: 'Termómetro inteligente con conectividad Bluetooth.',
    image: 'https://via.placeholder.com/150x100?text=Producto+2',
    category: 'Electrónica',
  },
  {
    id: 3,
    name: 'Eco-friendly Water Bottle',
    price: '$25.00',
    description: 'Botella de agua reutilizable y ecológica.',
    image: 'https://via.placeholder.com/150x100?text=Producto+3',
    category: 'Hogar',
  },
  {
    id: 4,
    name: 'Portable Charger',
    price: '$45.50',
    description: 'Cargador portátil de alta capacidad.',
    image: 'https://via.placeholder.com/150x100?text=Producto+4',
    category: 'Electrónica',
  },
  {
    id: 5,
    name: 'Wireless Headphones',
    price: '$120.00',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    image: 'https://via.placeholder.com/150x100?text=Producto+5',
    category: 'Electrónica',
  },
  {
    id: 6,
    name: 'Yoga Mat',
    price: '$30.00',
    description: 'Tapete de yoga antideslizante para ejercicios.',
    image: 'https://via.placeholder.com/150x100?text=Producto+6',
    category: 'Hogar',
  },
  {
    id: 7,
    name: 'Coffee Maker',
    price: '$75.00',
    description: 'Cafetera programable con filtro reutilizable.',
    image: 'https://via.placeholder.com/150x100?text=Producto+7',
    category: 'Hogar',
  },
  {
    id: 8,
    name: 'USB-C Hub',
    price: '$50.00',
    description: 'Hub USB-C multipuerto con entrega de energía.',
    image: 'https://via.placeholder.com/150x100?text=Producto+8',
    category: 'Electrónica',
  },
  {
    id: 9,
    name: 'Smartwatch',
    price: '$250.00',
    description: 'Reloj inteligente con monitor de ritmo cardíaco.',
    image: 'https://via.placeholder.com/150x100?text=Producto+9',
    category: 'Electrónica',
  },
];

const availableCategories = Array.from(new Set(mockProducts.map(p => p.category)));

const ProductosList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <DynamicCardList
        apiEndpoint=""
        mockData={mockProducts}
        cardFields={[]}
        title="Productos"
        subtitle="Gestiona tu catálogo de productos"
        newButtonText="Nuevo Producto"
        onNew={() => navigate('/inventario/nuevo')}
        filters={[
          { type: 'search', key: 'name', placeholder: 'Buscar productos...' },
          { type: 'select', key: 'category', placeholder: 'Todas las categorías', options: availableCategories.map(cat => ({ value: cat, label: cat })) },
        ]}
        pagination
        renderCard={item => (
          <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group flex flex-col h-full">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200 mb-1">
              {item.name}
            </h3>
            <p className="text-sm text-text-secondary mb-3">{item.description}</p>
            <p className="text-xs text-text-tertiary mb-2">Categoría: {item.category}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
              <span className="text-xl font-semibold text-text-primary">{item.price}</span>
              <button
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => navigate(`/inventario/${item.id}`)}
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

export default ProductosList;