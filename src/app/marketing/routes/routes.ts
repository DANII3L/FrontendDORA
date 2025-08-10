import { PieChart, Mail, Zap, Target, Lightbulb } from 'lucide-react';
import { NavigationItem } from '../../shared/interface/navigation';

export const marketingRoutes: NavigationItem = {
  name: 'Marketing',
  href: '/marketing',
  icon: Target,
  children: [
    { name: 'Ideas de Marketing', href: '/marketing', icon: Lightbulb },
    { name: 'Campañas', href: '/marketing/campanas' },
    { name: 'Email Marketing', href: '/marketing/email', icon: Mail },
    { name: 'Automatización', href: '/marketing/automatizacion', icon: Zap },
    { name: 'Landing Pages', href: '/marketing/landing-pages' },
    { name: 'Formularios', href: '/marketing/formularios' },
    { name: 'Reportes', href: '/marketing/reportes', icon: PieChart },
  ]
}; 