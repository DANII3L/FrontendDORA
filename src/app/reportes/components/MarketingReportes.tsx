import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { Megaphone, Filter, Eye, Download } from 'lucide-react';

const campañas = [
  { id: 1, nombre: 'Campaña A', tipo: 'Email', alcance: 1200, conversion: '8%', estado: 'Activa' },
  { id: 2, nombre: 'Campaña B', tipo: 'SMS', alcance: 800, conversion: '5%', estado: 'Finalizada' },
  { id: 3, nombre: 'Campaña C', tipo: 'Redes', alcance: 2000, conversion: '12%', estado: 'Activa' },
];

const metricas = [
  { titulo: 'Total Campañas', valor: '3', cambio: '+1', tendencia: 'up' },
  { titulo: 'Alcance Total', valor: '4,000', cambio: '+500', tendencia: 'up' },
  { titulo: 'Conversiones', valor: '8.3%', cambio: '+1.2%', tendencia: 'up' },
  { titulo: 'Activas', valor: '2', cambio: '+1', tendencia: 'up' },
];

const MarketingReportes: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Reporte de Marketing</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Campañas y resultados de marketing</p>
      </div>
      <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center">
        <Filter className="h-4 w-4 mr-2" />Filtros
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricas.map((m, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{m.titulo}</CardTitle>
            <Megaphone className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{m.valor}</div>
            <div className="flex items-center text-xs mt-1 text-green-600">{m.cambio}</div>
          </CardContent>
        </Card>
      ))}
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Campañas Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Alcance</th>
                <th>Conversión</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campañas.map(c => (
                <tr key={c.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td>{c.nombre}</td>
                  <td>{c.tipo}</td>
                  <td>{c.alcance}</td>
                  <td>{c.conversion}</td>
                  <td>{c.estado}</td>
                  <td className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600"><Eye className="h-4 w-4" /></button>
                    <button className="p-1 text-gray-400 hover:text-gray-600"><Download className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default MarketingReportes; 