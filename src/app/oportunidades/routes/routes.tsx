import React from 'react';
import { Route } from 'react-router-dom';
import OportunidadesList from '../components/OportunidadesList';
import OportunidadForm from '../components/OportunidadForm';
import OportunidadDetalle from '../components/OportunidadDetalle';
import KanbanVentas from '../components/KanbanVentas';
import OportunidadesReportes from '../components/OportunidadesReportes';

export default (
  <Route path="oportunidades">
    <Route index element={<OportunidadesList />} />
    <Route path="nuevo" element={<OportunidadForm />} />
    <Route path=":id" element={<OportunidadDetalle />} />
    <Route path=":id/editar" element={<OportunidadForm />} />
    <Route path="reportes" element={<OportunidadesReportes />} />
    <Route path="ventaskanban" element={<KanbanVentas />} />
  </Route>
);