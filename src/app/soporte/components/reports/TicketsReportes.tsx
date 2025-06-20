import React from 'react';
import { ArrowLeft, Download, Filter } from 'lucide-react';

const TicketsReportes: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
          <ArrowLeft className="h-5 w-5 text-text-primary" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Reportes de Tickets</h1>
          <p className="text-text-secondary mt-1">Análisis y estadísticas de tickets</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-background backdrop-blur-lg rounded-2xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Tickets por Estado</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Abiertos</span>
              <span className="text-text-primary font-semibold">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">En Proceso</span>
              <span className="text-text-primary font-semibold">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Cerrados</span>
              <span className="text-text-primary font-semibold">156</span>
            </div>
          </div>
        </div>

        <div className="bg-card-background backdrop-blur-lg rounded-2xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Tiempo de Resolución</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Promedio</span>
              <span className="text-text-primary font-semibold">4.5 horas</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Mínimo</span>
              <span className="text-text-primary font-semibold">0.5 horas</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Máximo</span>
              <span className="text-text-primary font-semibold">24 horas</span>
            </div>
          </div>
        </div>

        <div className="bg-card-background backdrop-blur-lg rounded-2xl border border-border p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Satisfacción</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Promedio</span>
              <span className="text-text-primary font-semibold">4.8/5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Positivas</span>
              <span className="text-text-primary font-semibold">92%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-secondary">Neutrales</span>
              <span className="text-text-primary font-semibold">6%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card-background backdrop-blur-lg rounded-2xl border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary">Tickets por Categoría</h3>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-background border border-border rounded-lg text-text-primary hover:bg-background/50 transition-colors">
              <Filter className="h-5 w-5" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white rounded-lg flex items-center space-x-2 transition-all duration-200">
              <Download className="h-5 w-5" />
              <span>Exportar</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-text-secondary border-b border-border">
                <th className="p-4">Categoría</th>
                <th className="p-4">Total Tickets</th>
                <th className="p-4">Tiempo Promedio</th>
                <th className="p-4">Satisfacción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-background/50 transition-colors">
                <td className="p-4 text-text-primary">Soporte Técnico</td>
                <td className="p-4 text-text-primary">85</td>
                <td className="p-4 text-text-primary">3.2 horas</td>
                <td className="p-4 text-text-primary">4.9/5</td>
              </tr>
              <tr className="border-b border-border hover:bg-background/50 transition-colors">
                <td className="p-4 text-text-primary">Facturación</td>
                <td className="p-4 text-text-primary">42</td>
                <td className="p-4 text-text-primary">2.8 horas</td>
                <td className="p-4 text-text-primary">4.7/5</td>
              </tr>
              <tr className="border-b border-border hover:bg-background/50 transition-colors">
                <td className="p-4 text-text-primary">Producto</td>
                <td className="p-4 text-text-primary">65</td>
                <td className="p-4 text-text-primary">5.1 horas</td>
                <td className="p-4 text-text-primary">4.6/5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketsReportes; 