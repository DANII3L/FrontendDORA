import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Building2,
  Activity,
} from 'lucide-react';

const ClientesReportes: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mes');

  // Datos de ejemplo para los gráficos
  const clientesPorRegion = [
    { region: 'Norte', cantidad: 45 },
    { region: 'Sur', cantidad: 30 },
    { region: 'Este', cantidad: 25 },
    { region: 'Oeste', cantidad: 35 },
    { region: 'Centro', cantidad: 40 },
  ];

  const clientesPorTipo = [
    { tipo: 'Empresas', cantidad: 65 },
    { tipo: 'Personas', cantidad: 35 },
  ];

  const crecimientoMensual = [
    { mes: 'Ene', cantidad: 10 },
    { mes: 'Feb', cantidad: 15 },
    { mes: 'Mar', cantidad: 20 },
    { mes: 'Abr', cantidad: 25 },
    { mes: 'May', cantidad: 30 },
    { mes: 'Jun', cantidad: 35 },
  ];

  const metricas = [
    {
      titulo: 'Total Clientes',
      valor: '175',
      cambio: '+12%',
      icono: Users,
      color: 'text-blue-500',
    },
    {
      titulo: 'Nuevos este mes',
      valor: '25',
      cambio: '+8%',
      icono: TrendingUp,
      color: 'text-green-500',
    },
    {
      titulo: 'Tasa de Retención',
      valor: '92%',
      cambio: '+3%',
      icono: Activity,
      color: 'text-purple-500',
    },
    {
      titulo: 'Valor Promedio',
      valor: '$2,500',
      cambio: '+15%',
      icono: Building2,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Reportes de Clientes</h1>
          <p className="text-text-secondary mt-1">Análisis y métricas de clientes</p>
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
        {/* Clientes por Región */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Clientes por Región</h3>
          <div className="space-y-4">
            {clientesPorRegion.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.region}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...clientesPorRegion.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Clientes por Tipo */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Distribución por Tipo</h3>
          <div className="space-y-4">
            {clientesPorTipo.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.tipo}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...clientesPorTipo.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Crecimiento Mensual */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border lg:col-span-2">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Crecimiento Mensual</h3>
          <div className="h-64 flex items-end space-x-4">
            {crecimientoMensual.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-r from-orange-primary to-red-primary rounded-t-lg transition-all duration-300 hover:opacity-80"
                  style={{ height: `${(item.cantidad / Math.max(...crecimientoMensual.map(c => c.cantidad))) * 100}%` }}
                />
                <span className="text-text-secondary text-sm mt-2">{item.mes}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabla de Resumen */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Resumen de Actividad</h3>
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
                <td className="py-3 text-text-primary">Nuevos Clientes</td>
                <td className="py-3 text-text-primary">25</td>
                <td className="py-3 text-green-500">+8%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Clientes Activos</td>
                <td className="py-3 text-text-primary">150</td>
                <td className="py-3 text-green-500">+5%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Tasa de Abandono</td>
                <td className="py-3 text-text-primary">3%</td>
                <td className="py-3 text-red-500">-2%</td>
                <td className="py-3">
                  <div className="flex items-center text-red-500">
                    <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
                    <span>Descendente</span>
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

export default ClientesReportes; 