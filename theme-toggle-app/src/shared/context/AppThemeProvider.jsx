import { createContext, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material";

export const themePaletteModeContext = createContext("");

export default function AppThemeProvider({ children }) {
  const [themePaletteMode, setThemePaletteMode] = useState("light");

  const toggleTheme = () => {
    setThemePaletteMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = createTheme({
    palette: { mode: themePaletteMode },
  });

  return (
    <themePaletteModeContext.Provider value={{ themePaletteMode, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </themePaletteModeContext.Provider>
  );
}
