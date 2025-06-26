import React from 'react';
import { useTheme } from '../../shared/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex">
      {/* Lado izquierdo - Logo DORA */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-primary to-red-primary items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4">DORA</h1>
          <p className="text-xl text-white/80">Tu asistente inteligente de CRM</p>
        </div>
      </div>

      {/* Lado derecho - Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-xl transform hover:scale-[1.01] transition-all duration-300 ease-out">
          <div className="relative bg-card-background rounded-3xl shadow-2xl p-10 border border-border-color">
            <button
              onClick={toggleTheme}
              className="absolute top-8 right-8 p-3 rounded-full bg-background/50 hover:bg-background text-text-secondary hover:text-text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-light z-10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-text-primary mb-4">{title}</h2>
              <p className="text-text-secondary text-lg">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 