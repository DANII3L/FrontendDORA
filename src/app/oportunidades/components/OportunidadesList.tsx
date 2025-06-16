import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusIcon, 
  MagnifyingGlassIcon, 
  FunnelIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const OportunidadesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todas');

  const oportunidades = [
    {
      id: 1,
      nombre: 'Sistema CRM Empresarial',
      cliente: 'ABC Corporation',
      valor: '$125,000',
      estado: 'negociacion',
      fechaCierre: '2024-02-15',
      probabilidad: 75,
      responsable: 'Juan Pérez'
    },
    {
      id: 2,
      nombre: 'Consultoría IT',
      cliente: 'XYZ Industries',
      valor: '$75,000',
      estado: 'propuesta',
      fechaCierre: '2024-02-28',
      probabilidad: 50,
      responsable: 'María García'
    },
    {
      id: 3,
      nombre: 'Migración a la Nube',
      cliente: 'Tech Solutions Ltd',
      valor: '$200,000',
      estado: 'calificacion',
      fechaCierre: '2024-03-10',
      probabilidad: 25,
      responsable: 'Carlos Rodríguez'
    }
  ];

  const filteredOportunidades = oportunidades.filter(oportunidad => {
    const matchesSearch = oportunidad.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         oportunidad.cliente.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'todas' || oportunidad.estado === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'negociacion':
        return 'bg-status-blue-light text-status-blue border-status-blue-light';
      case 'propuesta':
        return 'bg-status-orange-light text-status-orange border-status-orange-light';
      case 'calificacion':
        return 'bg-status-yellow-light text-status-yellow border-status-yellow-light';
      case 'ganada':
        return 'bg-status-green-light text-status-green border-status-green-light';
      case 'perdida':
        return 'bg-status-red-light text-status-red border-status-red-light';
      default:
        return 'bg-status-gray-light text-status-gray border-status-gray-light';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Oportunidades</h1>
          <p className="text-text-secondary mt-1">Gestiona tu pipeline de ventas</p>
        </div>
        <Link
          to="/oportunidades/nuevo"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nueva Oportunidad</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar oportunidades..."
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
              <option value="todas">Todas</option>
              <option value="calificacion">Calificación</option>
              <option value="propuesta">Propuesta</option>
              <option value="negociacion">Negociación</option>
              <option value="ganada">Ganadas</option>
              <option value="perdida">Perdidas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOportunidades.map((oportunidad) => (
          <div key={oportunidad.id} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                  {oportunidad.nombre}
                </h3>
                <p className="text-sm text-text-secondary">{oportunidad.cliente}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(oportunidad.estado)}`}>
                {oportunidad.estado}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <CurrencyDollarIcon className="h-4 w-4 text-text-secondary" />
                  <span className="text-sm">Valor</span>
                </div>
                <span className="text-lg font-semibold text-text-primary">{oportunidad.valor}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <CalendarIcon className="h-4 w-4 text-text-secondary" />
                  <span className="text-sm">Cierre estimado</span>
                </div>
                <span className="text-sm text-text-secondary">{new Date(oportunidad.fechaCierre).toLocaleDateString('es-ES')}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <UserIcon className="h-4 w-4 text-text-secondary" />
                  <span className="text-sm">Responsable</span>
                </div>
                <span className="text-sm text-text-secondary">{oportunidad.responsable}</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-text-secondary">Probabilidad</span>
                  <span className="text-sm font-medium text-text-primary">{oportunidad.probabilidad}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-primary to-red-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${oportunidad.probabilidad}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Link
                to={`/oportunidades/${oportunidad.id}`}
                className="w-full bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center block"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredOportunidades.length === 0 && (
        <div className="text-center py-12">
          <CurrencyDollarIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron oportunidades</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza agregando una nueva oportunidad'}
          </p>
        </div>
      )}
    </div>
  );
};

export default OportunidadesList;