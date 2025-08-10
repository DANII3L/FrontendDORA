import React, { createContext, useContext, useState, useEffect } from 'react';
import * as segService from './service/segServices';
import { useCompany } from '../shared/contexts/CompanyContext';

interface User {
  entidadId: number;
  correo: string;
  nombre: string;
  apellidos: string;
  rol: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, empresaId: string) => Promise<boolean>;
  logout: () => void;
  register: (data: any) => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { setCompanyInfo, clearCompanyInfo } = useCompany();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, empresaId: string) => {
    const response = await segService.login({ email, password, empresaId });
    if (response.success) {
      if (response.data?.token && response.data?.user) {
        const { razonSocial, identificacionFiscal, empresaId: companyId, ...userData } = response.data.user;
        const companyData = { id: companyId, razonSocial, identificacionFiscal };

        setUser(userData);
        setCompanyInfo(companyData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('company', JSON.stringify(companyData));
        return true;
      } else {
        throw new Error('Respuesta de API inválida tras un inicio de sesión exitoso.');
      }
    } else {
      throw new Error(response.message || 'Ocurrió un error desconocido.');
    }
  };

  const register = async (data: any) => {
    console.log(data);

    const response = await segService.register(data);
    if (!response.success) {
      throw new Error(response.message || 'Error al registrar usuario.');
    }
  };

  const logout = () => {
    setUser(null);
    clearCompanyInfo();
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
      isAuthenticated: !!user,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};