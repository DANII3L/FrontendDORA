import { Building2, PieChart } from 'lucide-react';
import { NavigationItem } from '../../shared/types/navigation';

export const clientesRoutes: NavigationItem = {
  name: 'Gestión de Clientes',
  href: '/clientes',
  icon: Building2,
  children: [
    { name: 'Lista de Clientes', href: '/clientes/ClientesLista' },
    { name: 'Segmentación', href: '/clientes/ClientesSegmentacion' },
    { name: 'Pipeline', href: '/clientes/ClientesPipeline' },
    { name: 'Historial', href: '/clientes/ClientesHistorial' },
    { name: 'Importar/Exportar', href: '/clientes/ClientesImportar' },
    { name: 'Reportes', href: '/clientes/reportes', icon: PieChart },
  ]
}; 