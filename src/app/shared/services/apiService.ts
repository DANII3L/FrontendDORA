import axios from 'axios';

const API_BASE_URL = 'https://tudominio.com/api';

export const apiService = {
  get: (endpoint: string, params?: any) =>
    axios.get(`${API_BASE_URL}/${endpoint}`, { params }),

  post: (endpoint: string, data: any) =>
    axios.post(`${API_BASE_URL}/${endpoint}`, data),

  put: (endpoint: string, data: any) =>
    axios.put(`${API_BASE_URL}/${endpoint}`, data),

  delete: (endpoint: string, id: string | number) =>
    axios.delete(`${API_BASE_URL}/${endpoint}/${id}`),
};