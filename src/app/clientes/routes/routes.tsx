import React from 'react';
import { Route } from 'react-router-dom';
import ClientesList from '../components/ClientesList';
import ClienteForm from '../components/ClienteForm';
import ClienteDetalle from '../components/ClienteDetalle';
import ClientesReportes from '../components/ClientesReportes';

export default (
  <Route path="clientes">
    <Route index element={<ClientesList />} />
    <Route path="nuevo" element={<ClienteForm />} />
    <Route path=":id" element={<ClienteDetalle />} />
    <Route path=":id/editar" element={<ClienteForm />} />
    <Route path="reportes" element={<ClientesReportes />} />
  </Route>
);