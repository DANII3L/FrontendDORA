import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Pagination from '../../../shared/components/Pagination';

const UsuariosList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Estado para ítems por página

  const usuarios = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      rol: 'Administrador',
      estado: 'activo',
      ultimaConexion: '2024-03-01',
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria.garcia@example.com',
      rol: 'Editor',
      estado: 'activo',
      ultimaConexion: '2024-02-28',
    },
    {
      id: 3,
      nombre: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@example.com',
      rol: 'Visualizador',
      estado: 'inactivo',
      ultimaConexion: '2024-02-20',
    },
    {
      id: 4,
      nombre: 'Ana López',
      email: 'ana.lopez@example.com',
      rol: 'Administrador',
      estado: 'activo',
      ultimaConexion: '2024-03-02',
    },
    {
      id: 5,
      nombre: 'Pedro Ramírez',
      email: 'pedro.ramirez@example.com',
      rol: 'Editor',
      estado: 'activo',
      ultimaConexion: '2024-03-01',
    },
    {
      id: 6,
      nombre: 'Sofía Hernández',
      email: 'sofia.hernandez@example.com',
      rol: 'Visualizador',
      estado: 'inactivo',
      ultimaConexion: '2024-02-25',
    },
    {
      id: 7,
      nombre: 'Diego Torres',
      email: 'diego.torres@example.com',
      rol: 'Administrador',
      estado: 'activo',
      ultimaConexion: '2024-03-03',
    },
    {
      id: 8,
      nombre: 'Laura Díaz',
      email: 'laura.diaz@example.com',
      rol: 'Editor',
      estado: 'activo',
      ultimaConexion: '2024-03-02',
    },
    {
      id: 9,
      nombre: 'Miguel Ruíz',
      email: 'miguel.ruiz@example.com',
      rol: 'Visualizador',
      estado: 'activo',
      ultimaConexion: '2024-03-01',
    },
  ];

  const filteredUsuarios = usuarios.filter(usuario => {
    const matchesSearch = usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          usuario.rol.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'todos' || usuario.estado === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsuarios.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsuarios.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (numItems: number) => {
    setItemsPerPage(numItems);
    setCurrentPage(1); // Resetear a la primera página cuando cambian los ítems por página
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'activo':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactivo':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Usuarios</h1>
          <p className="text-text-secondary mt-1">Gestiona los usuarios del sistema</p>
        </div>
        <Link
          to="/usuarios/nuevo"
          className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Nuevo Usuario</span>
        </Link>
      </div>

      <div className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-text-secondary" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-background border border-border rounded-lg text-text-primary px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary"
            >
              <option value="todos">Todos</option>
              <option value="activo">Activos</option>
              <option value="inactivo">Inactivos</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((usuario) => (
          <div key={usuario.id} className="bg-card-background backdrop-blur-lg p-6 rounded-2xl border border-border hover:border-text-secondary transition-all duration-300 hover:shadow-xl group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-primary/10 rounded-xl flex items-center justify-center">
                  <UserCircleIcon className="h-6 w-6 text-orange-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-orange-primary transition-colors duration-200">
                    {usuario.nombre}
                  </h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getEstadoColor(usuario.estado)}`}>
                    {usuario.estado}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <span className="text-sm">Email: {usuario.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <span className="text-sm">Rol: {usuario.rol}</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <span className="text-sm">Última conexión: {new Date(usuario.ultimaConexion).toLocaleDateString('es-ES')}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Link
                to={`/usuarios/${usuario.id}/editar`}
                className="w-full bg-background hover:bg-orange-primary/10 text-text-secondary hover:text-orange-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center block"
              >
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredUsuarios.length === 0 && (
        <div className="text-center py-12">
          <UserCircleIcon className="mx-auto h-12 w-12 text-text-secondary" />
          <h3 className="mt-2 text-sm font-medium text-text-primary">No se encontraron usuarios</h3>
          <p className="mt-1 text-sm text-text-secondary">
            {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Comienza agregando un nuevo usuario'}
          </p>
        </div>
      )}

      {filteredUsuarios.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}
    </div>
  );
};

export default UsuariosList;