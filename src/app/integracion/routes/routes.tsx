import React from 'react';
import { Route } from 'react-router-dom';

const Integracion = () => <div>Pantalla de Integración</div>;
const Api = () => <div>Pantalla de API</div>;
const Webhooks = () => <div>Pantalla de Webhooks</div>;
const RedesSociales = () => <div>Pantalla de Redes Sociales</div>;
const Herramientas = () => <div>Pantalla de Herramientas</div>;

export default (
  <Route path="integracion">
    <Route index element={<Integracion />} />
    <Route path="api" element={<Api />} />
    <Route path="webhooks" element={<Webhooks />} />
    <Route path="redes-sociales" element={<RedesSociales />} />
    <Route path="herramientas" element={<Herramientas />} />
  </Route>
); 