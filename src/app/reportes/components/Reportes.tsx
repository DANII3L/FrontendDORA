import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { 
  BarChart3,
  TrendingUp, 
  TrendingDown, 
  Download,
  Filter,
  Calendar,
  Eye,
  Share2
} from 'lucide-react';

const Reportes: React.FC = () => {
  const reportes = [
    {
      id: 1,
      nombre: "Reporte de Ventas Mensual",
      tipo: "Ventas",
      ultimaGeneracion: "2024-01-15",
      estado: "Completado",
      icon: BarChart3,
      color: "text-green-600"
    },
    {
      id: 2,
      nombre: "Análisis de Clientes",
      tipo: "Clientes",
      ultimaGeneracion: "2024-01-14",
      estado: "Completado",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      id: 3,
      nombre: "Inventario Actual",
      tipo: "Productos",
      ultimaGeneracion: "2024-01-13",
      estado: "Pendiente",
      icon: BarChart3,
      color: "text-orange-600"
    },
    {
      id: 4,
      nombre: "Efectividad de Marketing",
      tipo: "Marketing",
      ultimaGeneracion: "2024-01-12",
      estado: "Completado",
      icon: BarChart3,
      color: "text-purple-600"
    },
    {
      id: 5,
      nombre: "Tickets de Soporte",
      tipo: "Soporte",
      ultimaGeneracion: "2024-01-11",
      estado: "Completado",
      icon: BarChart3,
      color: "text-red-600"
    }
  ];

  const metricas = [
    {
      titulo: "Reportes Generados",
      valor: "156",
      cambio: "+12%",
      tendencia: "up"
    },
    {
      titulo: "Tiempo Promedio",
      valor: "2.3 min",
      cambio: "-8%",
      tendencia: "down"
    },
    {
      titulo: "Descargas",
      valor: "1,234",
      cambio: "+25%",
      tendencia: "up"
    },
    {
      titulo: "Compartidos",
      valor: "89",
      cambio: "+15%",
      tendencia: "up"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Centro de Reportes</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Genera y gestiona todos los reportes de tu negocio
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center">
            <BarChart3 className="h-4 w-4 mr-2" />
            Nuevo Reporte
          </button>
        </div>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {metrica.titulo}
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrica.valor}
              </div>
              <div className="flex items-center text-xs mt-1">
                {metrica.tendencia === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                )}
                <span className={metrica.tendencia === "up" ? "text-green-600" : "text-red-600"}>
                  {metrica.cambio}
                </span>
                <span className="text-gray-500 ml-1">vs mes anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reportes Recientes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Reportes Recientes</span>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-1 border border-gray-300 rounded text-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                <option>Todos los tipos</option>
                <option>Ventas</option>
                <option>Clientes</option>
                <option>Productos</option>
                <option>Marketing</option>
                <option>Soporte</option>
              </select>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportes.map((reporte) => (
              <div key={reporte.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700`}>
                    <reporte.icon className={`h-5 w-5 ${reporte.color}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{reporte.nombre}</h3>
                    <p className="text-sm text-gray-500">{reporte.tipo} • Última generación: {reporte.ultimaGeneracion}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    reporte.estado === "Completado" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                  }`}>
                    {reporte.estado}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reportes Programados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Reportes Programados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">Reporte Semanal de Ventas</p>
                  <p className="text-sm text-blue-600 dark:text-blue-300">Cada lunes a las 9:00 AM</p>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                  Editar
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">Análisis Mensual de Clientes</p>
                  <p className="text-sm text-green-600 dark:text-green-300">Primer día del mes</p>
                </div>
                <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                  Editar
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
              Plantillas de Reportes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Reporte Ejecutivo</p>
                  <p className="text-sm text-gray-500">Resumen para directivos</p>
                </div>
                <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                  Usar
                </button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Reporte Detallado</p>
                  <p className="text-sm text-gray-500">Análisis completo</p>
                </div>
                <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                  Usar
                </button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Reporte Personalizado</p>
                  <p className="text-sm text-gray-500">Crear desde cero</p>
                </div>
                <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                  Crear
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reportes; 