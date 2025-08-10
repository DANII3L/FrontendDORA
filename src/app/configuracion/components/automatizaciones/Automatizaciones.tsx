import React, { useState, useEffect } from 'react';

const TRIGGERS = [
  { value: 'cliente_creado', label: 'Cliente creado' },
  { value: 'oportunidad_inactiva', label: 'Oportunidad inactiva' },
  { value: 'venta_cerrada', label: 'Venta cerrada' },
];

const ACCIONES = [
  { value: 'notificar_responsable', label: 'Notificar responsable' },
  { value: 'cambiar_estado', label: 'Cambiar estado' },
  { value: 'sumar_puntos', label: 'Sumar puntos al usuario' },
];

const LOCAL_KEY = 'automatizaciones_crm';

const Automatizaciones = () => {
  const [reglas, setReglas] = useState<{ trigger: string; accion: string }[]>([]);
  const [trigger, setTrigger] = useState('');
  const [accion, setAccion] = useState('');

  useEffect(() => {
    const guardadas = localStorage.getItem(LOCAL_KEY);
    if (guardadas) setReglas(JSON.parse(guardadas));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(reglas));
  }, [reglas]);

  const agregarRegla = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trigger || !accion) return;
    setReglas([...reglas, { trigger, accion }]);
    setTrigger('');
    setAccion('');
  };

  const eliminarRegla = (idx: number) => {
    setReglas(reglas.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Automatizaciones</h1>
          <p className="text-text-secondary mt-1">Ejecuta eventos de automatizaciones.</p>
        </div>
      </div>

      <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Automatizaciones</h2>
        <form onSubmit={agregarRegla} className="mb-6 flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold">Evento (Trigger)</label>
            <select value={trigger} onChange={e => setTrigger(e.target.value)} className="w-full border rounded p-2">
              <option value="">Selecciona un evento</option>
              {TRIGGERS.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Acción</label>
            <select value={accion} onChange={e => setAccion(e.target.value)} className="w-full border rounded p-2">
              <option value="">Selecciona una acción</option>
              {ACCIONES.map(a => (
                <option key={a.value} value={a.value}>{a.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Agregar Regla</button>
        </form>
        <h3 className="text-xl font-semibold mb-2">Reglas guardadas</h3>
        <ul className="space-y-2">
          {reglas.length === 0 && <li className="text-gray-500">No hay reglas aún.</li>}
          {reglas.map((r, idx) => (
            <li key={idx} className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <span>
                <b>Evento:</b> {TRIGGERS.find(t => t.value === r.trigger)?.label || r.trigger} <b>→ Acción:</b> {ACCIONES.find(a => a.value === r.accion)?.label || r.accion}
              </span>
              <button onClick={() => eliminarRegla(idx)} className="ml-4 text-red-600 hover:underline">Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Automatizaciones; 