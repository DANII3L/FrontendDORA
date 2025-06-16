import React, { useState } from 'react';
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
  Kanban,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { 
    name: 'Clientes', 
    href: '/clientes', 
    icon: Users,
    children: [
      { name: 'Lista de Clientes', href: '/clientes' },
      { name: 'Nuevo Cliente', href: '/clientes/nuevo' },
      { name: 'Reportes', href: '/clientes/reportes', icon: BarChart3 },
    ]
  },
  { 
    name: 'Contactos', 
    href: '/contactos', 
    icon: UserCheck,
    children: [
      { name: 'Lista de Contactos', href: '/contactos' },
      { name: 'Nuevo Contacto', href: '/contactos/nuevo' },
      { name: 'Reportes', href: '/contactos/reportes', icon: BarChart3 },
    ]
  },
  { 
    name: 'Oportunidades', 
    href: '/oportunidades', 
    icon: Briefcase,
    children: [
      { name: 'Lista de Oportunidades', href: '/oportunidades' },
      { name: 'Nueva Oportunidad', href: '/oportunidades/nuevo' },
      { name: 'Reportes', href: '/oportunidades/reportes', icon: BarChart3 },
    ]
  },
  { name: 'Kanban Ventas', href: '/ventas/kanban', icon: Kanban },
  { 
    name: 'Tareas', 
    href: '/tareas', 
    icon: Calendar,
    children: [
      { name: 'Lista de Tareas', href: '/tareas' },
      { name: 'Nueva Tarea', href: '/tareas/nuevo' },
      { name: 'Reportes', href: '/tareas/reportes', icon: BarChart3 },
    ]
  },
  { name: 'Calendario', href: '/calendario', icon: Calendar },
  { 
    name: 'Tickets', 
    href: '/tickets', 
    icon: Ticket,
    children: [
      { name: 'Lista de Tickets', href: '/tickets' },
      { name: 'Nuevo Ticket', href: '/tickets/nuevo' },
      { name: 'Reportes', href: '/tickets/reportes', icon: BarChart3 },
    ]
  },
  { 
    name: 'Productos', 
    href: '/productos', 
    icon: Package,
    children: [
      { name: 'Lista de Productos', href: '/productos' },
      { name: 'Nuevo Producto', href: '/productos/nuevo' },
      { name: 'Reportes', href: '/productos/reportes', icon: BarChart3 },
    ]
  },
  { name: 'Configuración', href: '/configuracion', icon: Settings },
  { name: 'Hablar con DORA', href: '/dora-chat', icon: MessageSquare },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

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
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.name)}
                            className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
                              location.pathname.startsWith(item.href)
                                ? 'bg-gradient-to-r from-orange-primary to-red-primary text-white shadow-sm hover:from-orange-600 hover:to-red-600'
                                : 'text-text-secondary hover:text-text-primary hover:bg-background'
                            }`}
                          >
                            <item.icon className="h-6 w-6 shrink-0" />
                            {item.name}
                            <ChevronRight
                              className={`ml-auto h-5 w-5 transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-90' : ''}`}
                            />
                          </button>
                          {
                            openSubmenu === item.name && (
                              <ul className="ml-6 mt-1 space-y-1">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      to={subItem.href}
                                      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
                                        location.pathname === subItem.href
                                          ? 'text-orange-primary'
                                          : 'text-text-secondary hover:text-text-primary hover:bg-background'
                                      }`}
                                      onClick={() => setOpen(false)}
                                    >
                                      {subItem.icon && <subItem.icon className="h-5 w-5 shrink-0" />}
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )
                          }
                        </>
                      ) : (
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
                      )}
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
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="text-text-primary text-2xl font-bold">D.O.R.A</span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.name)}
                            className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-200 ${
                              location.pathname.startsWith(item.href)
                                ? 'bg-gradient-to-r from-orange-primary to-red-primary text-white shadow-sm hover:from-orange-600 hover:to-red-600'
                                : 'text-text-secondary hover:text-text-primary hover:bg-background'
                            }`}
                          >
                            <item.icon className="h-6 w-6 shrink-0" />
                            {item.name}
                            <ChevronRight
                              className={`ml-auto h-5 w-5 transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-90' : ''}`}
                            />
                          </button>
                          {
                            openSubmenu === item.name && (
                              <ul className="ml-6 mt-1 space-y-1">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      to={subItem.href}
                                      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
                                        location.pathname === subItem.href
                                          ? 'text-orange-primary'
                                          : 'text-text-secondary hover:text-text-primary hover:bg-background'
                                      }`}
                                    >
                                      {subItem.icon && <subItem.icon className="h-5 w-5 shrink-0" />}
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )
                          }
                        </>
                      ) : (
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
                      )}
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