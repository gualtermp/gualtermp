import React, { createContext } from "react";
import { THEME_MODE_OPTIONS } from "../helpers/consts";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextValue {
  themeMode: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = React.useState<string>(
    THEME_MODE_OPTIONS.dark
  );

  function toggleTheme() {
    themeMode === THEME_MODE_OPTIONS.light
      ? setThemeMode(THEME_MODE_OPTIONS.dark)
      : setThemeMode(THEME_MODE_OPTIONS.light);
  }

  const contextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
