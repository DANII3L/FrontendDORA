import React from 'react';
import { Route } from 'react-router-dom';
import Reportes from '../components/Reportes';
import VentasReportes from '../components/VentasReportes';
import ClientesReportes from '../components/ClientesReportes';
import ProductosReportes from '../components/ProductosReportes';
import MarketingReportes from '../components/MarketingReportes';
import SoporteReportes from '../components/SoporteReportes';
import PersonalizadosReportes from '../components/PersonalizadosReportes';

export default (
  <Route path="reportes">
    <Route index element={<Reportes />} />
    <Route path="ventas" element={<VentasReportes />} />
    <Route path="clientes" element={<ClientesReportes />} />
    <Route path="inventario" element={<ProductosReportes />} />
    <Route path="marketing" element={<MarketingReportes />} />
    <Route path="soporte" element={<SoporteReportes />} />
    <Route path="personalizados" element={<PersonalizadosReportes />} />
  </Route>
); 