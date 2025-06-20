import React from 'react';
import { Route } from 'react-router-dom';

// Importa todos los archivos que terminen en routes.tsx dentro de src/app
const modules = import.meta.glob('../../**/routes/routes.tsx', { eager: true });

// Asegurarnos de que solo devolvemos elementos Route
const routeElements = Object.values(modules)
  .map((mod) => {
    const element = (mod as { default: React.ReactElement }).default;
    // Verificar que es un elemento Route válido
    return React.isValidElement(element) && element.type === Route ? element : null;
  })
  .filter(Boolean);

console.log(routeElements);

export const AutoRoutes = () => (
  <React.Fragment>
    {routeElements}
  </React.Fragment>
);