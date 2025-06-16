import { PieChart, User } from 'lucide-react';
import { NavigationItem } from '../../shared/types/navigation';

export const contactosRoutes: NavigationItem = {
  name: 'Gestión de Contactos',
  href: '/contactos',
  icon: User,
  children: [
    { name: 'Lista de Contactos', href: '/contactos' },
    { name: 'Segmentación', href: '/contactos/segmentacion' },
    { name: 'Pipeline', href: '/contactos/pipeline' },
    { name: 'Historial', href: '/contactos/historial' },
    { name: 'Importar/Exportar', href: '/contactos/importar' },
    { name: 'Reportes', href: '/contactos/reportes', icon: PieChart },
  ]
}; 