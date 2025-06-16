import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, PencilIcon } from '@heroicons/react/24/outline';

const OportunidadDetalle: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/oportunidades"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Detalle de Oportunidad</h1>
            <p className="text-text-secondary mt-1">ID: {id}</p>
          </div>
        </div>
        <Link
          to={`/oportunidades/${id}/editar`}
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PencilIcon className="h-5 w-5" />
          <span>Editar</span>
        </Link>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <p className="text-text-primary">Componente en desarrollo...</p>
      </div>
    </div>
  );
};

export default OportunidadDetalle;