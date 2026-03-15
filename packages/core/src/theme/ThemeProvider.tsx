import React, { createContext, useCallback, useContext, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import type { SiluxTheme } from './createTheme';
import { generateCSSVariables } from './cssVariables';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

export type ColorScheme = 'light' | 'dark' | 'system';

export type ThemeContextValue = {
  theme: SiluxTheme;
  colorScheme: ColorScheme;
  resolvedColorScheme: 'light' | 'dark';
  setColorScheme: (scheme: ColorScheme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  colorScheme: 'light',
  resolvedColorScheme: 'light',
  setColorScheme: () => undefined,
});

export type ThemeProviderProps = {
  children: React.ReactNode;
  // Custom theme created via createTheme()
  theme?: SiluxTheme;
  // Controlled color scheme
  colorScheme?: ColorScheme;
  defaultColorScheme?: ColorScheme;
  // When true, injects CSS variables via inline style on a wrapper div
  withCSSVariables?: boolean;
};

export function ThemeProvider({
  children,
  theme,
  colorScheme: controlledScheme,
  defaultColorScheme = 'light',
  withCSSVariables = true,
}: ThemeProviderProps): React.ReactElement {
  const [internalScheme, setInternalScheme] = useState<ColorScheme>(defaultColorScheme);

  const activeScheme = controlledScheme ?? internalScheme;

  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  const resolvedColorScheme: 'light' | 'dark' =
    activeScheme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : activeScheme;

  const baseTheme = resolvedColorScheme === 'dark' ? darkTheme : lightTheme;
  const activeTheme = theme ?? baseTheme;

  const cssVars = withCSSVariables ? generateCSSVariables(activeTheme) : {};

  const setColorScheme = useCallback(
    (scheme: ColorScheme) => {
      if (controlledScheme === undefined) {
        setInternalScheme(scheme);
      }
    },
    [controlledScheme],
  );

  const contextValue: ThemeContextValue = {
    theme: activeTheme,
    colorScheme: activeScheme,
    resolvedColorScheme,
    setColorScheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {withCSSVariables ? (
        <div
          data-silux-theme={resolvedColorScheme}
          style={cssVars as React.CSSProperties}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
