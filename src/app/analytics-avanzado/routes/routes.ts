import { Brain } from "lucide-react";
import { NavigationItem } from "../../shared/interface/navigation";

export const analyticsAvanzadoRoutes: NavigationItem = {
    name: "Analytics Avanzado",
    href: "/analytics-avanzado",
    icon: Brain,
    children: [
      { name: "Predictivo", href: "/analytics-avanzado/predictivo" },
      { name: "Machine Learning", href: "/analytics-avanzado/ml" },
      { name: "Segmentación", href: "/analytics-avanzado/segmentacion" },
      { name: "Recomendaciones", href: "/analytics-avanzado/recomendaciones" },
    ],
};
