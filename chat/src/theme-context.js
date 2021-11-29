import { ThemeProvider } from "@mui/private-theming";
import { createContext, useCallback, useState } from "react";

export const ThemeContext = createContext();

const themes = {
  red: {
    color: "#d91e4b",
  },
  green: {
    color: "#1ecb32",
  },
};

export const CustomThemeProvider = ({ children, initialTheme = "green" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({ name, theme: themes[name] });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      {children}
    </ThemeContext.Provider>
  );
};
