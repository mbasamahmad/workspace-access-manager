import * as authService from '../services/authService';

export const postLogin = async (payload) => {
  try {
    const response = await authService.login(payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  return {
    user: 'admin',
    roles: ['admin']
  };
};