import React, { createContext, useState, useMemo } from 'react';

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};