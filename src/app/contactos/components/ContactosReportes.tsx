import React, { useState } from 'react';
import {
  BarChart3,
  UserCheck,
  TrendingUp,
  Calendar,
  MapPin,
  Building2,
  Activity,
  Mail,
  Phone,
} from 'lucide-react';

const ContactosReportes: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mes');

  // Datos de ejemplo para los gráficos
  const contactosPorCargo = [
    { cargo: 'CEO', cantidad: 15 },
    { cargo: 'Director', cantidad: 25 },
    { cargo: 'Gerente', cantidad: 40 },
    { cargo: 'Supervisor', cantidad: 30 },
    { cargo: 'Otros', cantidad: 20 },
  ];

  const contactosPorIndustria = [
    { industria: 'Tecnología', cantidad: 35 },
    { industria: 'Finanzas', cantidad: 25 },
    { industria: 'Salud', cantidad: 20 },
    { industria: 'Educación', cantidad: 15 },
    { industria: 'Otros', cantidad: 5 },
  ];

  const interaccionesMensuales = [
    { mes: 'Ene', cantidad: 45 },
    { mes: 'Feb', cantidad: 55 },
    { mes: 'Mar', cantidad: 65 },
    { mes: 'Abr', cantidad: 75 },
    { mes: 'May', cantidad: 85 },
    { mes: 'Jun', cantidad: 95 },
  ];

  const metricas = [
    {
      titulo: 'Total Contactos',
      valor: '130',
      cambio: '+15%',
      icono: UserCheck,
      color: 'text-blue-500',
    },
    {
      titulo: 'Nuevos este mes',
      valor: '20',
      cambio: '+10%',
      icono: TrendingUp,
      color: 'text-green-500',
    },
    {
      titulo: 'Tasa de Respuesta',
      valor: '85%',
      cambio: '+5%',
      icono: Activity,
      color: 'text-purple-500',
    },
    {
      titulo: 'Interacciones',
      valor: '450',
      cambio: '+25%',
      icono: Mail,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Reportes de Contactos</h1>
          <p className="text-text-secondary mt-1">Análisis y métricas de contactos</p>
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
        {/* Contactos por Cargo */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Contactos por Cargo</h3>
          <div className="space-y-4">
            {contactosPorCargo.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.cargo}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...contactosPorCargo.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contactos por Industria */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Distribución por Industria</h3>
          <div className="space-y-4">
            {contactosPorIndustria.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-text-secondary">{item.industria}</div>
                <div className="flex-1">
                  <div className="h-4 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-primary to-red-primary"
                      style={{ width: `${(item.cantidad / Math.max(...contactosPorIndustria.map(c => c.cantidad))) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-text-primary font-medium">{item.cantidad}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interacciones Mensuales */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border lg:col-span-2">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Interacciones Mensuales</h3>
          <div className="h-64 flex items-end space-x-4">
            {interaccionesMensuales.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-r from-orange-primary to-red-primary rounded-t-lg transition-all duration-300 hover:opacity-80"
                  style={{ height: `${(item.cantidad / Math.max(...interaccionesMensuales.map(c => c.cantidad))) * 100}%` }}
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
                <td className="py-3 text-text-primary">Nuevos Contactos</td>
                <td className="py-3 text-text-primary">20</td>
                <td className="py-3 text-green-500">+10%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Contactos Activos</td>
                <td className="py-3 text-text-primary">110</td>
                <td className="py-3 text-green-500">+8%</td>
                <td className="py-3">
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>Ascendente</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 text-text-primary">Tasa de Respuesta</td>
                <td className="py-3 text-text-primary">85%</td>
                <td className="py-3 text-green-500">+5%</td>
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

export default ContactosReportes; 