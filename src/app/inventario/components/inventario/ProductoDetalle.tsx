import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, PencilIcon } from '@heroicons/react/24/outline';

const ProductoDetalle: React.FC = () => {
  const { id } = useParams();

  // Datos de ejemplo para el producto (deberían venir de una API en un caso real)
  const product = {
    id: 1,
    name: 'Pocket Tester (for vegetables)',
    price: '$385.00',
    description: 'A pocket-sized device that allows consumers to test the nitrate levels in their food. This device is an electrochemical method to detect the presence of nitrates in meat, vegetables, and other food products.',
    image: 'https://via.placeholder.com/400x300?text=Product+Image', // Reemplazar con la ruta real de la imagen
    category: 'Electrónica',
    features: [
      '20 MB - 30 GB',
      'Min content adjustment: 1.25M microsecond',
      'Max content adjustment: 20ms',
      'Supports all major protocols',
      'Up to 1080p resolution',
      'Includes 1-year warranty',
    ],
    testingWith: [
      { name: 'Vegetables', icon: '🥦' }, // Placeholder for icons
      { name: 'Fruits', icon: '🍎' },
      { name: 'Other', icon: '🍽️' },
    ],
    colorOptions: ['black', 'silver', 'white'], // Placeholder for color options
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/inventario"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Detalle de Producto</h1>
            <p className="text-text-secondary mt-1">ID: {id}</p>
          </div>
        </div>
        <Link
          to={`/inventario/${product.id}/editar`}
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PencilIcon className="h-5 w-5" />
          <span>Modificar</span>
        </Link>
      </div>

      {/* Product Detail Section */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="lg:w-1/2 flex items-center justify-center p-4 bg-background rounded-lg">
          <img src={product.image} alt={product.name} className="max-w-full h-auto object-contain" />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-text-primary">{product.name}</h2>
            <p className="text-2xl font-semibold text-orange-primary mt-2">{product.price}</p>
            <p className="text-sm text-text-secondary mt-1">Categoría: {product.category}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-text-primary">Descripción del Producto</h3>
            <p className="text-text-secondary leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-text-primary">Características</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-text-primary">Prueba con</h3>
            <div className="flex space-x-4">
              {product.testingWith.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-text-secondary">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-text-primary">Color</h3>
            <div className="flex space-x-3">
              {product.colorOptions.map((color, index) => (
                <span
                  key={index}
                  className={`w-6 h-6 rounded-full border-2 border-border cursor-pointer`}
                  style={{ backgroundColor: color === 'black' ? '#000' : color === 'silver' ? '#C0C0C0' : '#FFF' }} // Colores básicos
                  title={color}
                ></span>
              ))}
            </div>
          </div>

          <Link
            to={`/inventario/${product.id}/editar`}
            className="w-full bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-medium"
          >
            <PencilIcon className="h-6 w-6" />
            <span>Modificar</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle; 