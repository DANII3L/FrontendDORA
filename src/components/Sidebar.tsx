import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Users,
  UserPlus,
  Building2,
  Phone,
  Calendar,
  FileText,
  Settings,
  BarChart3,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  ShoppingCart,
  Tag,
  Ticket,
  CheckSquare,
  Package,
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = React.useState<{ [key: string]: boolean }>({
    clientes: true,
    contactos: true,
    oportunidades: true,
    tareas: true,
    tickets: true,
    productos: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      section: 'dashboard'
    },
    {
      title: 'Clientes',
      icon: Users,
      section: 'clientes',
      subItems: [
        { title: 'Lista de Clientes', path: '/clientes', icon: Users },
        { title: 'Nuevo Cliente', path: '/clientes/nuevo', icon: UserPlus },
        { title: 'Reportes', path: '/clientes/reportes', icon: BarChart3 },
      ]
    },
    {
      title: 'Contactos',
      icon: UserPlus,
      section: 'contactos',
      subItems: [
        { title: 'Lista de Contactos', path: '/contactos', icon: Users },
        { title: 'Nuevo Contacto', path: '/contactos/nuevo', icon: UserPlus },
        { title: 'Reportes', path: '/contactos/reportes', icon: BarChart3 },
      ]
    },
    {
      title: 'Oportunidades',
      icon: Building2,
      section: 'oportunidades',
      subItems: [
        { title: 'Lista de Oportunidades', path: '/oportunidades', icon: Building2 },
        { title: 'Nueva Oportunidad', path: '/oportunidades/nueva', icon: UserPlus },
        { title: 'Reportes', path: '/oportunidades/reportes', icon: BarChart3 },
      ]
    },
    {
      title: 'Tareas',
      icon: Calendar,
      section: 'tareas',
      subItems: [
        { title: 'Lista de Tareas', path: '/tareas', icon: Calendar },
        { title: 'Nueva Tarea', path: '/tareas/nueva', icon: UserPlus },
        { title: 'Reportes', path: '/tareas/reportes', icon: BarChart3 },
      ]
    },
    {
      title: 'Tickets',
      icon: Ticket,
      section: 'tickets',
      subItems: [
        { title: 'Lista de Tickets', path: '/tickets', icon: Ticket },
        { title: 'Nuevo Ticket', path: '/tickets/nuevo', icon: UserPlus },
        { title: 'Reportes', path: '/tickets/reportes', icon: BarChart3 },
      ]
    },
    {
      title: 'Productos',
      icon: Package,
      section: 'productos',
      subItems: [
        { title: 'Lista de Productos', path: '/productos', icon: Package },
        { title: 'Nuevo Producto', path: '/productos/nuevo', icon: UserPlus },
        { title: 'Reportes', path: '/productos/reportes', icon: BarChart3 },
      ]
    },
    {
      title: 'Configuración',
      icon: Settings,
      path: '/configuracion',
      section: 'configuracion'
    },
  ];

  return (
    <div className="w-64 bg-card-background backdrop-blur-lg border-r border-border h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-primary to-red-primary bg-clip-text text-transparent">CRM DORA</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.section}>
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleSection(item.section)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-text-primary hover:bg-background/50 transition-colors ${
                    location.pathname.startsWith(`/${item.section}`) ? 'bg-background/50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {expandedSections[item.section] ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedSections[item.section] && (
                  <div className="pl-6">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`flex items-center space-x-3 px-6 py-2 text-text-primary hover:bg-background/50 transition-colors ${
                          location.pathname === subItem.path ? 'bg-background/50' : ''
                        }`}
                      >
                        <subItem.icon className="h-5 w-5" />
                        <span className="text-sm">{subItem.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-6 py-3 text-text-primary hover:bg-background/50 transition-colors ${
                  location.pathname === item.path ? 'bg-background/50' : ''
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 