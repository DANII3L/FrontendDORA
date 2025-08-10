import React from 'react';
import { useParams } from 'react-router-dom';

const TareaDetalle: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Detalle de Tarea</h1>
        <p className="text-text-secondary mt-1">ID: {id}</p>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <p className="text-text-primary">Detalle de tarea en desarrollo...</p>
      </div>
    </div>
  );
};

export default TareaDetalle;