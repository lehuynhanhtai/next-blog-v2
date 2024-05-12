import axios from './axios';

export const register = (data: any) => {
  return axios.post('/api/register', data);
};

export const changePassword = (data: any) => {
  return axios.post('/api/change-password', data);
};
