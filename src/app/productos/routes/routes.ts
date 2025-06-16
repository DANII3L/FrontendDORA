import { ShoppingCart, PieChart } from 'lucide-react';
import { NavigationItem } from '../../shared/types/navigation';

export const productosRoutes: NavigationItem = {
  name: 'Gestión de Inventario',
  href: '/productos',
  icon: ShoppingCart,
  children: [
    { name: 'Catálogo', href: '/productos' },
    { name: 'Stock', href: '/productos/stock' },
    { name: 'Categorías', href: '/productos/categorias' },
    { name: 'Proveedores', href: '/productos/proveedores' },
    { name: 'Pedidos', href: '/productos/pedidos' },
    { name: 'Reportes', href: '/productos/reportes', icon: PieChart },
  ]
}; 