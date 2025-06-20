import React from 'react';
import { Route } from 'react-router-dom';
import Comunicacion from '../components/Comunicacion';

const Mensajeria = () => <div>Pantalla de Mensajería</div>;
const Notificaciones = () => <div>Pantalla de Notificaciones</div>;
const Videollamadas = () => <div>Pantalla de Videollamadas</div>;
const Grabaciones = () => <div>Pantalla de Grabaciones</div>;

export default (
  <Route path="comunicacion">
    <Route index element={<Comunicacion />} />
    <Route path="mensajeria" element={<Mensajeria />} />
    <Route path="notificaciones" element={<Notificaciones />} />
    <Route path="videollamadas" element={<Videollamadas />} />
    <Route path="grabaciones" element={<Grabaciones />} />
  </Route>
); 