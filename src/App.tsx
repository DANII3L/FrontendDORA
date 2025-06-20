import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './app/auth/AuthContext';
import { ThemeProvider } from './app/shared/contexts/ThemeContext';
import Layout from './app/shared/components/Layout';
import Login from './app/auth/components/Login';
import { routeElements } from './app/shared/routes/AutoRoutes.tsx';

// Componentes de Seguridad
import ProtectedRoute from './app/shared/core/guards/ProtectedRoute';

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
              
              {/* Rutas dinámicas */}
              {routeElements}
              
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;