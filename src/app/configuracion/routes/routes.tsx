import React from 'react';
import { Route } from 'react-router-dom';
import Configuracion from '../components/configuracion/Configuracion';
import AjustesGenerales from '../components/ajustesgenerales/AjustesGenerales';
import Automatizaciones from '../components/automatizaciones/Automatizaciones';
import Roles from '../components/roles/Roles';
import UsuariosList from '../components/usuarios/UsuariosList';
import UsuarioForm from '../components/usuarios/UsuarioForm';
import DatabaseQuery from '../components/database/DatabaseQuery'
import Perfil from '../components/perfil/Perfil';

export default (
  <Route path="configuracion">
    <Route index element={<Configuracion />} />
    <Route path="ajustes-generales" element={<AjustesGenerales />} />
    <Route path="automatizaciones" element={<Automatizaciones />} />
    <Route path="data-base" element={<DatabaseQuery />} />
    <Route path="roles" element={<Roles />} />
    <Route path="usuarios" element={<UsuariosList />} />
    <Route path="usuarios/nuevo" element={<UsuarioForm />} />
    <Route path="usuarios/:entidadId" element={<UsuarioForm />} />
    <Route path="perfil" element={<Perfil />} />
  </Route>
);