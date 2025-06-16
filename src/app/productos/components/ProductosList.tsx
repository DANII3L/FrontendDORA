import React from 'react';

const ProductosList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Productos</h1>
        <p className="text-text-secondary mt-1">Gestiona tu catálogo de productos</p>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <p className="text-text-primary">Lista de productos en desarrollo...</p>
      </div>
    </div>
  );
};

export default ProductosList;