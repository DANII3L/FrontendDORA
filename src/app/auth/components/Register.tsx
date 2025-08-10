import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from '../../shared/components/ui/DynamicForm';
import { IFieldConfig } from '../../shared/interface/IFieldConfig';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import { useNotification } from '../../shared/contexts/NotificationContext';

const Register: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();
    const { addNotification } = useNotification();

    const fields: IFieldConfig[] = [
        { name: 'empresaId', label: 'Identificación Fiscal de la Empresa', type: 'text', required: true, placeholder: 'Digite la identificación Fiscal de la Empresa', maxLength: 50, colSpan: 2 },
        { name: 'Nombre', label: 'Nombre', type: 'text', required: true, colSpan: 1, maxLength: 20  },
        { name: 'Apellidos', label: 'Apellidos', type: 'text', required: true, colSpan: 1 },
        { name: 'Identificacion', label: 'Identificación', type: 'number', required: true, colSpan: 2, maxLength: 20 },
        { name: 'Correo', label: 'Correo Electrónico', type: 'email', required: true, colSpan: 2 },
        { name: 'Telefono', label: 'Teléfono', type: 'number', required: true, colSpan: 1 },
        { name: 'Password', label: 'Contraseña', type: 'password', required: true, colSpan: 1, minLength: 6, maxLength: 30 },
    ];

    const initialValues = {
        empresaId: '',
        Nombre: '',
        Apellidos: '',
        Identificacion: '',
        Correo: '',
        Telefono: '',
        Password: '',
        Rol: 2
    };

    const handleSubmit = async (values: Record<string, any>) => {
        if (!values.empresaId) {
            addNotification('El ID de la empresa es obligatorio.', 'error');
            return;
        }
        setIsLoading(true);
        try {
            await register(values);
            addNotification('¡Registro exitoso! Ahora puedes iniciar sesión.', 'success');
            navigate('/login');
        } catch (err) {
            addNotification('Error en el registro. Verifique sus datos e intente de nuevo.', 'error');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Crear una cuenta"
            subtitle="Únete a DORA para gestionar tu CRM"
        >
            <DynamicForm
                fields={fields}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                submitText={isLoading ? 'Registrando...' : 'Registrarse'}
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
                        <p className="text-sm text-text-secondary mt-4">
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/login" className="font-medium text-orange-primary hover:underline">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                )}
            />
        </AuthLayout>
    );
};

export default Register; 