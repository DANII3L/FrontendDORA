import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Activity,
  Timer,
} from 'lucide-react';

const TicketsReportes: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mes');

  // Datos de ejemplo para los gráficos
  const ticketsPorEstado = [
    { estado: 'Abierto', cantidad: 30 },
    { estado: 'En Progreso', cantidad: 20 },
    { estado: 'Resuelto', cantidad: 45 },
    { estado: 'Cerrado', cantidad: 35 },
    { estado: 'Pendiente', cantidad: 15 },
  ];

  const ticketsPorPrioridad = [
    { prioridad: 'Crítica', cantidad: 10 },
    { prioridad: 'Alta', cantidad: 25 },
    { prioridad: 'Media', cantidad: 40 },
    { prioridad: 'Baja', cantidad: 25 },
  ];

  const ticketsMensuales = [
    { mes: 'Ene', nuevos: 45, resueltos: 35 },
    { mes: 'Feb', nuevos: 50, resueltos: 40 },
    { mes: 'Mar', nuevos: 55, resueltos: 45 },
    { mes: 'Abr', nuevos: 60, resueltos: 50 },
    { mes: 'May', nuevos: 65, resueltos: 55 },
    { mes: 'Jun', nuevos: 70, resueltos: 60 },
  ];

  const metricas = [
    {
      titulo: 'Tickets Resueltos',
      valor: '60',
      cambio: '+15%',
      icono: CheckCircle2,
      color: 'text-green-500',
    },
    {
      titulo: 'Tiempo de Respuesta',
      valor: '2.5h',
      cambio: '-10%',
      icono: Timer,
      color: 'text-blue-500',
    },
    {
      titulo: 'Satisfacción',
      valor: '92%',
      cambio: '+8%',
      icono: Activity,
      color: 'text-purple-500',
    },
    {
      titulo: 'Tickets Abiertos',
      valor: '25',
      cambio: '-5%',
      icono: AlertCircle,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Reportes de Tickets</h1>
          <p className="text-text-secondary mt-1">Análisis y métricas de soporte</p>
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
        {/* Tickets por Estado */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Tickets por Estado</h3>
          <div className="space-y-4">
            {ticketsPorEstado.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.estado}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...ticketsPorEstado.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tickets por Prioridad */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Distribución por Prioridad</h3>
          <div className="space-y-4">
            {ticketsPorPrioridad.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.prioridad}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...ticketsPorPrioridad.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tickets Mensuales */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border lg:col-span-2">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Tickets Mensuales</h3>
          <div className="h-64 flex items-end space-x-4">
            {ticketsMensuales.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div
                    className="w-full bg-gradient-to-r from-orange-primary to-red-primary rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${(item.resueltos / Math.max(...ticketsMensuales.map(c => c.resueltos))) * 100}%` }}
                  />
                  <div
                    className="w-full bg-gray-500/20 rounded-t-lg transition-all duration-300 hover:opacity-80"
                    style={{ height: `${(item.nuevos / Math.max(...ticketsMensuales.map(c => c.nuevos))) * 100}%` }}
                  />
                </div>
                <span className="text-text-secondary text-sm mt-2">{item.mes}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-primary to-red-primary rounded-full mr-2" />
              <span className="text-text-secondary text-sm">Resueltos</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-500/20 rounded-full mr-2" />
              <span className="text-text-secondary text-sm">Nuevos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de Resumen */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Resumen de Soporte</h3>
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
                <td className="py-3 text-text-primary">Tickets Resueltos</td>
                <td className="py-3 text-text-primary">60</td>
                <td className="py-3 text-green-500">+15%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Tiempo de Respuesta</td>
                <td className="py-3 text-text-primary">2.5h</td>
                <td className="py-3 text-green-500">-10%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
                    <span>Descendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Satisfacción del Cliente</td>
                <td className="py-3 text-text-primary">92%</td>
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

export default TicketsReportes; 