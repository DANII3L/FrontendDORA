import React from 'react';
import { Route } from 'react-router-dom';

// Importa todos los archivos que terminen en routes.tsx dentro de src/app
const modules = import.meta.glob('../../**/routes/routes.tsx', { eager: true });

// Función para convertir rutas anidadas a rutas planas
const flattenRoutes = (routeElement: React.ReactElement): React.ReactElement[] => {
  const routes: React.ReactElement[] = [];
  
  if (routeElement.props.children) {
    // Si tiene children, crear rutas planas
    const parentPath = routeElement.props.path;
    const children = Array.isArray(routeElement.props.children) 
      ? routeElement.props.children 
      : [routeElement.props.children];
    
    children.forEach((child: React.ReactElement) => {
      if (child.props.index) {
        // Ruta index
        routes.push(
          <Route 
            key={`${parentPath}-index`}
            path={parentPath} 
            element={child.props.element} 
          />
        );
      } else {
        // Ruta con path
        const childPath = child.props.path;
        const fullPath = childPath.startsWith('/') 
          ? childPath 
          : `${parentPath}/${childPath}`;
        
        routes.push(
          <Route 
            key={`${parentPath}-${childPath}`}
            path={fullPath} 
            element={child.props.element} 
          />
        );
      }
    });
  } else {
    // Ruta simple sin children
    routes.push(routeElement);
  }
  
  return routes;
};

// Procesar los módulos y extraer las rutas
const routeElements = Object.values(modules)
  .map((mod) => {
    const element = (mod as { default: React.ReactElement }).default;
    if (React.isValidElement(element) && element.type === Route) {
      return flattenRoutes(element);
    }
    return null;
  })
  .filter(Boolean)
  .flat();

console.log('Rutas procesadas:', routeElements);

export const AutoRoutes = () => (
  <React.Fragment>
    {routeElements}
  </React.Fragment>
);