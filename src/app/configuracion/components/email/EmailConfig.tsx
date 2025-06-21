import React, { useState } from 'react';
import { Card } from '../../../shared/components/ui/Card';
import DynamicForm from '../../../shared/components/ui/DynamicForm';
import { IFieldConfig } from '../../../shared/interface/IFieldConfig';

const EmailConfig: React.FC = () => {
  const [smtp, setSmtp] = useState({
    server: '',
    port: '',
    user: '',
    password: ''
  });

  const [templates, setTemplates] = useState([
    { id: 1, name: 'Bienvenida a nuevos clientes', subject: '¡Bienvenido a bordo!' },
    { id: 2, name: 'Recordatorio de seguimiento', subject: 'Solo un recordatorio rápido' },
    { id: 3, name: 'Factura adjunta', subject: 'Tu factura de [Mes]' }
  ]);

  const smtpFields: IFieldConfig[] = [
    { name: 'server', label: 'Servidor SMTP', type: 'text', placeholder: 'smtp.example.com' },
    { name: 'port', label: 'Puerto', type: 'text', placeholder: '587' },
    { name: 'user', label: 'Usuario', type: 'text', placeholder: 'user@example.com' },
    { name: 'password', label: 'Contraseña', type: 'password', placeholder: '••••••••' }
  ];

  const handleSaveSmtp = (values: Record<string, any>) => {
    // Aquí guardas la configuración, actualizando el estado si es necesario
    setSmtp(values as typeof smtp);
    console.log('Guardando configuración SMTP:', values);
    alert('Configuración SMTP guardada (simulación).');
  };

  return (
    <div className="space-y-6">
      {/* SMTP Configuration */}
      <Card>
        <div className="px-6 pt-6">
            <h2 className="text-xl font-semibold text-text-primary">Configuración del Servidor de Correo (SMTP)</h2>
        </div>
        <DynamicForm
          fields={smtpFields}
          initialValues={smtp}
          onSubmit={handleSaveSmtp}
          submitText="Guardar Configuración"
          className="p-6"
          renderSubmitButton={({ submitText }) => (
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                {submitText}
              </button>
            </div>
          )}
        />
      </Card>

      {/* Email Templates */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-text-primary">Plantillas de Correo</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Nueva Plantilla
          </button>
        </div>
        <ul className="space-y-2">
          {templates.map(template => (
            <li key={template.id} className="flex justify-between items-center bg-background p-3 rounded-lg border border-border">
              <div>
                <p className="font-semibold text-text-primary">{template.name}</p>
                <p className="text-sm text-text-secondary">{template.subject}</p>
              </div>
              <div>
                <button className="text-blue-500 hover:underline mr-4">Editar</button>
                <button className="text-red-500 hover:underline">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default EmailConfig; 