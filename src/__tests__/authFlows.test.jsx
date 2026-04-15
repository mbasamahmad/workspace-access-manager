import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { AuthProvider } from '../contexts/AuthContext';
import { UIProvider } from '../contexts/UIContext';

jest.mock('../services/authService', () => ({
  login: jest.fn(() => Promise.resolve({
    user: 'admin',
    roles: ['admin'],
    token: 'fake-jwt-token'
  })),
  logout: jest.fn(() => Promise.resolve())
}));

describe('Auth Flows', () => {
  test('renders AdminPanel for admin users', async () => {
    render(
      <AuthProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </AuthProvider>
    );

    expect(screen.queryByText('Admin Panel')).toBeNull();

    fireEvent.click(screen.getByText('Logout'));

    expect(await screen.findByText('Admin Panel')).toBeInTheDocument();
  });
});