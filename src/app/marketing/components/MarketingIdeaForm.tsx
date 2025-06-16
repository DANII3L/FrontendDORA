import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría la lógica para guardar o actualizar la idea de marketing
    const ideaData = {
      id: id ? parseInt(id) : Date.now(), // For new ideas, generate a temporary ID
      title,
      description,
      associatedProducts: associatedProducts.split(', ').map(name => {
        const product = allProducts.find(p => p.name === name.trim());
        return product ? { id: product.id, name: product.name } : { id: Date.now(), name: name.trim() }; // Create dummy ID if product not found
      }),
      status,
      date,
    };
    console.log('Idea de marketing a guardar/actualizar:', ideaData);

    // After saving, navigate back to the marketing ideas list
    navigate('/marketing');
  };

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
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Título */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-text-secondary mb-1">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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

          {/* Productos Asociados (ejemplo: lista de IDs o nombres separados por comas) */}
          <div>
            <label htmlFor="associatedProducts" className="block text-sm font-medium text-text-secondary mb-1">Productos Asociados (nombres separados por comas)</label>
            <input
              type="text"
              id="associatedProducts"
              value={associatedProducts}
              onChange={(e) => setAssociatedProducts(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
            <p className="mt-1 text-xs text-text-tertiary">Ej: Pocket Tester (for vegetables), Smart Thermometer</p>
          </div>

          {/* Estado */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-text-secondary mb-1">Estado</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
              required
            >
              <option value="">Selecciona un estado</option>
              <option value="Activa">Activa</option>
              <option value="Pendiente">Pendiente</option>
              <option value="En Progreso">En Progreso</option>
              <option value="Completada">Completada</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </div>

          {/* Fecha (puede ser un input type=date o autogenerado) */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-text-secondary mb-1">Fecha</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>

          {/* Botón de Guardar */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-medium"
          >
            <CheckIcon className="h-6 w-6" />
            <span>Guardar Idea de Marketing</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default MarketingIdeaForm; 