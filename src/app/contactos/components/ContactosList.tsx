import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusIcon, 
  MagnifyingGlassIcon, 
  FunnelIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const ContactosList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');

  const contactos = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      cargo: 'Director IT',
      empresa: 'ABC Corporation',
      email: 'juan.perez@abc.com',
      telefono: '+1 (555) 123-4567',
      estado: 'activo',
      ultimaActividad: '2024-01-15'
    },
    {
      id: 2,
      nombre: 'María García',
      cargo: 'Gerente de Compras',
      empresa: 'XYZ Industries',
      email: 'maria.garcia@xyz.com',
      telefono: '+1 (555) 987-6543',
      estado: 'activo',
      ultimaActividad: '2024-01-14'
    },
    {
      id: 3,
      nombre: 'Carlos Rodríguez',
      cargo: 'CEO',
      empresa: 'Tech Solutions Ltd',
      email: 'carlos@techsolutions.com',
      telefono: '+1 (555) 456-7890',
      estado: 'activo',
      ultimaActividad: '2024-01-13'
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      cargo: 'Directora Financiera',
      empresa: 'Global Enterprises',
      email: 'ana.martinez@global.com',
      telefono: '+1 (555) 321-0987',
      estado: 'inactivo',
      ultimaActividad: '2024-01-10'
    }
  ];

  const filteredContactos = contactos.filter(contacto => {
    const matchesSearch = contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contacto.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contacto.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contacto.cargo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'todos' || contacto.estado === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'activo':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactivo':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Contactos</h1>
          <p className="text-text-secondary mt-1">Gestiona todos los contactos de tus clientes</p>
        </div>
        <Link
          to="/contactos/nuevo"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nuevo Contacto</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar contactos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-text-secondary" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-background border border-border rounded-lg text-text-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            >
              <option value="todos">Todos</option>
              <option value="activo">Activos</option>
              <option value="inactivo">Inactivos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContactos.map((contacto) => (
          <div key={contacto.id} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-primary/10 rounded-xl flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-orange-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                    {contacto.nombre}
                  </h3>
                  <p className="text-sm text-text-secondary">{contacto.cargo}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(contacto.estado)}`}>
                {contacto.estado}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <BuildingOfficeIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{contacto.empresa}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <EnvelopeIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{contacto.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <PhoneIcon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm">{contacto.telefono}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="text-sm text-text-secondary">Última actividad</p>
                <p className="text-sm font-medium text-text-primary">{new Date(contacto.ultimaActividad).toLocaleDateString('es-ES')}</p>
              </div>
              <Link
                to={`/contactos/${contacto.id}/editar`}
                className="bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredContactos.length === 0 && (
        <div className="text-center py-12">
          <UserIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron contactos</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza agregando un nuevo contacto'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactosList;