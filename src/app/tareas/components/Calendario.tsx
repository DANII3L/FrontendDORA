import React from 'react';

const Calendario: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Calendario</h1>
        <p className="text-text-secondary mt-1">Vista de calendario de tareas y eventos</p>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <p className="text-text-primary">Calendario en desarrollo...</p>
      </div>
    </div>
  );
};

export default Calendario;