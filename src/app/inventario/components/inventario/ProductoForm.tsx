import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import DynamicForm from '../../../shared/components/ui/DynamicForm';
import { IFieldConfig } from '../../../shared/interface/IFieldConfig';

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

  const handleSubmit = (values: Record<string, any>) => {
    // Aquí se manejaría la lógica para guardar o actualizar el producto
    console.log('Producto a guardar/actualizar:', values);
    navigate('/inventario');
  };

  const fields: IFieldConfig[] = [
    { name: 'nombre', label: 'Nombre', type: 'text', required: true},
    { name: 'precio', label: 'Precio', type: 'number', required: true, widthClass: 'md:w-1/2' },
    { name: 'descripcion', label: 'Descripción', type: 'textarea', colSpan: 2 },
    { name: 'imagen', label: 'URL de la Imagen', type: 'text' },
    { name: 'caracteristicas', label: 'Características (una por línea)', type: 'textarea' },
    { name: 'pruebaCon', label: 'Prueba con (separado por comas)', type: 'text' },
    { name: 'colorOptions', label: 'Opciones de Color (separado por comas)', type: 'text' },
    { name: 'categoria', label: 'Categoría', type: 'select', required: true, options: [
      { value: 'electronica', label: 'Electrónica' },
      { value: 'herramientas', label: 'Herramientas' },
      { value: 'hogar', label: 'Hogar' },
      { value: 'salud', label: 'Salud' },
      { value: 'accesorios', label: 'Accesorios' }
    ] }
  ];

  const initialValues = {
    nombre: name,
    precio: price,
    descripcion: description,
    imagen: image,
    caracteristicas: features,
    pruebaCon: testingWith,
    colorOptions: colorOptions,
    categoria: category
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
        <DynamicForm
          fields={fields}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          submitText="Guardar Producto"
          className="space-y-6"
        />
      </div>
    </div>
  );
};

export default ProductoForm;