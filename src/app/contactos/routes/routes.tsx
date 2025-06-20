import React from 'react';
import { Route } from 'react-router-dom';
import ContactosList from '../components/contactos/ContactosList';
import ContactoForm from '../components/contactos/ContactoForm';
import ContactosReportes from '../components/reports/ContactosReportes';

export default (
  <Route path="contactos">
    <Route index element={<ContactosList />} />
    <Route path="nuevo" element={<ContactoForm />} />
    <Route path=":id" element={<ContactoForm />} />
    <Route path="reportes" element={<ContactosReportes />} />
  </Route>
);