import React from 'react';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <AdminPanel />
    </div>
  );
}

export default App;