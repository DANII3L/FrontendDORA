import React from 'react';
import { Route } from 'react-router-dom';
import ProductosList from '../components/inventario/ProductosList';
import ProductoForm from '../components/inventario/ProductoForm';
import ProductoDetalle from '../components/inventario/ProductoDetalle';
import ProductosReportes from '../components/reports/ProductosReportes';

export default (
  <Route path="inventario">
    <Route index element={<ProductosList />} />
    <Route path="nuevo" element={<ProductoForm />} />
    <Route path=":id" element={<ProductoDetalle />} />
    <Route path=":id/editar" element={<ProductoForm />} />
    <Route path="reportes" element={<ProductosReportes />} />
  </Route>
); 