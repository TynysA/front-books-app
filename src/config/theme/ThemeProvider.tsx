import { createContext, FC, useContext, useEffect, useState } from 'react';

import { isBrowser } from '@/config/app/constants';
import { Theme, ThemeContextType, ThemeProviderProps } from '@/config/theme/types';

const getInitialTheme = (defaultTheme: Theme = Theme.dark): Theme => {
  if (isBrowser) {
    const storedTheme = localStorage.getItem(`color-theme`);
    if (storedTheme === Theme.light || storedTheme === Theme.dark) {
      return storedTheme as Theme;
    }

    const userMedia = window.matchMedia(`(prefers-color-scheme: dark)`);
    if (userMedia.matches) {
      return Theme.dark;
    }
  }

  return defaultTheme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (isBrowser) {
      return Theme.light;
    }
    return getInitialTheme();
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const rawSetTheme = (theme: Theme) => {
    const root = document.documentElement;
    const isDark = theme === Theme.dark;

    root.classList.remove(isDark ? Theme.light : Theme.dark);
    root.classList.add(theme);

    localStorage.setItem(`color-theme`, theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
