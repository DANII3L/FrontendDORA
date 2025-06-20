import { apiService } from '../../shared/services/apiService';
import { Cliente } from '../model/Cliente';

// Para crear un cliente
const crearCliente = async (cliente: Cliente) => {
  await apiService.post('clientes', cliente);
};

// Para obtener lista de clientes
const obtenerClientes = async () => {
  const response = await apiService.get('clientes');
  return response.data;
};