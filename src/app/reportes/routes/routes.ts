import { BarChart3 } from "lucide-react";
import { NavigationItem } from "../../shared/interface/navigation";

export const reportesRoutes: NavigationItem = {
  name: "Centro de Reportes",
    href: "/reportes",
    icon: BarChart3,
    children: [
      { name: "Dashboard", href: "/reportes" },
      { name: "Ventas", href: "/reportes/ventas" },
      { name: "Clientes", href: "/reportes/clientes" },
      { name: "Productos", href: "/reportes/inventario" },
      { name: "Marketing", href: "/reportes/marketing" },
      { name: "Soporte", href: "/reportes/soporte" },
      { name: "Personalizados", href: "/reportes/personalizados" },
    ],
};
