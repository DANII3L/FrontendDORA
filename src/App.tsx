import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './app/auth/AuthContext';
import { ThemeProvider } from './app/shared/contexts/ThemeContext';
import Layout from './app/shared/components/Layout';
import Login from './app/auth/components/Login';
import Dashboard from './app/dashboard/components/Dashboard';
import ClientesList from './app/clientes/components/ClientesList';
import ClienteDetalle from './app/clientes/components/ClienteDetalle';
import ClienteForm from './app/clientes/components/ClienteForm';
import ContactosList from './app/clientes/components/ContactosList';
import ContactoForm from './app/clientes/components/ContactoForm';
import OportunidadesList from './app/oportunidades/components/OportunidadesList';
import OportunidadDetalle from './app/oportunidades/components/OportunidadDetalle';
import OportunidadForm from './app/oportunidades/components/OportunidadForm';
import KanbanVentas from './app/oportunidades/components/KanbanVentas';
import TareasList from './app/tareas/components/TareasList';
import TareaDetalle from './app/tareas/components/TareaDetalle';
import TareaForm from './app/tareas/components/TareaForm';
import Calendario from './app/tareas/components/Calendario';
import TicketsList from './app/soporte/components/TicketsList';
import TicketDetalle from './app/soporte/components/TicketDetalle';
import TicketForm from './app/soporte/components/TicketForm';
import ProductosList from './app/productos/components/ProductosList';
import ProductoForm from './app/productos/components/ProductoForm';
import ReportesDashboard from './app/reportes/components/ReportesDashboard';
import ReporteVentas from './app/reportes/components/ReporteVentas';
import ReporteClientes from './app/reportes/components/ReporteClientes';
import UsuariosList from './app/configuracion/components/UsuariosList';
import UsuarioForm from './app/configuracion/components/UsuarioForm';
import Roles from './app/configuracion/components/Roles';
import AjustesGenerales from './app/configuracion/components/AjustesGenerales';
import ProtectedRoute from './app/core/guards/ProtectedRoute';
import DoraChat from './app/dora/components/DoraChat';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              
              {/* Clientes */}
              <Route path="clientes" element={<ClientesList />} />
              <Route path="clientes/nuevo" element={<ClienteForm />} />
              <Route path="clientes/:id" element={<ClienteDetalle />} />
              <Route path="clientes/:id/editar" element={<ClienteForm />} />
              <Route path="contactos" element={<ContactosList />} />
              <Route path="contactos/nuevo" element={<ContactoForm />} />
              <Route path="contactos/:id/editar" element={<ContactoForm />} />
              
              {/* Oportunidades */}
              <Route path="oportunidades" element={<OportunidadesList />} />
              <Route path="oportunidades/nuevo" element={<OportunidadForm />} />
              <Route path="oportunidades/:id" element={<OportunidadDetalle />} />
              <Route path="oportunidades/:id/editar" element={<OportunidadForm />} />
              <Route path="ventas/kanban" element={<KanbanVentas />} />
              
              {/* Tareas */}
              <Route path="tareas" element={<TareasList />} />
              <Route path="tareas/nuevo" element={<TareaForm />} />
              <Route path="tareas/:id" element={<TareaDetalle />} />
              <Route path="tareas/:id/editar" element={<TareaForm />} />
              <Route path="calendario" element={<Calendario />} />
              
              {/* Soporte */}
              <Route path="tickets" element={<TicketsList />} />
              <Route path="tickets/nuevo" element={<TicketForm />} />
              <Route path="tickets/:id" element={<TicketDetalle />} />
              <Route path="tickets/:id/editar" element={<TicketForm />} />
              
              {/* Productos */}
              <Route path="productos" element={<ProductosList />} />
              <Route path="productos/nuevo" element={<ProductoForm />} />
              <Route path="productos/:id/editar" element={<ProductoForm />} />
              
              {/* Reportes */}
              <Route path="reportes" element={<ReportesDashboard />} />
              <Route path="reportes/ventas" element={<ReporteVentas />} />
              <Route path="reportes/clientes" element={<ReporteClientes />} />
              
              {/* Configuración */}
              <Route path="usuarios" element={<UsuariosList />} />
              <Route path="usuarios/nuevo" element={<UsuarioForm />} />
              <Route path="usuarios/:id/editar" element={<UsuarioForm />} />
              <Route path="roles" element={<Roles />} />
              <Route path="configuracion" element={<AjustesGenerales />} />
              
              {/* DORA AI Chat */}
              <Route path="dora-chat" element={<DoraChat />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;