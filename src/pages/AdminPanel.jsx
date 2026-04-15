import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AdminPanel = () => {
  const { state } = useContext(AuthContext);

  if (!state.roles.includes('admin')) {
    return null;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Admin only content</p>
    </div>
  );
};

export default AdminPanel;