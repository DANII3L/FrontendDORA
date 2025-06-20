import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './app/auth/AuthContext';
import { ThemeProvider } from './app/shared/contexts/ThemeContext';
import Layout from './app/shared/components/Layout';
import Login from './app/auth/components/Login';
import { AutoRoutes } from './app/shared/routes/AutoRoutes.tsx';

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
              
              {/* Función dinamica para busqueda de los archivos routes */}
              <AutoRoutes />
              
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;