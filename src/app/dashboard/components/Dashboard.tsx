import React from 'react';
import { 
  Users, 
  Briefcase, 
  DollarSign, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Bell
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useTheme } from '../../shared/contexts/ThemeContext';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Clientes Activos',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
    },
    {
      name: 'Oportunidades',
      value: '89',
      change: '+5%',
      changeType: 'increase',
      icon: Briefcase,
    },
    {
      name: 'Ventas del Mes',
      value: '$47,500',
      change: '-3%',
      changeType: 'decrease',
      icon: DollarSign,
    },
    {
      name: 'Tasa Conversión',
      value: '24%',
      change: '+8%',
      changeType: 'increase',
      icon: BarChart3,
    },
  ];

  const salesData = [
    { name: 'Ene', ventas: 4000, oportunidades: 2400 },
    { name: 'Feb', ventas: 3000, oportunidades: 1398 },
    { name: 'Mar', ventas: 2000, oportunidades: 9800 },
    { name: 'Abr', ventas: 2780, oportunidades: 3908 },
    { name: 'May', ventas: 1890, oportunidades: 4800 },
    { name: 'Jun', ventas: 2390, oportunidades: 3800 },
  ];

  const { theme } = useTheme();

  const chartColors = {
    chartOrange: '#FF6600',
    chartOrangeAlt: '#FFAA33',
    chartYellow: '#FFCC00',
    chartTeal: '#4DB8B8',
    orangePrimary: '#FF6600',
  };

  const activityData = [
    { name: 'Llamadas', value: 400, color: chartColors.chartOrange },
    { name: 'Emails', value: 300, color: chartColors.chartOrangeAlt },
    { name: 'Reuniones', value: 200, color: chartColors.chartYellow },
    { name: 'Tareas', value: 100, color: chartColors.chartTeal },
  ];

  const recentActivities = [
    { id: 1, type: 'Llamada', description: 'Llamada con Cliente ABC Corp', time: '2 horas' },
    { id: 2, type: 'Email', description: 'Propuesta enviada a XYZ Ltd', time: '4 horas' },
    { id: 3, type: 'Reunión', description: 'Demo programada para mañana', time: '6 horas' },
    { id: 4, type: 'Tarea', description: 'Seguimiento de cotización', time: '1 día' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
          <p className="text-text-secondary mt-1">Bienvenido de vuelta, Joaquín</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-card-background hover:bg-background text-text-primary px-4 py-2 rounded-lg flex items-center space-x-2 border border-border transition-colors duration-200">
            <Calendar className="h-5 w-5" />
            <span>Calendario</span>
          </button>
          <button className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg">
            <Bell className="h-5 w-5" />
            <span>Notificaciones</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">{stat.name}</p>
                <p className="text-2xl font-semibold text-text-primary mt-2">{stat.value}</p>
              </div>
              <div className="p-3 bg-orange-primary/10 rounded-xl">
                <stat.icon className="h-6 w-6 text-orange-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.changeType === 'increase' ? (
                <TrendingUp className="h-4 w-4 text-status-green" />
              ) : (
                <TrendingDown className="h-4 w-4 text-status-red" />
              )}
              <span className={`text-sm ml-1 ${stat.changeType === 'increase' ? 'text-status-green' : 'text-status-red'}`}>
                {stat.change}
              </span>
              <span className="text-sm text-text-secondary ml-1">vs mes anterior</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Ventas vs Oportunidades</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
              <YAxis stroke="var(--color-text-secondary)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--color-card-background)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  color: 'var(--color-text-primary)'
                }} 
              />
              <Bar dataKey="ventas" fill={chartColors.orangePrimary} radius={[4, 4, 0, 0]} />
              <Bar dataKey="oportunidades" fill={chartColors.chartOrangeAlt} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Distribution */}
        <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Distribución de Actividades</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={activityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--color-card-background)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  color: 'var(--color-text-primary)'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {activityData.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-text-primary">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary">Actividades Recientes</h3>
          <button className="text-orange-primary hover:text-orange-600 text-sm font-medium transition-colors duration-200">
            Ver todas
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-4 bg-background rounded-xl hover:bg-card-background transition-colors duration-200">
              <div className="w-10 h-10 bg-orange-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-text-primary font-medium">{activity.description}</p>
                <p className="text-text-secondary text-sm">{activity.type}</p>
              </div>
              <span className="text-text-secondary text-sm">hace {activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;