import React from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useCompany } from '../contexts/CompanyContext';
import { 
  Menu,
  Search,
  Bell,
  Calendar,
  Sun,
  Moon,
  User
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { company } = useCompany();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfile = () => {
    setOpen(false);
    navigate('/configuracion/perfil');
  };

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-card-background/95 backdrop-blur px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-text-secondary hover:text-text-primary lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-border lg:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1 items-center">
          <Search className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-text-secondary pl-3" />
          <input
            className="block h-full w-full border-0 bg-background py-0 pl-10 pr-0 text-text-primary placeholder:text-text-secondary focus:ring-2 focus:ring-inset focus:ring-orange-primary sm:text-sm rounded-lg"
            placeholder="Buscar..."
            type="search"
          />
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="p-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <Calendar className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="relative flex h-8 w-16 cursor-pointer items-center rounded-full transition-colors duration-300 focus:outline-none"
            onClick={toggleTheme}
          >
            {/* Track background, changes color */}
            <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></span>

            {/* Moving thumb */}
            <span className={`absolute h-7 w-7 rounded-full bg-white shadow-md transform transition-transform duration-300 z-10 flex items-center justify-center
              ${theme === 'dark' ? 'left-[34px]' : 'left-[2px]'}`}
            >
              {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-black" />
              ) : (
                <Sun className="h-5 w-5 text-black" />
              )}
            </span>

            {/* Inactive Sun Icon on track */}
            {theme === 'dark' && (
              <Sun className="absolute left-2 h-6 w-6 text-gray-400 z-0" />
            )}
            {/* Inactive Moon Icon on track */}
            {theme === 'light' && (
              <Moon className="absolute right-2 h-6 w-6 text-gray-400 z-0" />
            )}
          </button>

          <button
            type="button"
            className="p-2.5 text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <Bell className="h-6 w-6" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px bg-border" />

          {/* Company Info */}
          {company && (
            <div className="hidden lg:flex items-center gap-x-2">
              <div className="text-right">
                <p className="text-sm font-semibold text-text-primary">{company.razonSocial}</p>
                <p className="text-xs text-text-secondary">{company.identificacionFiscal}</p>
              </div>
              <div className="h-6 w-px bg-border" />
            </div>
          )}

          {/* Profile dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-2 text-sm leading-6 text-text-primary hover:bg-background rounded-lg px-3 py-2 transition-colors duration-200"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-primary to-red-primary flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-2 text-sm font-semibold leading-6 text-text-primary">
                  {user?.nombre} {user?.apellidos}
                </span>
              </span>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-border rounded-xl shadow-lg z-50 py-2">
                <button
                  className="w-full text-left px-4 py-2 text-text-primary hover:bg-gray-100 transition-colors"
                  onClick={handleProfile}
                >
                  Ver perfil
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;