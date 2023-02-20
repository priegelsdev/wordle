import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleTheme() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
