import React from 'react';

const ReporteClientes: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Reporte de Clientes</h1>
        <p className="text-text-secondary mt-1">Análisis de la cartera de clientes</p>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <p className="text-text-primary">Reporte de clientes en desarrollo...</p>
      </div>
    </div>
  );
};

export default ReporteClientes;