import { ShoppingCart, PieChart } from 'lucide-react';
import { NavigationItem } from '../../shared/types/navigation';

export const inventarioRoutes: NavigationItem = {
  name: 'Gestión de Inventario',
  href: '/inventario',
  icon: ShoppingCart,
  children: [
    { name: 'Catálogo', href: '/inventario' },
    { name: 'Stock', href: '/inventario/stock' },
    { name: 'Categorías', href: '/inventario/categorias' },
    { name: 'Proveedores', href: '/inventario/proveedores' },
    { name: 'Pedidos', href: '/inventario/pedidos' },
    { name: 'Reportes', href: '/inventario/reportes', icon: PieChart },
  ]
}; 