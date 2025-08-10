import React, { useState } from 'react';
import { Card } from '../../../shared/components/ui/Card';

const forbiddenKeywords = [
  'DROP', 'DELETE', 'TRUNCATE', 'ALTER', 'UPDATE', 'INSERT', 'CREATE', 'REPLACE', 'GRANT', 'REVOKE', '--'
];

function containsForbiddenKeyword(query: string) {
  const upperQuery = query.toUpperCase();
  return forbiddenKeywords.some(keyword => upperQuery.includes(keyword));
}

function ResultTable({ data }: { data: any[] }) {
  if (!data.length) return <div className="text-text-secondary">Sin resultados.</div>;
  const headers = Object.keys(data[0]);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-border rounded-lg">
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={key} className="px-4 py-2 border-b bg-gray-100 text-left text-sm font-semibold text-text-primary">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {headers.map((key) => (
                <td key={key} className="px-4 py-2 border-b text-sm text-text-secondary">
                  {String(row[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const DatabaseQuery: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleQueryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value);

  const executeQuery = async () => {
    if (!query.trim()) {
      setError('La consulta no puede estar vacía.');
      setResults(null);
      return;
    }
    if (containsForbiddenKeyword(query)) {
      setError('La consulta contiene palabras clave prohibidas por seguridad.');
      setResults(null);
      return;
    }
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      // Simulación de respuesta
      await new Promise(resolve => setTimeout(resolve, 1200));
      const mockResponse = {
        data: [
          { id: 1, name: 'Usuario Ejemplo 1', email: 'user1@example.com', rol: 'admin' },
          { id: 2, name: 'Usuario Ejemplo 2', email: 'user2@example.com', rol: 'user' },
        ],
        message: `Resultados para la consulta: ${query.substring(0, 30)}...`
      };
      setResults(mockResponse);
    } catch (err: any) {
      setError('Ocurrió un error al ejecutar la consulta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Consulta a Base de Datos</h1>
          <p className="text-text-secondary mt-1">Ejecuta consultas directamente a la base de datos.</p>
        </div>
      </div>

      {/* Query Editor */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Editor de Consultas</h2>
        <textarea
          value={query}
          onChange={handleQueryChange}
          placeholder="Escribe tu consulta aquí (ej. SELECT * FROM users LIMIT 10)"
          className="w-full h-40 p-3 font-mono text-sm bg-background border border-border rounded-lg text-text-primary focus:ring-2 focus:ring-orange-primary focus:outline-none"
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={executeQuery}
            disabled={loading}
            className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Ejecutando...' : 'Ejecutar Consulta'}
          </button>
        </div>
      </Card>

      {/* Results */}
      {(error || results) && (
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Resultados</h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg mb-4">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}
          {results?.data && Array.isArray(results.data) && results.data.length > 0 ? (
            <ResultTable data={results.data} />
          ) : results && (
            <pre className="text-sm text-text-secondary whitespace-pre-wrap">
              {JSON.stringify(results, null, 2)}
            </pre>
          )}
        </Card>
      )}
    </div>
  );
};

export default DatabaseQuery; 