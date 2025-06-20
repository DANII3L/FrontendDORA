import React from 'react';
import { Route } from 'react-router-dom';

const AnalyticsAvanzado = () => <div>Pantalla de Analytics Avanzado</div>;
const Predictivo = () => <div>Pantalla de Analytics Predictivo</div>;
const ML = () => <div>Pantalla de Machine Learning</div>;
const Segmentacion = () => <div>Pantalla de Segmentación</div>;
const Recomendaciones = () => <div>Pantalla de Recomendaciones</div>;

export default (
  <Route path="analytics-avanzado">
    <Route index element={<AnalyticsAvanzado />} />
    <Route path="predictivo" element={<Predictivo />} />
    <Route path="ml" element={<ML />} />
    <Route path="segmentacion" element={<Segmentacion />} />
    <Route path="recomendaciones" element={<Recomendaciones />} />
  </Route>
); 