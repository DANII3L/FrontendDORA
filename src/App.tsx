import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './app/auth/AuthContext';
import { ThemeProvider } from './app/shared/contexts/ThemeContext';
import Layout from './app/shared/components/Layout';
import Login from './app/auth/components/Login';

// Módulo Dashboard
import Dashboard from './app/dashboard/components/Dashboard';

// Módulo Clientes
import ClientesList from './app/clientes/components/ClientesList';
import ClienteDetalle from './app/clientes/components/ClienteDetalle';
import ClienteForm from './app/clientes/components/ClienteForm';
import ReporteClientes from './app/clientes/components/ClientesReportes';

// Módulo Contactos
import ContactosList from './app/contactos/components/ContactosList';
import ContactoForm from './app/contactos/components/ContactoForm';
import ContactosReportes from './app/contactos/components/ContactosReportes';

// Módulo Ventas y Oportunidades
import OportunidadesList from './app/oportunidades/components/OportunidadesList';
import OportunidadDetalle from './app/oportunidades/components/OportunidadDetalle';
import OportunidadForm from './app/oportunidades/components/OportunidadForm';
import KanbanVentas from './app/oportunidades/components/KanbanVentas';
import OportunidadesReportes from './app/oportunidades/components/OportunidadesReportes';

// Módulo Gestión de Tareas
import TareasList from './app/tareas/components/TareasList';
import TareaDetalle from './app/tareas/components/TareaDetalle';
import TareaForm from './app/tareas/components/TareaForm';
import Calendario from './app/tareas/components/Calendario';
import TareasReportes from './app/tareas/components/TareasReportes';

// Módulo Soporte y Tickets
import TicketsList from './app/soporte/components/TicketsList';
import TicketDetalle from './app/soporte/components/TicketDetalle';
import TicketForm from './app/soporte/components/TicketForm';
import TicketsReportes from './app/tickets/components/TicketsReportes';

// Módulo Productos y Marketing
import ProductosList from './app/productos/components/ProductosList';
import ProductoForm from './app/productos/components/ProductoForm';
import ProductoDetalle from './app/productos/components/ProductoDetalle';
import ProductosReportes from './app/productos/components/ProductosReportes';
import MarketingIdeas from './app/marketing/components/MarketingIdeas';
import MarketingIdeaForm from './app/marketing/components/MarketingIdeaForm';


// Módulo Configuración
import UsuariosList from './app/configuracion/components/UsuariosList';
import UsuarioForm from './app/configuracion/components/UsuarioForm';
import Roles from './app/configuracion/components/Roles';
import AjustesGenerales from './app/configuracion/components/AjustesGenerales';

// Módulo DORA AI
import DoraChat from './app/dora/components/DoraChat';

// Componentes de Seguridad
import ProtectedRoute from './app/core/guards/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Ruta de Autenticación */}
            <Route path="/login" element={<Login />} />
            
            {/* Rutas Protegidas */}
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              {/* Redirección por defecto */}
              <Route index element={<Navigate to="/dashboard" replace />} />
              
              {/* Módulo Dashboard */}
              <Route path="dashboard" element={<Dashboard />} />
              
              {/* Módulo Clientes */}
              <Route path="clientes">
                <Route index element={<ClientesList />} />
                <Route path="nuevo" element={<ClienteForm />} />
                <Route path=":id" element={<ClienteDetalle />} />
                <Route path=":id/editar" element={<ClienteForm />} />
                <Route path="reportes" element={<ReporteClientes />} />
              </Route>
              
              {/* Módulo Contactos */}
              <Route path="contactos">
                <Route index element={<ContactosList />} />
                <Route path="nuevo" element={<ContactoForm />} />
                <Route path=":id/editar" element={<ContactoForm />} />
                <Route path="reportes" element={<ContactosReportes />} />
              </Route>
              
              {/* Módulo Ventas y Oportunidades */}
              <Route path="oportunidades">
                <Route index element={<OportunidadesList />} />
                <Route path="nuevo" element={<OportunidadForm />} />
                <Route path=":id" element={<OportunidadDetalle />} />
                <Route path=":id/editar" element={<OportunidadForm />} />
                <Route path="reportes" element={<OportunidadesReportes />} />
              </Route>
              <Route path="ventas/kanban" element={<KanbanVentas />} />
              
              {/* Módulo Gestión de Tareas */}
              <Route path="tareas">
                <Route index element={<TareasList />} />
                <Route path="nuevo" element={<TareaForm />} />
                <Route path=":id" element={<TareaDetalle />} />
                <Route path=":id/editar" element={<TareaForm />} />
                <Route path="reportes" element={<TareasReportes />} />
              </Route>
              <Route path="calendario" element={<Calendario />} />
              
              {/* Módulo Soporte y Tickets */}
              <Route path="tickets">
                <Route index element={<TicketsList />} />
                <Route path="nuevo" element={<TicketForm />} />
                <Route path=":id" element={<TicketDetalle />} />
                <Route path=":id/editar" element={<TicketForm />} />
                <Route path="reportes" element={<TicketsReportes />} />
              </Route>
              
              {/* Módulo Productos */}
              <Route path="productos">
                <Route index element={<ProductosList />} />
                <Route path="nuevo" element={<ProductoForm />} />
                <Route path=":id" element={<ProductoDetalle />} />
                <Route path=":id/editar" element={<ProductoForm />} />
                <Route path="reportes" element={<ProductosReportes />} />
              </Route>

              {/* Módulo Marketing */}
              <Route path="marketing">
                <Route index element={<MarketingIdeas />} />
                <Route path="ideas-marketing" element={<MarketingIdeas />} />
                <Route path="nueva" element={<MarketingIdeaForm />} />
                <Route path=":id/editar" element={<MarketingIdeaForm />} />
                {/*<Route path="reportes" element={< MarketingReportes />} />*/}  
              </Route>
              
              {/* Módulo Configuración */}
              <Route path="configuracion">
                <Route index element={<AjustesGenerales />} />
                <Route path="usuarios">
                  <Route index element={<UsuariosList />} />
                  <Route path="nuevo" element={<UsuarioForm />} />
                  <Route path=":id/editar" element={<UsuarioForm />} />
                </Route>
                <Route path="roles" element={<Roles />} />
              </Route>
              
              {/* Módulo DORA AI */}
              <Route path="dora-chat" element={<DoraChat />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;