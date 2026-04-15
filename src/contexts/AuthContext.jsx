import React, { createContext, useReducer, useMemo } from 'react';
import { authReducer, initialAuthState } from '../state/authModel';
import * as authService from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const actions = useMemo(() => ({
    login: async (credentials) => {
      const user = await authService.login(credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    },
    logout: () => {
      authService.logout();
      dispatch({ type: 'LOGOUT' });
    }
  }), [dispatch]);

  const value = useMemo(() => ({ state, dispatch, actions }), [state, actions]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};