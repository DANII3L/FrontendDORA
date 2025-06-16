import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const OportunidadForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-6">
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
              {isEditing ? 'Editar Oportunidad' : 'Nueva Oportunidad'}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <p className="text-text-primary">Formulario en desarrollo...</p>
        <div className="flex items-center justify-end space-x-4 pt-6 border-t border-border mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors duration-200"
          >
            Cancelar
          </button>
          <button 
            className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
            ) : (
              <DocumentCheckIcon className="h-4 w-4" />
            )}
            <span>{loading ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Crear')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OportunidadForm;