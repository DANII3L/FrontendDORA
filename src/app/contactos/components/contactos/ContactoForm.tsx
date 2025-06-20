import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

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
      navigate('/contactos');
    } catch (error) {
      console.error('Error saving contact:', error);
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Información Personal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-text-secondary mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Nombre del contacto"
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-text-secondary mb-2">
                  Apellido *
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  required
                  value={formData.apellido}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Apellido del contacto"
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
                <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-text-secondary mb-2">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Información Profesional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-text-secondary mb-2">
                  Cargo *
                </label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  required
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Cargo en la empresa"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-text-secondary mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-text-secondary mb-2">
                  Categoría
                </label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                >
                  <option value="contact">Contacto</option>
                  <option value="decision_maker">Tomador de decisiones</option>
                  <option value="influencer">Influenciador</option>
                  <option value="champion">Defensor</option>
                </select>
              </div>

              <div>
                <label htmlFor="estado" className="block text-sm font-medium text-text-secondary mb-2">
                  Estado
                </label>
                <select
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                >
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Información de Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-text-secondary mb-2">
                  Teléfono Oficina
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="telefonoMovil" className="block text-sm font-medium text-text-secondary mb-2">
                  Teléfono Móvil
                </label>
                <input
                  type="tel"
                  id="telefonoMovil"
                  name="telefonoMovil"
                  value={formData.telefonoMovil}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="+1 (555) 123-4567"
                />
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
                  placeholder="Dirección completa"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="notas" className="block text-sm font-medium text-text-secondary mb-2">
                  Notas
                </label>
                <textarea
                  id="notas"
                  name="notas"
                  rows={4}
                  value={formData.notas}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
                  placeholder="Notas adicionales sobre el contacto"
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
              <span>{loading ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Crear Contacto')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactoForm;