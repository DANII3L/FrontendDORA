import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Star,
  Percent,
} from 'lucide-react';

const ProductosReportes: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mes');

  // Datos de ejemplo para los gráficos
  const productosPorCategoria = [
    { categoria: 'Software', cantidad: 35 },
    { categoria: 'Hardware', cantidad: 25 },
    { categoria: 'Servicios', cantidad: 20 },
    { categoria: 'Consultoría', cantidad: 15 },
    { categoria: 'Otros', cantidad: 5 },
  ];

  const productosPorPrecio = [
    { rango: '0-100', cantidad: 30 },
    { rango: '101-500', cantidad: 45 },
    { rango: '501-1000', cantidad: 20 },
    { rango: '1000+', cantidad: 5 },
  ];

  const ventasMensuales = [
    { mes: 'Ene', ventas: 45000, unidades: 35 },
    { mes: 'Feb', ventas: 50000, unidades: 40 },
    { mes: 'Mar', ventas: 55000, unidades: 45 },
    { mes: 'Abr', ventas: 60000, unidades: 50 },
    { mes: 'May', ventas: 65000, unidades: 55 },
    { mes: 'Jun', ventas: 70000, unidades: 60 },
  ];

  const metricas = [
    {
      titulo: 'Ventas Totales',
      valor: '$70,000',
      cambio: '+15%',
      icono: DollarSign,
      color: 'text-green-500',
    },
    {
      titulo: 'Unidades Vendidas',
      valor: '60',
      cambio: '+10%',
      icono: ShoppingCart,
      color: 'text-blue-500',
    },
    {
      titulo: 'Margen Promedio',
      valor: '35%',
      cambio: '+8%',
      icono: Percent,
      color: 'text-purple-500',
    },
    {
      titulo: 'Satisfacción',
      valor: '4.8/5',
      cambio: '+0.2',
      icono: Star,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Reportes de Productos</h1>
          <p className="text-text-secondary mt-1">Análisis y métricas de ventas</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="bg-card-background border border-border rounded-lg text-text-primary px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
          >
            <option value="semana">Última semana</option>
            <option value="mes">Último mes</option>
            <option value="trimestre">Último trimestre</option>
            <option value="año">Último año</option>
          </select>
          <button className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200">
            <BarChart3 className="h-5 w-5" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <div
            key={index}
            className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">{metrica.titulo}</p>
                <h3 className="text-2xl font-bold text-text-primary mt-1">{metrica.valor}</h3>
                <p className={`text-sm ${metrica.cambio.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {metrica.cambio} vs mes anterior
                </p>
              </div>
              <div className={`p-3 rounded-xl ${metrica.color} bg-opacity-10`}>
                <metrica.icono className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Productos por Categoría */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Productos por Categoría</h3>
          <div className="space-y-4">
            {productosPorCategoria.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.categoria}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...productosPorCategoria.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Productos por Precio */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Distribución por Precio</h3>
          <div className="space-y-4">
            {productosPorPrecio.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.rango}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...productosPorPrecio.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ventas Mensuales */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border lg:col-span-2">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Ventas Mensuales</h3>
          <div className="h-64 flex items-end space-x-4">
            {ventasMensuales.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div
                    className="w-full bg-gradient-to-r from-orange-primary to-red-primary rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${(item.ventas / Math.max(...ventasMensuales.map(c => c.ventas))) * 100}%` }}
                  />
                  <div
                    className="w-full bg-gray-500/20 rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${(item.unidades / Math.max(...ventasMensuales.map(c => c.unidades))) * 100}%` }}
                  />
                </div>
                <span className="text-text-secondary text-sm mt-2">{item.mes}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-primary to-red-primary rounded-full mr-2" />
              <span className="text-text-secondary text-sm">Ventas ($)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-500/20 rounded-full mr-2" />
              <span className="text-text-secondary text-sm">Unidades</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de Resumen */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Resumen de Ventas</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-text-secondary border-b border-border">
                <th className="pb-3">Métrica</th>
                <th className="pb-3">Valor</th>
                <th className="pb-3">Cambio</th>
                <th className="pb-3">Tendencia</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Ventas Totales</td>
                <td className="py-3 text-text-primary">$70,000</td>
                <td className="py-3 text-green-500">+15%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Unidades Vendidas</td>
                <td className="py-3 text-text-primary">60</td>
                <td className="py-3 text-green-500">+10%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Margen Promedio</td>
                <td className="py-3 text-text-primary">35%</td>
                <td className="py-3 text-green-500">+8%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductosReportes; 