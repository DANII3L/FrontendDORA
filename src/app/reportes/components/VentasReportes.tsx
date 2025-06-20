import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { TrendingUp, Filter, Download, Eye } from 'lucide-react';

const ventas = [
  { id: 1, cliente: 'Empresa A', monto: 12000, fecha: '2024-01-10', estado: 'Completada' },
  { id: 2, cliente: 'Empresa B', monto: 8500, fecha: '2024-01-09', estado: 'Pendiente' },
  { id: 3, cliente: 'Empresa C', monto: 4300, fecha: '2024-01-08', estado: 'Completada' },
  { id: 4, cliente: 'Empresa D', monto: 2100, fecha: '2024-01-07', estado: 'Cancelada' },
];

const metricas = [
  { titulo: 'Total Ventas', valor: '$28,900', cambio: '+10%', tendencia: 'up' },
  { titulo: 'Ventas Completadas', valor: '3', cambio: '+1', tendencia: 'up' },
  { titulo: 'Pendientes', valor: '1', cambio: '0', tendencia: 'up' },
  { titulo: 'Canceladas', valor: '1', cambio: '+1', tendencia: 'up' },
];

const VentasReportes: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Reporte de Ventas</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Resumen y análisis de ventas recientes</p>
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
            <TrendingUp className="h-4 w-4 text-orange-600" />
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
        <CardTitle>Ventas Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Cliente</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ventas.map(v => (
                <tr key={v.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td>{v.cliente}</td>
                  <td>${v.monto.toLocaleString()}</td>
                  <td>{v.fecha}</td>
                  <td>{v.estado}</td>
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

export default VentasReportes; 