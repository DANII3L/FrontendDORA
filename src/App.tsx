import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './app/auth/AuthContext';
import { ThemeProvider } from './app/shared/contexts/ThemeContext';
import { NotificationProvider } from './app/shared/contexts/NotificationContext';
import { CompanyProvider } from './app/shared/contexts/CompanyContext';
import Layout from './app/shared/components/Layout';
import Login from './app/auth/components/Login';
import Register from './app/auth/components/Register';
import { routeElements } from './app/shared/routes/AutoRoutes.tsx';

// Componentes de Seguridad
import ProtectedRoute from './app/shared/core/guards/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <CompanyProvider>
        <AuthProvider>
          <NotificationProvider>
            <Router>
              <Routes>
                {/* Ruta de Autenticación */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Rutas Protegidas */}
                <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                  {/* Redirección por defecto */}
                  <Route index element={<Navigate to="/dashboard" replace />} />
                  
                  {/* Rutas dinámicas */}
                  {routeElements}
                  
                </Route>
              </Routes>
            </Router>
          </NotificationProvider>
        </AuthProvider>
      </CompanyProvider>
    </ThemeProvider>
  );
}

export default App;