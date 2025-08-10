import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import DynamicForm from '../../shared/components/ui/DynamicForm';
import { IFieldConfig } from '../../shared/interface/IFieldConfig';

const MarketingIdeaForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [associatedProducts, setAssociatedProducts] = useState(''); // String of product names/IDs separated by commas
  const [status, setStatus] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to current date

  // Dummy list of available products for association (in a real app, this would come from an API)
  const allProducts = [
    { id: 1, name: 'Pocket Tester (for vegetables)' },
    { id: 2, name: 'Smart Thermometer' },
    { id: 3, name: 'Eco-friendly Water Bottle' },
    { id: 4, name: 'Portable Charger' },
  ];

  // Simulate loading data for an existing marketing idea for editing
  useEffect(() => {
    if (id) {
      // In a real app, you would make an API call to get the marketing idea data
      const marketingIdeas = [
        {
          id: 1,
          title: 'Campaña de Lanzamiento de Producto X',
          description: 'Crear una campaña digital completa para el lanzamiento del nuevo Smart Thermometer, incluyendo ads en redes sociales, email marketing y colaboraciones con influencers.',
          associatedProducts: [
            { id: 2, name: 'Smart Thermometer' },
          ],
          status: 'Activa',
          date: '2024-03-10',
        },
        {
          id: 2,
          title: 'Promoción de Primavera - Botellas Ecológicas',
          description: 'Ofrecer un 20% de descuento en todas las botellas ecológicas durante el mes de abril, destacando los beneficios ambientales.',
          associatedProducts: [
            { id: 3, name: 'Eco-friendly Water Bottle' },
          ],
          status: 'Pendiente',
          date: '2024-04-01',
        },
        {
          id: 3,
          title: 'Content Marketing - Testers de Alimentos',
          description: 'Desarrollar una serie de artículos de blog y videos cortos mostrando cómo usar el Pocket Tester para vegetales y sus beneficios para una vida saludable.',
          associatedProducts: [
            { id: 1, name: 'Pocket Tester (for vegetables)' },
          ],
          status: 'En Progreso',
          date: '2024-03-20',
        },
      ];

      const ideaToEdit = marketingIdeas.find(idea => idea.id === parseInt(id));
      if (ideaToEdit) {
        setTitle(ideaToEdit.title);
        setDescription(ideaToEdit.description);
        setAssociatedProducts(ideaToEdit.associatedProducts.map(p => p.name).join(', '));
        setStatus(ideaToEdit.status);
        setDate(ideaToEdit.date);
      }
    }
  }, [id]);

  const handleSubmit = (values: Record<string, any>) => {
    // Aquí se manejaría la lógica para guardar o actualizar la idea de marketing
    const ideaData = {
      id: id ? parseInt(id) : Date.now(),
      title: values.title,
      description: values.description,
      associatedProducts: values.associatedProducts.split(', ').map((name: string) => {
        const product = allProducts.find(p => p.name === name.trim());
        return product ? { id: product.id, name: product.name } : { id: Date.now(), name: name.trim() };
      }),
      status: values.status,
      date: values.date,
    };
    console.log('Idea de marketing a guardar/actualizar:', ideaData);
    navigate('/marketing');
  };

  const fields: IFieldConfig[] = [
    { name: 'title', label: 'Título', type: 'text', required: true },
    { name: 'description', label: 'Descripción', type: 'textarea', required: true },
    { name: 'associatedProducts', label: 'Productos Asociados (nombres separados por comas)', type: 'text' },
    { name: 'status', label: 'Estado', type: 'select', required: true, options: [
      { value: 'Activa', label: 'Activa' },
      { value: 'Pendiente', label: 'Pendiente' },
      { value: 'En Progreso', label: 'En Progreso' },
      { value: 'Completada', label: 'Completada' },
      { value: 'Cancelada', label: 'Cancelada' }
    ] },
    { name: 'date', label: 'Fecha', type: 'text' }
  ];
  const initialValues = { title, description, associatedProducts, status, date };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/marketing"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">{id ? 'Editar Idea de Marketing' : 'Nueva Idea de Marketing'}</h1>
            {id && <p className="text-text-secondary mt-1">ID: {id}</p>}
          </div>
        </div>
      </div>

      {/* Marketing Idea Form */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <DynamicForm
          fields={fields}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          submitText={id ? "Actualizar Idea de Marketing" : "Guardar Idea de Marketing"}
          className="space-y-6"
          renderSubmitButton={({ submitText }) => (
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
            >
              <CheckIcon className="h-6 w-6" />
              {submitText}
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default MarketingIdeaForm; 