import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

const ProductoForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [features, setFeatures] = useState('');
  const [testingWith, setTestingWith] = useState('');
  const [colorOptions, setColorOptions] = useState('');
  const [category, setCategory] = useState('');

  // Simular carga de datos de un producto existente para edición
  useEffect(() => {
    if (id) {
      // En un caso real, harías una llamada a una API para obtener los datos del producto
      const product = {
        id: 1,
        name: 'Pocket Tester (for vegetables)',
        price: '$385.00',
        description: 'A pocket-sized device that allows consumers to test the nitrate levels in their food. This device is an electrochemical method to detect the presence of nitrates in meat, vegetables, and other food products.',
        image: 'https://via.placeholder.com/400x300?text=Product+Image',
        features: ['20 MB - 30 GB', 'Min content adjustment: 1.25M microsecond', 'Max content adjustment: 20ms', 'Supports all major protocols', 'Up to 1080p resolution', 'Includes 1-year warranty'].join('\n'),
        testingWith: 'Vegetables, Fruits, Other',
        colorOptions: 'black, silver, white',
        category: 'Electronics',
      };

      if (product) {
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setFeatures(product.features);
        setTestingWith(product.testingWith);
        setColorOptions(product.colorOptions);
        setCategory(product.category || '');
      }
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría la lógica para guardar o actualizar el producto
    const productData = {
      id: id || Date.now(), // Para nuevos productos, generar un ID temporal
      name,
      price,
      description,
      image,
      features: features.split('\n'),
      testingWith: testingWith.split(', ').map(item => ({ name: item.trim(), icon: '' })), // Placeholder for icons
      colorOptions: colorOptions.split(', ').map(color => color.trim()),
      category,
    };
    console.log('Producto a guardar/actualizar:', productData);

    // Después de guardar, navegar de vuelta a la lista de productos o al detalle del producto
    navigate('/inventario');
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
            <h1 className="text-3xl font-bold text-text-primary">{id ? 'Editar Producto' : 'Nuevo Producto'}</h1>
            {id && <p className="text-text-secondary mt-1">ID: {id}</p>}
          </div>
        </div>
      </div>

      {/* Product Form */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Nombre del Producto</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
              required
            />
          </div>

          {/* Precio */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-text-secondary mb-1">Precio</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
              required
            />
          </div>

          {/* Descripción */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-text-secondary mb-1">Descripción</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
              required
            ></textarea>
          </div>

          {/* Imagen URL */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-text-secondary mb-1">URL de la Imagen</label>
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>

          {/* Características */}
          <div>
            <label htmlFor="features" className="block text-sm font-medium text-text-secondary mb-1">Características (una por línea)</label>
            <textarea
              id="features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            ></textarea>
          </div>

          {/* Prueba con */}
          <div>
            <label htmlFor="testingWith" className="block text-sm font-medium text-text-secondary mb-1">Prueba con (separado por comas)</label>
            <input
              type="text"
              id="testingWith"
              value={testingWith}
              onChange={(e) => setTestingWith(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>

          {/* Opciones de Color */}
          <div>
            <label htmlFor="colorOptions" className="block text-sm font-medium text-text-secondary mb-1">Opciones de Color (separado por comas)</label>
            <input
              type="text"
              id="colorOptions"
              value={colorOptions}
              onChange={(e) => setColorOptions(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>

          {/* Categoría */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-text-secondary mb-1">Categoría</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="electronica">Electrónica</option>
              <option value="herramientas">Herramientas</option>
              <option value="hogar">Hogar</option>
              <option value="salud">Salud</option>
              <option value="accesorios">Accesorios</option>
            </select>
          </div>

          {/* Botón de Guardar */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-medium"
          >
            <CheckIcon className="h-6 w-6" />
            <span>Guardar Producto</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductoForm;