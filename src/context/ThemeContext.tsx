import React, { createContext, ReactNode, useState, useEffect } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeOption = 'light' | 'dark';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(
    (localStorage.getItem('theme') as ThemeOption) || 'light'
  );

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
