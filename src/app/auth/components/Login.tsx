import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useTheme } from '../../shared/contexts/ThemeContext';

export default function Login() {
  const [email, setEmail] = useState('admin@crm.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Credenciales inválidas');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado izquierdo - Logo DORA */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-primary to-red-primary items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4">DORA</h1>
          <p className="text-xl text-white/80">Tu asistente inteligente de CRM</p>
        </div>
      </div>

      {/* Lado derecho - Formulario de login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-xl transform hover:scale-[1.02] transition-all duration-300 ease-out">
          <div className="relative">
            {/* Tarjeta principal */}
            <div className="bg-card-background rounded-3xl shadow-2xl p-10 border border-border-color relative overflow-hidden">
              {/* Contenido del formulario */}
              <div className="relative">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-text-primary mb-4">Bienvenido</h2>
                  <p className="text-text-secondary text-lg">Ingresa tus credenciales para continuar</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-3 rounded-xl border border-border-color bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-light transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-6 py-3 rounded-xl border border-border-color bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-light transition-all duration-200"
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded-lg">{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-primary to-red-primary text-white py-4 px-6 rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg font-medium"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Iniciando sesión...
                      </div>
                    ) : (
                      'Iniciar sesión'
                    )}
                  </button>

                  <div className="text-center mt-6">
                    <p className="text-sm text-text-secondary">
                      Demo: admin@crm.com / admin123
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}