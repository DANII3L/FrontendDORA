import { PieChart, ClipboardList, Calendar } from "lucide-react";
import { NavigationItem } from "../../shared/interface/navigation";

export const tareasRoutes: NavigationItem = {
  name: "Gestión de Tareas",
    href: "/tareas",
    icon: ClipboardList,
    children: [
      { name: "Lista de Tareas", href: "/tareas" },
      { name: "Calendario", href: "/tareas/calendario", icon: Calendar },
      { name: "Kanban", href: "/tareas/kanban" },
      { name: "Proyectos", href: "/tareas/proyectos" },
      { name: "Recordatorios", href: "/tareas/recordatorios" },
      { name: "Reportes", href: "/tareas/reportes", icon: PieChart },
    ],
};
