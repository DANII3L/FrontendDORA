import { apiService } from '../../shared/services/apiService';
import { Usuario } from '../../configuracion/models/Usuarios';

const login = async (usuario: Usuario) => {
  await apiService.post('Usuarios', usuario);
};

const register = async () => {
  const response = await apiService.get('Usuarios');
  return response.data;
};