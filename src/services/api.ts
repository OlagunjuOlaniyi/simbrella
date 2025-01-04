
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://6777ecda80a79bf9190363a1.mockapi.io/api/v1', 
});

// Mock Endpoints
export const getUserData = () => api.get('/users');
export const getTransactions = () => api.get('/transaction'); 
export const getLoanDetails = () => api.get('/loans');
export const submitLoanRequest = (data: any) => api.post('/loans', data);
