import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';
import Pagination from '../../shared/components/Pagination';

const ProductosList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todas'); // Puedes definir filtros específicos para productos
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Estado para ítems por página

  const products = [
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

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'todas' || product.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (numItems: number) => {
    setItemsPerPage(numItems);
    setCurrentPage(1); // Resetear a la primera página cuando cambian los ítems por página
  };

  const availableCategories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Productos</h1>
          <p className="text-text-secondary mt-1">Gestiona tu catálogo de productos</p>
        </div>
        <Link
          to="/productos/nuevo"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nuevo Producto</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-text-secondary" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-background border border-border rounded-lg text-text-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            >
              <option value="todas">Todas las categorías</option>
              {availableCategories.map(cat => (
                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((product) => (
          <div key={product.id} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200 mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-text-secondary mb-3">{product.description}</p>
            <p className="text-xs text-text-tertiary mb-2">Categoría: {product.category}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
              <span className="text-xl font-semibold text-text-primary">{product.price}</span>
              <Link
                to={`/productos/${product.id}`}
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron productos</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza agregando un nuevo producto'}
          </p>
        </div>
      )}

      {filteredProducts.length > 0 && (
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

export default ProductosList;