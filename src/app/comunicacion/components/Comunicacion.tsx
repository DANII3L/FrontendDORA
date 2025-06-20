import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { 
  MessageCircle,
  Send,
  Mail,
  Phone,
  MessageSquare,
  Plus,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  Filter,
  Search,
  Bell,
  Settings
} from 'lucide-react';

const Comunicacion: React.FC = () => {
  const mensajes = [
    {
      id: 1,
      titulo: "Recordatorio de Pago",
      tipo: "Email",
      destinatarios: 156,
      estado: "Enviado",
      fecha: "2024-01-15",
      icon: Mail,
      color: "text-blue-600"
    },
    {
      id: 2,
      nombre: "Promoción de Verano",
      tipo: "SMS",
      destinatarios: 89,
      estado: "Programado",
      fecha: "2024-01-16",
      icon: MessageSquare,
      color: "text-green-600"
    },
    {
      id: 3,
      nombre: "Nuevo Producto",
      tipo: "Email",
      destinatarios: 234,
      estado: "Borrador",
      fecha: "2024-01-14",
      icon: Mail,
      color: "text-orange-600"
    },
    {
      id: 4,
      nombre: "Llamada de Seguimiento",
      tipo: "Llamada",
      destinatarios: 45,
      estado: "Completado",
      fecha: "2024-01-13",
      icon: Phone,
      color: "text-purple-600"
    },
    {
      id: 5,
      nombre: "Encuesta de Satisfacción",
      tipo: "Email",
      destinatarios: 178,
      estado: "Enviado",
      fecha: "2024-01-12",
      icon: Mail,
      color: "text-blue-600"
    }
  ];

  const plantillas = [
    {
      id: 1,
      nombre: "Bienvenida Cliente",
      categoria: "Onboarding",
      descripcion: "Email de bienvenida para nuevos clientes",
      icon: Mail
    },
    {
      id: 2,
      nombre: "Recordatorio Pago",
      categoria: "Facturación",
      descripcion: "Recordatorio de pago pendiente",
      icon: Mail
    },
    {
      id: 3,
      nombre: "Promoción Especial",
      categoria: "Marketing",
      descripcion: "Plantilla para promociones",
      icon: MessageSquare
    }
  ];

  const metricas = [
    {
      titulo: "Mensajes Enviados",
      valor: "1,234",
      cambio: "+18%",
      tendencia: "up"
    },
    {
      titulo: "Tasa de Apertura",
      valor: "68%",
      cambio: "+5%",
      tendencia: "up"
    },
    {
      titulo: "Tasa de Respuesta",
      valor: "12%",
      cambio: "+3%",
      tendencia: "up"
    },
    {
      titulo: "Campañas Activas",
      valor: "8",
      cambio: "+2",
      tendencia: "up"
    }
  ];

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'Enviado':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Programado':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'Borrador':
        return <Edit className="h-4 w-4 text-orange-600" />;
      case 'Completado':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-red-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Centro de Comunicación</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Gestiona todas tus comunicaciones con clientes y equipos
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center">
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Comunicación
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
              <MessageCircle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrica.valor}
              </div>
              <div className="flex items-center text-xs mt-1">
                <span className="text-green-600">
                  {metrica.cambio}
                </span>
                <span className="text-gray-500 ml-1">vs mes anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comunicaciones Recientes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Comunicaciones Recientes</span>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-1 border border-gray-300 rounded text-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                <option>Todos los tipos</option>
                <option>Email</option>
                <option>SMS</option>
                <option>Llamada</option>
                <option>Notificación</option>
              </select>
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mensajes.map((mensaje) => (
              <div key={mensaje.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700`}>
                    <mensaje.icon className={`h-5 w-5 ${mensaje.color}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{mensaje.nombre || mensaje.titulo}</h3>
                    <p className="text-sm text-gray-500">{mensaje.tipo} • {mensaje.destinatarios} destinatarios • {mensaje.fecha}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${
                    mensaje.estado === "Enviado" || mensaje.estado === "Completado"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : mensaje.estado === "Programado"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                  }`}>
                    {getEstadoIcon(mensaje.estado)}
                    <span className="ml-1">{mensaje.estado}</span>
                  </span>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Plantillas y Campañas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
              Plantillas de Comunicación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {plantillas.map((plantilla) => (
                <div key={plantilla.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <plantilla.icon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{plantilla.nombre}</p>
                      <p className="text-sm text-gray-500">{plantilla.categoria} • {plantilla.descripcion}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    Usar
                  </button>
                </div>
              ))}
              <button className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center">
                <Plus className="h-4 w-4 mr-2" />
                Crear Nueva Plantilla
              </button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-green-600" />
              Campañas Activas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-100">Campaña de Verano</p>
                    <p className="text-sm text-green-600 dark:text-green-300">Enviando a 1,234 contactos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-900 dark:text-green-100">75%</p>
                  <p className="text-xs text-green-600 dark:text-green-300">Completado</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-100">Recordatorios SMS</p>
                    <p className="text-sm text-blue-600 dark:text-blue-300">Programado para mañana</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Pendiente</p>
                  <p className="text-xs text-blue-600 dark:text-blue-300">9:00 AM</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-purple-900 dark:text-purple-100">Llamadas de Seguimiento</p>
                    <p className="text-sm text-purple-600 dark:text-purple-300">45 llamadas completadas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-purple-900 dark:text-purple-100">60%</p>
                  <p className="text-xs text-purple-600 dark:text-purple-300">Completado</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Herramientas de Comunicación */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2 text-gray-600" />
            Herramientas de Comunicación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email Marketing</p>
                  <p className="text-sm text-gray-500">Campañas por email</p>
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">SMS Marketing</p>
                  <p className="text-sm text-gray-500">Mensajes de texto</p>
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Llamadas</p>
                  <p className="text-sm text-gray-500">Gestión de llamadas</p>
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <Bell className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Notificaciones</p>
                  <p className="text-sm text-gray-500">Alertas y recordatorios</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Comunicacion; 