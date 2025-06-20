import React from 'react'
import { Route } from 'react-router-dom';
import TicketsList from '../components/tickets/TicketsList';
import TicketForm from '../components/tickets/TicketForm';
import TicketDetalle from '../components/tickets/TicketDetalle';
import TicketsReportes from '../components/reports/TicketsReportes';

export default (
  <Route path="soporte">
    <Route index element={<TicketsList />} />
    <Route path="nuevo" element={<TicketForm />} />
    <Route path=":id" element={<TicketDetalle />} />
    <Route path=":id/editar" element={<TicketForm />} />
    <Route path="reportes" element={<TicketsReportes />} />
  </Route>
); 