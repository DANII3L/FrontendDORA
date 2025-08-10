import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { FileBarChart, Filter, Eye, Download, Plus } from 'lucide-react';

const personalizados = [
  { id: 1, nombre: 'Reporte Especial 1', descripcion: 'Reporte a medida para ventas', fecha: '2024-01-10' },
  { id: 2, nombre: 'Reporte Especial 2', descripcion: 'Reporte de clientes VIP', fecha: '2024-01-09' },
];

const metricas = [
  { titulo: 'Total Personalizados', valor: '2', cambio: '+1', tendencia: 'up' },
  { titulo: 'Último Generado', valor: '2024-01-10', cambio: '', tendencia: 'up' },
  { titulo: 'Descargas', valor: '15', cambio: '+5', tendencia: 'up' },
  { titulo: 'Compartidos', valor: '3', cambio: '+1', tendencia: 'up' },
];

const PersonalizadosReportes: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Reportes Personalizados</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Crea y gestiona reportes a medida</p>
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
            <FileBarChart className="h-4 w-4 text-orange-600" />
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
        <CardTitle className="flex items-center justify-between">
          <span>Reportes Personalizados</span>
          <button className="px-3 py-1 bg-orange-600 text-white rounded text-sm hover:bg-orange-700 flex items-center"><Plus className="h-4 w-4 mr-1" />Nuevo</button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {personalizados.map(p => (
            <div key={p.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{p.nombre}</h3>
                <p className="text-sm text-gray-500">{p.descripcion}</p>
                <p className="text-xs text-gray-400">{p.fecha}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600"><Eye className="h-4 w-4" /></button>
                <button className="p-2 text-gray-400 hover:text-gray-600"><Download className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default PersonalizadosReportes; 