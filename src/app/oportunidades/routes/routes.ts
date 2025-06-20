import { PieChart, Briefcase, Kanban } from "lucide-react";
import { NavigationItem } from "../../shared/types/navigation";

export const oportunidadesRoutes: NavigationItem = {
  name: "Gestión Comercial",
  href: "/oportunidades",
  icon: Briefcase,
  children: [
    { name: "Oportunidades", href: "/oportunidades" },
    { name: "Pipeline", href: "/oportunidades/pipeline" },
    { name: "Kanban de Ventas", href: "/oportunidades/ventaskanban", icon: Kanban },
    { name: "Cotizaciones", href: "/oportunidades/cotizaciones" },
    { name: "Propuestas", href: "/oportunidades/propuestas" },
    { name: "Pronósticos", href: "/oportunidades/pronosticos" },
    { name: "Reportes", href: "/oportunidades/reportes", icon: PieChart },
  ],
};
