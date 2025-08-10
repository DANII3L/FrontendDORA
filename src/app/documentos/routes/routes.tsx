import React from 'react';
import { Route } from 'react-router-dom';
import Documentos from '../components/Documentos';

const Plantillas = () => <div>Pantalla de Plantillas</div>;
const FirmaDigital = () => <div>Pantalla de Firma Digital</div>;
const Compartir = () => <div>Pantalla de Compartir Documentos</div>;

export default (
  <Route path="documentos">
    <Route index element={<Documentos />} />
    <Route path="plantillas" element={<Plantillas />} />
    <Route path="firma" element={<FirmaDigital />} />
    <Route path="compartir" element={<Compartir />} />
  </Route>
); 