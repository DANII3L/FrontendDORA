import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  ChevronRight,
} from 'lucide-react';
import { NavigationItem, NavigationChild } from '../interface/navigation';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navigation: NavigationItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, navigation }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Ordenar: primero los que NO tienen hijos, luego los que SÍ tienen hijos
  const orderedNavigation = [...navigation].sort((a, b) => {
    if (!a.children && b.children) return -1;
    if (a.children && !b.children) return 1;
    return 0;
  });

  const isParentActive = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  useEffect(() => {
    const activeParent = orderedNavigation.find(item => item.children && isParentActive(item.href));
    if (activeParent) setOpenSubmenu(activeParent.name);
  }, [location.pathname]);

  // COMPONENTES AUXILIARES
  const SidebarLink = ({ item, onClick }: { item: NavigationItem | NavigationChild, onClick?: () => void }) => (
    <Link
      to={item.href}
      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
        location.pathname === item.href
          ? 'bg-gradient-to-r from-orange-primary to-red-primary text-white shadow-sm hover:from-orange-600 hover:to-red-600'
          : 'text-text-secondary hover:text-text-primary hover:bg-background'
      }`}
      onClick={onClick}
    >
      {item.icon && <item.icon className="h-6 w-6 shrink-0" />}
      {item.name}
    </Link>
  );

  const SidebarParentButton = ({ item }: { item: NavigationItem }) => (
    <button
      type="button"
      onClick={() => toggleSubmenu(item.name)}
      className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
        isParentActive(item.href)
          ? 'bg-gradient-to-r from-orange-primary to-red-primary text-white shadow-sm hover:from-orange-600 hover:to-red-600'
          : 'text-text-secondary hover:text-text-primary hover:bg-background'
      }`}
    >
      <item.icon className="h-6 w-6 shrink-0" />
      {item.name}
      <ChevronRight className={`ml-auto h-5 w-5 transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-90' : ''}`} />
    </button>
  );

  const SidebarSubmenu = ({ item, onClick }: { item: NavigationItem, onClick?: () => void }) => (
    openSubmenu === item.name && (
      <ul className="ml-6 mt-1 space-y-1">
        {item.children!.map((subItem: NavigationChild) => (
          <li key={subItem.name}>
            <Link
              to={subItem.href}
              className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors duration-200 ${
                location.pathname === subItem.href
                  ? 'text-orange-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-background'
              }`}
              onClick={onClick}
            >
              {subItem.icon && <subItem.icon className="h-5 w-5 shrink-0" />}
              {subItem.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  );

  // RENDER DE LA LISTA DE NAVEGACIÓN (reutilizable para mobile y desktop)
  const renderNavigation = (onLinkClick?: () => void) => (
    <ul className="-mx-2 space-y-1">
      {orderedNavigation.map((item: NavigationItem) => (
        <li key={item.name}>
          {item.children ? (
            <>
              <SidebarParentButton item={item} />
              <SidebarSubmenu item={item} onClick={onLinkClick} />
            </>
          ) : (
            <SidebarLink item={item} onClick={onLinkClick} />
          )}
        </li>
      ))}
    </ul>
  );

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
              <li>{renderNavigation(() => setOpen(false))}</li>
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
              <li>{renderNavigation()}</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;