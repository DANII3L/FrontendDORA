import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import DynamicForm from '../../../shared/components/ui/DynamicForm';
import { IFieldConfig } from '../../../shared/interface/IFieldConfig';

const ContactoForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    nombre: isEditing ? 'Juan Pérez' : '',
    apellido: isEditing ? 'Pérez' : '',
    cargo: isEditing ? 'Director IT' : '',
    empresa: isEditing ? 'ABC Corporation' : '',
    email: isEditing ? 'juan.perez@abc.com' : '',
    telefono: isEditing ? '+1 (555) 123-4567' : '',
    telefonoMovil: isEditing ? '+1 (555) 123-4568' : '',
    direccion: isEditing ? '123 Business St, New York, NY 10001' : '',
    fechaNacimiento: isEditing ? '1985-03-15' : '',
    notas: isEditing ? 'Contacto principal para proyectos de tecnología.' : '',
    estado: isEditing ? 'activo' : 'activo',
    categoria: isEditing ? 'decision_maker' : 'contact'
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: Record<string, any>) => {
    setLoading(true);
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/contactos');
    } catch (error) {
      console.error('Error saving contact:', error);
    } finally {
      setLoading(false);
    }
  };

  const fields: IFieldConfig[] = [
    { name: 'nombre', label: 'Nombre', type: 'text', required: true },
    { name: 'apellido', label: 'Apellido', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'fechaNacimiento', label: 'Fecha de Nacimiento', type: 'text' },
    { name: 'cargo', label: 'Cargo', type: 'text', required: true },
    { name: 'empresa', label: 'Empresa', type: 'text', required: true },
    { name: 'categoria', label: 'Categoría', type: 'select', options: [
      { value: 'contact', label: 'Contacto' },
      { value: 'decision_maker', label: 'Tomador de decisiones' },
      { value: 'influencer', label: 'Influenciador' },
      { value: 'champion', label: 'Defensor' }
    ] },
    { name: 'estado', label: 'Estado', type: 'select', options: [
      { value: 'activo', label: 'Activo' },
      { value: 'inactivo', label: 'Inactivo' }
    ] },
    { name: 'telefono', label: 'Teléfono', type: 'text' },
    { name: 'telefonoMovil', label: 'Teléfono Móvil', type: 'text' },
    { name: 'direccion', label: 'Dirección', type: 'text' },
    { name: 'notas', label: 'Notas', type: 'textarea' }
  ];
  const initialValues = { ...formData };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">
              {isEditing ? 'Editar Contacto' : 'Nuevo Contacto'}
            </h1>
            <p className="text-text-secondary mt-1">
              {isEditing ? 'Actualiza la información del contacto' : 'Completa los datos del nuevo contacto'}
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-card-background backdrop-blur-lg rounded-2xl border border-border">
        <DynamicForm
          fields={fields}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          submitText={isEditing ? "Actualizar Contacto" : "Guardar Contacto"}
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

export default ContactoForm;