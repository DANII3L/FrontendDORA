import { Bell, MessageCircle, Video } from "lucide-react";
import { NavigationItem } from "../../shared/interface/navigation";

export const comunicacionRoutes: NavigationItem = {
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
};
