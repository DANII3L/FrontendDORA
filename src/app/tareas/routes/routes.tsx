import React from 'react';
import { Route } from 'react-router-dom';
import TareasList from '../components/TareasList';
import TareaForm from '../components/TareaForm';
import TareaDetalle from '../components/TareaDetalle';
import TareasReportes from '../components/TareasReportes';
import Calendario from '../components/Calendario';

export default (
  <Route path="tareas">
    <Route index element={<TareasList />} />
    <Route path="nuevo" element={<TareaForm />} />
    <Route path=":id" element={<TareaDetalle />} />
    <Route path=":id/editar" element={<TareaForm />} />
    <Route path="reportes" element={<TareasReportes />} />
    <Route path="calendario" element={<Calendario />} />
  </Route>
);