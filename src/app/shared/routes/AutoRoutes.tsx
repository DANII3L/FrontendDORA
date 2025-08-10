import React from 'react';
import { Route } from 'react-router-dom';
import { IRouteProps } from '../interface/IRouteProps';
import { IModuleInfo } from '../interface/IModuleInfo';

// Función para crear una ruta con key única
const createRoute = (path: string, element: React.ReactElement, key: string): React.ReactElement => {
  return React.createElement(Route, { key, path, element });
};

// Función para procesar rutas anidadas
const processNestedRoutes = (routeElement: React.ReactElement): React.ReactElement[] => {
  const routes: React.ReactElement[] = [];
  const parentPath = routeElement.props.path;
  
  if (!parentPath) return routes;

  const children = Array.isArray(routeElement.props.children) 
    ? routeElement.props.children 
    : [routeElement.props.children];

  children.forEach((child: React.ReactElement) => {
    if (!React.isValidElement(child) || child.type !== Route) return;

    const childProps = child.props as IRouteProps;
    
    if (childProps.index && childProps.element) {
      routes.push(createRoute(parentPath, childProps.element, `${parentPath}-index`));
    } else if (childProps.path && childProps.element) {
      const fullPath = childProps.path.startsWith('/') 
        ? childProps.path 
        : `${parentPath}/${childProps.path}`;
      
      routes.push(createRoute(fullPath, childProps.element, `${parentPath}-${childProps.path}`));
    }
  });

  return routes;
};

// Función principal para aplanar rutas
const flattenRoutes = (routeElement: React.ReactElement): React.ReactElement[] => {
  if (routeElement.type !== Route) return [];

  const props = routeElement.props as IRouteProps;

  // Todas las rutas ahora son anidadas o simples
  if (props.children) {
    return processNestedRoutes(routeElement);
  }

  // Rutas simples
  return [routeElement];
};

// Importar módulos de rutas
const modules = import.meta.glob('../../**/routes/routes.tsx', { eager: true });

// Procesar y extraer todas las rutas
const routeElements = Object.entries(modules)
  .map(([path, mod]): IModuleInfo | null => {
    const element = (mod as { default: React.ReactElement }).default;
    return React.isValidElement(element) && element.type === Route 
      ? { path, element } 
      : null;
  })
  .filter((module): module is IModuleInfo => module !== null)
  .flatMap(({ element }) => flattenRoutes(element))
  .filter((route): route is React.ReactElement => 
    React.isValidElement(route) && route.type === Route && route.key !== null
  );

export { routeElements };

// Componente para renderizar rutas (mantenido por compatibilidad)
export const AutoRoutes = () => {
  return routeElements.map((route, index) =>
    React.cloneElement(route, { key: route.key || `route-${index}` })
  );
};
