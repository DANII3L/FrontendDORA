import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to client detail or list
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Información Básica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-text-secondary mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Ingresa el nombre de la empresa"
                />
              </div>

              <div>
                <label htmlFor="contactoPrincipal" className="block text-sm font-medium text-text-secondary mb-2">
                  Contacto Principal *
                </label>
                <input
                  type="text"
                  id="contactoPrincipal"
                  name="contactoPrincipal"
                  required
                  value={formData.contactoPrincipal}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Nombre del contacto principal"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="email@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-text-secondary mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="sitioWeb" className="block text-sm font-medium text-text-secondary mb-2">
                  Sitio Web
                </label>
                <input
                  type="url"
                  id="sitioWeb"
                  name="sitioWeb"
                  value={formData.sitioWeb}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="https://empresa.com"
                />
              </div>

              <div>
                <label htmlFor="estado" className="block text-sm font-medium text-text-secondary mb-2">
                  Estado *
                </label>
                <select
                  id="estado"
                  name="estado"
                  required
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                >
                  <option value="prospecto">Prospecto</option>
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Detalles de la Empresa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industria" className="block text-sm font-medium text-text-secondary mb-2">
                  Industria
                </label>
                <input
                  type="text"
                  id="industria"
                  name="industria"
                  value={formData.industria}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Ej: Tecnología, Manufactura, Servicios"
                />
              </div>

              <div>
                <label htmlFor="empleados" className="block text-sm font-medium text-text-secondary mb-2">
                  Número de Empleados
                </label>
                <select
                  id="empleados"
                  name="empleados"
                  value={formData.empleados}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500-1000">500-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="direccion" className="block text-sm font-medium text-text-secondary mb-2">
                  Dirección
                </label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Dirección completa de la empresa"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="descripcion" className="block text-sm font-medium text-text-secondary mb-2">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Descripción de la empresa y sus actividades principales"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-border">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
              ) : (
                <DocumentCheckIcon className="h-4 w-4" />
              )}
              <span>{loading ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Crear Cliente')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteForm;