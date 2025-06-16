import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Briefcase, 
  Calendar,
  Ticket,
  Package,
  BarChart3,
  Settings,
  X,
  UserCheck,
  Kanban
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Clientes', href: '/clientes', icon: Users },
  { name: 'Contactos', href: '/contactos', icon: UserCheck },
  { name: 'Oportunidades', href: '/oportunidades', icon: Briefcase },
  { name: 'Kanban Ventas', href: '/ventas/kanban', icon: Kanban },
  { name: 'Tareas', href: '/tareas', icon: Calendar },
  { name: 'Calendario', href: '/calendario', icon: Calendar },
  { name: 'Tickets', href: '/tickets', icon: Ticket },
  { name: 'Productos', href: '/productos', icon: Package },
  { name: 'Reportes', href: '/reportes', icon: BarChart3 },
  { name: 'Configuración', href: '/configuracion', icon: Settings },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-background/75 dark:bg-background/90" onClick={() => setOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-card-background">
          <div className="flex h-16 shrink-0 items-center justify-between px-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-primary to-red-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-text-primary text-xl font-bold">D.O.R.A</span>
            </div>
            <button
              type="button"
              className="text-text-secondary hover:text-text-primary"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col px-6 pb-4">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
                          location.pathname === item.href
                            ? 'bg-gradient-to-r from-orange-primary to-red-primary text-white shadow-sm hover:from-orange-600 hover:to-red-600'
                            : 'text-text-secondary hover:text-text-primary hover:bg-background'
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card-background px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-primary to-red-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-text-primary text-2xl font-bold">D.O.R.A</span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-200 ${
                          location.pathname === item.href
                            ? 'bg-gradient-to-r from-orange-primary to-red-primary text-white shadow-sm hover:from-orange-600 hover:to-red-600'
                            : 'text-text-secondary hover:text-text-primary hover:bg-background'
                        }`}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;