import { ReactNode } from 'react';

export interface ThemeContextType {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme.dark;
}

export enum Theme {
  light = `light`,
  dark = `dark`,
}
