import { PieChart, Ticket, PlusCircle } from "lucide-react";
import { NavigationItem } from "../../shared/types/navigation";

export const soporteRoutes: NavigationItem = {
  name: "Centro de Soporte",
  href: "/soporte",
  icon: Ticket,
  children: [
    { name: "Tickets", href: "/soporte", icon: Ticket },
    { name: "Nuevo Ticket", href: "/soporte/nuevo", icon: PlusCircle },
    { name: "Reportes", href: "/soporte/reportes", icon: PieChart },
  ],
};
