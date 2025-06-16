import React from 'react';

const KanbanVentas: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Kanban de Ventas</h1>
        <p className="text-text-secondary mt-1">Vista de pipeline de oportunidades</p>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <p className="text-text-primary">Kanban en desarrollo...</p>
      </div>
    </div>
  );
};

export default KanbanVentas;