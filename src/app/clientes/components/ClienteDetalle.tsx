import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  PencilIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const ClienteDetalle: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in a real app, this would come from an API
  const cliente = {
    id: 1,
    nombre: 'ABC Corporation',
    contactoPrincipal: 'Juan Pérez',
    email: 'juan.perez@abc.com',
    telefono: '+1 (555) 123-4567',
    direccion: '123 Business St, New York, NY 10001',
    industria: 'Tecnología',
    fechaCreacion: '2023-06-15',
    ultimaActividad: '2024-01-15',
    estado: 'activo',
    valorTotal: '$125,000',
    sitioWeb: 'https://abccorp.com',
    empleados: '500-1000',
    descripcion: 'ABC Corporation es una empresa líder en tecnología que se especializa en soluciones empresariales innovadoras.'
  };

  const oportunidades = [
    { id: 1, nombre: 'Sistema CRM', valor: '$75,000', estado: 'negociacion', fecha: '2024-01-20' },
    { id: 2, nombre: 'Consultoría IT', valor: '$50,000', estado: 'propuesta', fecha: '2024-01-25' },
  ];

  const actividades = [
    { id: 1, tipo: 'Llamada', descripcion: 'Llamada de seguimiento', fecha: '2024-01-15 10:30', usuario: 'Joaquín' },
    { id: 2, tipo: 'Email', descripcion: 'Envío de propuesta', fecha: '2024-01-14 14:20', usuario: 'María' },
    { id: 3, tipo: 'Reunión', descripcion: 'Demo del producto', fecha: '2024-01-12 16:00', usuario: 'Carlos' },
  ];

  const contactos = [
    { id: 1, nombre: 'Juan Pérez', cargo: 'Director IT', email: 'juan.perez@abc.com', telefono: '+1 (555) 123-4567' },
    { id: 2, nombre: 'Ana Rodríguez', cargo: 'Gerente Compras', email: 'ana.rodriguez@abc.com', telefono: '+1 (555) 123-4568' },
  ];

  const tabs = [
    { id: 'overview', name: 'Resumen', icon: DocumentTextIcon },
    { id: 'opportunities', name: 'Oportunidades', icon: CurrencyDollarIcon },
    { id: 'activities', name: 'Actividades', icon: CalendarIcon },
    { id: 'contacts', name: 'Contactos', icon: UserGroupIcon },
  ];

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'activo':
        return 'bg-status-green-light text-status-green border-status-green-light';
      case 'negociacion':
        return 'bg-status-blue-light text-status-blue border-status-blue-light';
      case 'propuesta':
        return 'bg-status-orange-light text-status-orange border-status-orange-light';
      default:
        return 'bg-status-gray-light text-status-gray border-status-gray-light';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/clientes"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">{cliente.nombre}</h1>
            <p className="text-text-secondary mt-1">{cliente.industria}</p>
          </div>
        </div>
        <Link
          to={`/clientes/${id}/editar`}
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PencilIcon className="h-5 w-5" />
          <span>Editar</span>
        </Link>
      </div>

      {/* Client Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-primary/10 rounded-lg flex items-center justify-center">
              <BuildingOfficeIcon className="h-5 w-5 text-orange-primary" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Estado</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(cliente.estado)}`}>
                {cliente.estado}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-status-green-light rounded-lg flex items-center justify-center">
              <CurrencyDollarIcon className="h-5 w-5 text-status-green" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Valor Total</p>
              <p className="text-lg font-semibold text-text-primary">{cliente.valorTotal}</p>
            </div>
          </div>
        </div>

        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-status-blue-light rounded-lg flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 text-status-blue" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Cliente desde</p>
              <p className="text-sm font-medium text-text-primary">{new Date(cliente.fechaCreacion).toLocaleDateString('es-ES')}</p>
            </div>
          </div>
        </div>

        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <UserGroupIcon className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-text-secondary">Empleados</p>
              <p className="text-sm font-medium text-text-primary">{cliente.empleados}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-card-background backdrop-blur-lg rounded-2xl border border-border">
        <div className="border-b border-border">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-orange-primary text-orange-primary'
                    : 'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Información General</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="h-5 w-5 text-text-secondary" />
                      <span className="text-text-primary">{cliente.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-5 w-5 text-text-secondary" />
                      <span className="text-text-primary">{cliente.telefono}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BuildingOfficeIcon className="h-5 w-5 text-text-secondary mt-0.5" />
                      <span className="text-text-primary">{cliente.direccion}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Descripción</h3>
                  <p className="text-text-primary leading-relaxed">{cliente.descripcion}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'opportunities' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">Oportunidades</h3>
                <Link
                  to="/oportunidades/nuevo"
                  className="bg-orange-primary hover:bg-orange-primary/80 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                >
                  Nueva Oportunidad
                </Link>
              </div>
              <div className="space-y-3">
                {oportunidades.map((oportunidad) => (
                  <div key={oportunidad.id} className="bg-background p-4 rounded-xl hover:bg-card-background transition-colors duration-200 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium group-hover:text-orange-primary transition-colors duration-200">{oportunidad.nombre}</h4>
                        <p className="text-text-secondary text-sm">Fecha estimada: {new Date(oportunidad.fecha).toLocaleDateString('es-ES')}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-text-primary font-semibold">{oportunidad.valor}</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(oportunidad.estado)}`}>
                          {oportunidad.estado}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Actividades Recientes</h3>
              <div className="space-y-3">
                {actividades.map((actividad) => (
                  <div key={actividad.id} className="bg-background p-4 rounded-xl">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-primary/10 rounded-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-primary rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="text-text-primary font-medium">{actividad.descripcion}</h4>
                          <p className="text-text-secondary text-sm">{actividad.tipo} • Por {actividad.usuario}</p>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm">{actividad.fecha}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Contactos</h3>
              <div className="space-y-3">
                {contactos.map((contacto) => (
                  <div key={contacto.id} className="bg-background p-4 rounded-xl hover:bg-card-background transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">{contacto.nombre}</h4>
                        <p className="text-text-secondary text-sm">{contacto.cargo}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-text-primary text-sm">{contacto.email}</p>
                        <p className="text-text-secondary text-sm">{contacto.telefono}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClienteDetalle;