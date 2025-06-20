import {
  BarChart3,
  LineChart,
  MessageCircle,
  Share2,
  FileText,
  Link2,
  Video,
  Bell,
  Brain,
} from "lucide-react";
import { NavigationItem } from "../types/navigation";
import { marketingRoutes } from "../../marketing/routes/routes";
import { clientesRoutes } from "../../clientes/routes/routes";
import { contactosRoutes } from "../../contactos/routes/routes";
import { configuracionRoutes } from "../../configuracion/routes/routes";
import { oportunidadesRoutes } from "../../oportunidades/routes/routes";
import { inventarioRoutes } from "../../inventario/routes/routes";
import { soporteRoutes } from "../../soporte/routes/routes";
import { tareasRoutes } from "../../tareas/routes/routes";
import { dashboardRoutes } from "../../dashboard/routes/routes";
import { doraRoutes } from "../../dora/routes/routes";

export const navigation: NavigationItem[] = [
  dashboardRoutes,
  {
    name: "Analytics",
    href: "/analytics",
    icon: LineChart,
    children: [
      { name: "Dashboard Principal", href: "/analytics/dashboard" },
      { name: "Analytics Avanzado", href: "/analytics/avanzado" },
    ],
  },
  clientesRoutes,
  contactosRoutes,
  oportunidadesRoutes,
  tareasRoutes,
  soporteRoutes,
  inventarioRoutes,
  marketingRoutes,
  {
    name: "Centro de Reportes",
    href: "/reportes",
    icon: BarChart3,
    children: [
      { name: "Dashboard", href: "/reportes" },
      { name: "Ventas", href: "/reportes/ventas" },
      { name: "Clientes", href: "/reportes/clientes" },
      { name: "Productos", href: "/reportes/productos" },
      { name: "Marketing", href: "/reportes/marketing" },
      { name: "Soporte", href: "/reportes/soporte" },
      { name: "Personalizados", href: "/reportes/personalizados" },
    ],
  },
  {
    name: "Documentos",
    href: "/documentos",
    icon: FileText,
    children: [
      { name: "Gestión", href: "/documentos" },
      { name: "Plantillas", href: "/documentos/plantillas" },
      { name: "Firma Digital", href: "/documentos/firma" },
      { name: "Compartir", href: "/documentos/compartir", icon: Share2 },
    ],
  },
  {
    name: "Comunicación",
    href: "/comunicacion",
    icon: MessageCircle,
    children: [
      { name: "Mensajería", href: "/comunicacion/mensajeria" },
      {
        name: "Notificaciones",
        href: "/comunicacion/notificaciones",
        icon: Bell,
      },
      {
        name: "Videollamadas",
        href: "/comunicacion/videollamadas",
        icon: Video,
      },
      { name: "Grabaciones", href: "/comunicacion/grabaciones" },
    ],
  },
  {
    name: "Integración",
    href: "/integracion",
    icon: Link2,
    children: [
      { name: "API", href: "/integracion/api" },
      { name: "Webhooks", href: "/integracion/webhooks" },
      { name: "Redes Sociales", href: "/integracion/redes-sociales" },
      { name: "Herramientas", href: "/integracion/herramientas" },
    ],
  },
  {
    name: "Analytics Avanzado",
    href: "/analytics-avanzado",
    icon: Brain,
    children: [
      { name: "Predictivo", href: "/analytics-avanzado/predictivo" },
      { name: "Machine Learning", href: "/analytics-avanzado/ml" },
      { name: "Segmentación", href: "/analytics-avanzado/segmentacion" },
      { name: "Recomendaciones", href: "/analytics-avanzado/recomendaciones" },
    ],
  },
  configuracionRoutes,
  doraRoutes,
];
