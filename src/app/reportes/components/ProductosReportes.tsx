import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { Package, Filter, Eye, Download } from 'lucide-react';

const productos = [
  { id: 1, nombre: 'Producto A', stock: 120, vendidos: 80, ingresos: 12000 },
  { id: 2, nombre: 'Producto B', stock: 50, vendidos: 30, ingresos: 8500 },
  { id: 3, nombre: 'Producto C', stock: 200, vendidos: 150, ingresos: 4300 },
  { id: 4, nombre: 'Producto D', stock: 10, vendidos: 5, ingresos: 2100 },
];

const metricas = [
  { titulo: 'Total Productos', valor: '4', cambio: '+1', tendencia: 'up' },
  { titulo: 'Stock Total', valor: '380', cambio: '+20', tendencia: 'up' },
  { titulo: 'Vendidos', valor: '265', cambio: '+15', tendencia: 'up' },
  { titulo: 'Ingresos', valor: '$25,900', cambio: '+8%', tendencia: 'up' },
];

const ProductosReportes: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Reporte de Productos</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Inventario y ventas de productos</p>
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
            <Package className="h-4 w-4 text-orange-600" />
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
        <CardTitle>Productos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th>Nombre</th>
                <th>Stock</th>
                <th>Vendidos</th>
                <th>Ingresos</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productos.map(p => (
                <tr key={p.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td>{p.nombre}</td>
                  <td>{p.stock}</td>
                  <td>{p.vendidos}</td>
                  <td>${p.ingresos.toLocaleString()}</td>
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

export default ProductosReportes; 