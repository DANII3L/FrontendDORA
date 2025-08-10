import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import DynamicForm from '../../shared/components/ui/DynamicForm';
import { IFieldConfig } from '../../shared/interface/IFieldConfig';

const ClienteForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    nombre: isEditing ? 'ABC Corporation' : '',
    contactoPrincipal: isEditing ? 'Juan Pérez' : '',
    email: isEditing ? 'juan.perez@abc.com' : '',
    telefono: isEditing ? '+1 (555) 123-4567' : '',
    direccion: isEditing ? '123 Business St, New York, NY 10001' : '',
    sitioWeb: isEditing ? 'https://abccorp.com' : '',
    industria: isEditing ? 'Tecnología' : '',
    empleados: isEditing ? '500-1000' : '',
    descripcion: isEditing ? 'ABC Corporation es una empresa líder en tecnología que se especializa en soluciones empresariales innovadoras.' : '',
    estado: isEditing ? 'activo' : 'prospecto'
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: Record<string, any>) => {
    setLoading(true);
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (isEditing) {
        navigate(`/clientes/${id}`);
      } else {
        navigate('/clientes');
      }
    } catch (error) {
      console.error('Error saving client:', error);
    } finally {
      setLoading(false);
    }
  };

  const fields: IFieldConfig[] = [
    { name: 'nombre', label: 'Nombre de la Empresa', type: 'text', required: true },
    { name: 'contactoPrincipal', label: 'Contacto Principal', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'telefono', label: 'Teléfono', type: 'text', required: true },
    { name: 'sitioWeb', label: 'Sitio Web', type: 'text' },
    { name: 'industria', label: 'Industria', type: 'text' },
    { name: 'empleados', label: 'Empleados', type: 'text' },
    { name: 'direccion', label: 'Dirección', type: 'text' },
    { name: 'descripcion', label: 'Descripción', type: 'textarea', colSpan: 2 },
    { name: 'estado', label: 'Estado', type: 'select', required: true, options: [
      { value: 'prospecto', label: 'Prospecto' },
      { value: 'activo', label: 'Activo' },
      { value: 'inactivo', label: 'Inactivo' }
    ]}
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
              {isEditing ? 'Editar Cliente' : 'Nuevo Cliente'}
            </h1>
            <p className="text-text-secondary mt-1">
              {isEditing ? 'Actualiza la información del cliente' : 'Completa los datos del nuevo cliente'}
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
          submitText={isEditing ? "Actualizar Cliente" : "Guardar Cliente"}
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

export default ClienteForm;