import { Link2 } from "lucide-react";
import { NavigationItem } from "../../shared/interface/navigation";

export const integracionRoutes: NavigationItem = {
  name: "Integración",
  href: "/integracion",
  icon: Link2,
  children: [
    { name: "API", href: "/integracion/api" },
    { name: "Webhooks", href: "/integracion/webhooks" },
    { name: "Redes Sociales", href: "/integracion/redes-sociales" },
    { name: "Herramientas", href: "/integracion/herramientas" },
  ],
};
