import { 
  Home,  
  Briefcase, 
  Calendar,
  Ticket,
  BarChart3,
  Kanban,
  LineChart,
  BookOpen,
  MessageCircle,
  Database,
  Share2,
  FileText,
  ClipboardList,
  PieChart,
  Cog,
  Bot,
  Link2,
  Video,
  Bell,
  Brain,
} from 'lucide-react';
import { NavigationItem } from '../types/navigation';
import { marketingRoutes } from '../../marketing/routes/routes';
import { clientesRoutes } from '../../clientes/routes/routes';
import { contactosRoutes } from '../../contactos/routes/routes';
import { productosRoutes } from '../../productos/routes/routes';

export const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { 
    name: 'Analytics', 
    href: '/analytics', 
    icon: LineChart,
    children: [
      { name: 'Dashboard Principal', href: '/analytics/dashboard' },
      { name: 'Analytics Avanzado', href: '/analytics/avanzado' },
    ]
  },
  clientesRoutes,
  contactosRoutes,
  { 
    name: 'Gestión Comercial', 
    href: '/oportunidades', 
    icon: Briefcase,
    children: [
      { name: 'Oportunidades', href: '/oportunidades' },
      { name: 'Pipeline', href: '/oportunidades/pipeline' },
      { name: 'Kanban de Ventas', href: '/ventas/kanban', icon: Kanban },
      { name: 'Cotizaciones', href: '/oportunidades/cotizaciones' },
      { name: 'Propuestas', href: '/oportunidades/propuestas' },
      { name: 'Pronósticos', href: '/oportunidades/pronosticos' },
      { name: 'Reportes', href: '/oportunidades/reportes', icon: PieChart },
    ]
  },
  { 
    name: 'Gestión de Tareas', 
    href: '/tareas', 
    icon: ClipboardList,
    children: [
      { name: 'Lista de Tareas', href: '/tareas' },
      { name: 'Calendario', href: '/calendario', icon: Calendar },
      { name: 'Kanban', href: '/tareas/kanban' },
      { name: 'Proyectos', href: '/tareas/proyectos' },
      { name: 'Recordatorios', href: '/tareas/recordatorios' },
      { name: 'Reportes', href: '/tareas/reportes', icon: PieChart },
    ]
  },
  { 
    name: 'Centro de Soporte', 
    href: '/soporte', 
    icon: Ticket,
    children: [
      { name: 'Tickets', href: '/tickets' },
      { name: 'Base de Conocimientos', href: '/soporte/knowledge-base', icon: BookOpen },
      { name: 'FAQ', href: '/soporte/faq' },
      { name: 'Chat en Vivo', href: '/soporte/chat', icon: MessageCircle },
      { name: 'SLA', href: '/soporte/sla' },
      { name: 'Reportes', href: '/tickets/reportes', icon: PieChart },
    ]
  },
  productosRoutes,
  marketingRoutes,
  { 
    name: 'Centro de Reportes', 
    href: '/reportes', 
    icon: BarChart3,
    children: [
      { name: 'Dashboard', href: '/reportes' },
      { name: 'Ventas', href: '/reportes/ventas' },
      { name: 'Clientes', href: '/reportes/clientes' },
      { name: 'Productos', href: '/reportes/productos' },
      { name: 'Marketing', href: '/reportes/marketing' },
      { name: 'Soporte', href: '/reportes/soporte' },
      { name: 'Personalizados', href: '/reportes/personalizados' },
    ]
  },
  { 
    name: 'Documentos', 
    href: '/documentos', 
    icon: FileText,
    children: [
      { name: 'Gestión', href: '/documentos' },
      { name: 'Plantillas', href: '/documentos/plantillas' },
      { name: 'Firma Digital', href: '/documentos/firma' },
      { name: 'Compartir', href: '/documentos/compartir', icon: Share2 },
    ]
  },
  { 
    name: 'Comunicación', 
    href: '/comunicacion', 
    icon: MessageCircle,
    children: [
      { name: 'Mensajería', href: '/comunicacion/mensajeria' },
      { name: 'Notificaciones', href: '/comunicacion/notificaciones', icon: Bell },
      { name: 'Videollamadas', href: '/comunicacion/videollamadas', icon: Video },
      { name: 'Grabaciones', href: '/comunicacion/grabaciones' },
    ]
  },
  { 
    name: 'Integración', 
    href: '/integracion', 
    icon: Link2,
    children: [
      { name: 'API', href: '/integracion/api' },
      { name: 'Webhooks', href: '/integracion/webhooks' },
      { name: 'Redes Sociales', href: '/integracion/redes-sociales' },
      { name: 'Herramientas', href: '/integracion/herramientas' },
    ]
  },
  { 
    name: 'Analytics Avanzado', 
    href: '/analytics-avanzado', 
    icon: Brain,
    children: [
      { name: 'Predictivo', href: '/analytics-avanzado/predictivo' },
      { name: 'Machine Learning', href: '/analytics-avanzado/ml' },
      { name: 'Segmentación', href: '/analytics-avanzado/segmentacion' },
      { name: 'Recomendaciones', href: '/analytics-avanzado/recomendaciones' },
    ]
  },
  { 
    name: 'Configuración', 
    href: '/configuracion', 
    icon: Cog,
    children: [
      { name: 'Ajustes Generales', href: '/configuracion' },
      { name: 'Usuarios', href: '/configuracion/usuarios' },
      { name: 'Roles', href: '/configuracion/roles' },
      { name: 'Integraciones', href: '/configuracion/integraciones' },
      { name: 'Backup', href: '/configuracion/backup', icon: Database },
      { name: 'Logs', href: '/configuracion/logs' },
    ]
  },
  { name: 'Asistente DORA', href: '/dora-chat', icon: Bot },
]; 