import React from 'react';
import { LucideIcon } from 'lucide-react';
import { NavigationItem } from '../interface/navigation';
import {
  Home,
  Building2,
  User,
  Briefcase,
  ClipboardList,
  Ticket,
  ShoppingCart,
  Target,
  Cog,
  Bot,
  Circle
} from 'lucide-react';

// Importar todos los archivos de navegación
const navigationModules = import.meta.glob('../../**/routes/routes.ts', { eager: true });

// Mapeo de iconos por módulo
const ICON_MAPPING: Record<string, LucideIcon> = {
  'dashboard': Home,
  'clientes': Building2,
  'contactos': User,
  'oportunidades': Briefcase,
  'tareas': ClipboardList,
  'soporte': Ticket,
  'inventario': ShoppingCart,
  'marketing': Target,
  'configuracion': Cog,
  'dora': Bot,
};

// Función para extraer el nombre del módulo del path
const extractModuleName = (modulePath: string): string => {
  return modulePath.split('/')[2] || '';
};

// Función para obtener el icono por módulo
const getIconForModule = (moduleName: string): LucideIcon => {
  return ICON_MAPPING[moduleName] || Circle;
};

// Función para procesar un módulo de navegación
const processNavigationModule = (modulePath: string, moduleExports: any): NavigationItem | null => {
  try {
    const moduleName = extractModuleName(modulePath);
    if (!moduleName) return null;

    // Buscar el export principal del módulo
    const mainExport = Object.values(moduleExports).find((exportValue: any) => 
      exportValue && 
      typeof exportValue === 'object' && 
      exportValue.name && 
      exportValue.href && 
      exportValue.icon
    ) as NavigationItem;

    if (mainExport) {
      return {
        ...mainExport,
        icon: mainExport.icon || getIconForModule(moduleName)
      };
    }

    // Si no hay export principal, crear uno básico solo para módulos simples
    // Los módulos complejos deben mantener sus archivos routes.ts
    return {
      name: moduleName.charAt(0).toUpperCase() + moduleName.slice(1),
      href: `/${moduleName}`,
      icon: getIconForModule(moduleName),
      children: []
    };
  } catch (error) {
    console.warn(`Error procesando módulo ${modulePath}:`, error);
    return null;
  }
};

// Función para generar navegación automática
const generateAutoNavigation = (): NavigationItem[] => {
  const navigationItems: NavigationItem[] = [];

  // Procesar módulos de navegación
  Object.entries(navigationModules).forEach(([path, mod]) => {
    const navigationItem = processNavigationModule(path, mod);
    if (navigationItem) {
      navigationItems.push(navigationItem);
    }
  });

  // Ordenar por nombre
  return navigationItems.sort((a, b) => a.name.localeCompare(b.name));
};

// Exportar la navegación automática
export const autoNavigation = generateAutoNavigation();

// Función para combinar navegación automática con manual
export const createCombinedNavigation = (manualItems: NavigationItem[] = []): NavigationItem[] => {
  const autoItems = generateAutoNavigation();
  
  // Crear un mapa de módulos automáticos para evitar duplicados
  const autoModules = new Set(autoItems.map(item => item.href));
  
  // Filtrar elementos manuales que no estén en automáticos
  const uniqueManualItems = manualItems.filter(item => !autoModules.has(item.href));
  
  // Combinar y ordenar
  return [...autoItems, ...uniqueManualItems].sort((a, b) => a.name.localeCompare(b.name));
};

// Hook para usar navegación automática
export const useAutoNavigation = () => {
  return React.useMemo(() => generateAutoNavigation(), []);
}; 