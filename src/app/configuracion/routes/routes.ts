import { Cog, Zap, Database } from 'lucide-react';
import { NavigationItem } from '../../shared/interface/navigation';

export const configuracionRoutes: NavigationItem = {
  name: 'Configuración',
  href: '/configuracion',
  icon: Cog,
  children: [
    { name: 'Ajustes Generales', href: '/configuracion' },
    { name: 'Usuarios', href: '/configuracion/usuarios' },
    { name: 'Roles', href: '/configuracion/roles' },
    { name: 'Integraciones', href: '/configuracion/integraciones' },
    { name: 'Backup', href: '/configuracion/backup', icon: Database },
    { name: 'Logs', href: '/configuracion/logs' },
    { name: 'Automatizaciones', href: '/configuracion/automatizaciones', icon: Zap },
  ]
};