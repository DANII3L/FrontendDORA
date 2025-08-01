import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { LifeBuoy, Filter, Eye, Download } from 'lucide-react';

const tickets = [
  { id: 1, asunto: 'Error de acceso', cliente: 'Juan Pérez', estado: 'Abierto', fecha: '2024-01-10' },
  { id: 2, asunto: 'Problema de facturación', cliente: 'Ana Gómez', estado: 'Cerrado', fecha: '2024-01-09' },
  { id: 3, asunto: 'Consulta general', cliente: 'Carlos Ruiz', estado: 'En Proceso', fecha: '2024-01-08' },
];

const metricas = [
  { titulo: 'Total Tickets', valor: '3', cambio: '+1', tendencia: 'up' },
  { titulo: 'Abiertos', valor: '1', cambio: '0', tendencia: 'up' },
  { titulo: 'Cerrados', valor: '1', cambio: '+1', tendencia: 'up' },
  { titulo: 'En Proceso', valor: '1', cambio: '0', tendencia: 'up' },
];

const SoporteReportes: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Reporte de Soporte</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Tickets y atención al cliente</p>
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
            <LifeBuoy className="h-4 w-4 text-orange-600" />
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
        <CardTitle>Tickets Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Asunto</th>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(t => (
                <tr key={t.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td>{t.asunto}</td>
                  <td>{t.cliente}</td>
                  <td>{t.estado}</td>
                  <td>{t.fecha}</td>
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

export default SoporteReportes; 