import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import AuthLayout from './AuthLayout';
import DynamicForm from '../../shared/components/ui/DynamicForm';
import { IFieldConfig } from '../../shared/interface/IFieldConfig';
import { useNotification } from '../../shared/contexts/NotificationContext';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, logout } = useAuth();
  const { addNotification } = useNotification();

  useEffect(() => {
    // Limpia cualquier sesión previa al montar la página de login
    logout();
  }, []);

  const handleSubmit = async (values: Record<string, any>) => {
    if (!values.empresaId) {
      addNotification('La identificación fiscal de la empresa es obligatorio.', 'warning');
      return;
    }
    setIsLoading(true);

    try {
      const success = await login(values.email, values.password, values.empresaId);
      if (success) {
        addNotification('¡Bienvenido de nuevo!', 'success');
        navigate('/dashboard', { replace: true });
      }
    } catch (err: any) {
      addNotification(err.message || 'Credenciales o ID de empresa inválidos.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const fields: IFieldConfig[] = [
    {
      name: 'empresaId',
      label: 'Identificación Fiscal de la Empresa',
      type: 'text',
      required: true,
      placeholder: 'Digite la identificación fiscal de la empresa',
      maxLength: 50,
      colSpan: 2,
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      required: true,
      placeholder: 'Digite el correo electrónico',
      colSpan: 2,
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      required: true,
      placeholder: 'Digite la contraseña',
      colSpan: 2,
    },
  ];

  const initialValues = {
    empresaId: '',
    email: '',
    password: '',
  };

  return (
    <AuthLayout
      title="Bienvenido"
      subtitle="Ingresa tus credenciales para continuar"
    >
      <DynamicForm
        fields={fields}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitText={isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        renderSubmitButton={({ submitText }) => (
          <div className="flex flex-col items-center gap-4 md:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-primary to-red-primary text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl font-medium"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {submitText}
                </div>
              ) : (
                submitText
              )}
            </button>
            <div className="text-center mt-2 w-full">
              <p className="text-sm text-text-secondary">
                ¿No tienes una cuenta?{' '}
                <Link to="/register" className="font-medium text-orange-primary hover:underline">
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        )}
      />
    </AuthLayout>
  );
}