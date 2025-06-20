import React, { useState } from 'react';
import { User, Bell, Shield, Database, Mail, Zap } from 'lucide-react';
import Automatizaciones from './components/automatizaciones/Automatizaciones';

const Configuracion: React.FC = () => {
  const [vista, setVista] = useState<'menu' | 'automatizaciones'>('menu');

  const configuraciones = [
    {
      titulo: 'Perfil de Usuario',
      descripcion: 'Gestiona tu información personal y preferencias',
      icono: User,
      color: 'text-blue-500',
      onClick: null,
    },
    {
      titulo: 'Notificaciones',
      descripcion: 'Configura las alertas y notificaciones del sistema',
      icono: Bell,
      color: 'text-orange-500',
      onClick: null,
    },
    {
      titulo: 'Seguridad',
      descripcion: 'Administra contraseñas y permisos de acceso',
      icono: Shield,
      color: 'text-red-500',
      onClick: null,
    },
    {
      titulo: 'Base de Datos',
      descripcion: 'Configura la conexión y respaldos de datos',
      icono: Database,
      color: 'text-green-500',
      onClick: null,
    },
    {
      titulo: 'Correo Electrónico',
      descripcion: 'Configura el servidor de correo y plantillas',
      icono: Mail,
      color: 'text-purple-500',
      onClick: null,
    },
    {
      titulo: 'Automatizaciones',
      descripcion: 'Crea reglas automáticas para tu CRM',
      icono: Zap,
      color: 'text-yellow-500',
      onClick: () => setVista('automatizaciones'),
    },
  ];

  if (vista === 'automatizaciones') {
    return (
      <div>
        <button onClick={() => setVista('menu')} className="mb-4 text-blue-600 hover:underline">← Volver</button>
        <Automatizaciones />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Configuración</h1>
          <p className="text-text-secondary mt-1">Gestiona la configuración del sistema</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {configuraciones.map((config, index) => (
          <div
            key={index}
            className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 cursor-pointer"
            onClick={config.onClick || undefined}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl ${config.color} bg-opacity-10`}>
                <config.icono className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{config.titulo}</h3>
                <p className="text-text-secondary text-sm mt-1">{config.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Configuracion; 