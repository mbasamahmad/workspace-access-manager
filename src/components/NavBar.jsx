import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {
  const { state, actions } = useContext(AuthContext);

  return (
    <nav>
      <span>{state.isAuthenticated ? `Logged in as ${state.user}` : 'Not logged in'}</span>
      {state.isAuthenticated && <button onClick={actions.logout}>Logout</button>}
    </nav>
  );
};

export default NavBar;