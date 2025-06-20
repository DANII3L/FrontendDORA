import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { Users, Filter, Eye, Download } from 'lucide-react';

const clientes = [
  { id: 1, nombre: 'Juan Pérez', empresa: 'Empresa A', compras: 5, total: 12000 },
  { id: 2, nombre: 'Ana Gómez', empresa: 'Empresa B', compras: 3, total: 8500 },
  { id: 3, nombre: 'Carlos Ruiz', empresa: 'Empresa C', compras: 2, total: 4300 },
  { id: 4, nombre: 'Laura Díaz', empresa: 'Empresa D', compras: 1, total: 2100 },
];

const metricas = [
  { titulo: 'Total Clientes', valor: '4', cambio: '+1', tendencia: 'up' },
  { titulo: 'Compras Totales', valor: '11', cambio: '+2', tendencia: 'up' },
  { titulo: 'Clientes Activos', valor: '3', cambio: '+1', tendencia: 'up' },
  { titulo: 'Clientes Inactivos', valor: '1', cambio: '0', tendencia: 'up' },
];

const ClientesReportes: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Reporte de Clientes</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Análisis de clientes y compras</p>
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
            <Users className="h-4 w-4 text-orange-600" />
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
        <CardTitle>Clientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Compras</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(c => (
                <tr key={c.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td>{c.nombre}</td>
                  <td>{c.empresa}</td>
                  <td>{c.compras}</td>
                  <td>${c.total.toLocaleString()}</td>
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

export default ClientesReportes; 