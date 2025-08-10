import { LineChart } from "lucide-react";
import { NavigationItem } from "../../shared/interface/navigation";

export const analyticsRoutes: NavigationItem = {
  name: "Analytics",
    href: "/analytics",
    icon: LineChart,
    children: [
      { name: "Dashboard Principal", href: "/analytics" },
    ],
};
