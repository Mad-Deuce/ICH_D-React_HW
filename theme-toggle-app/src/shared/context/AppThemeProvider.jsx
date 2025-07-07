import { createContext, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material";

export const themePaletteModeContext = createContext("");

export default function AppThemeProvider({ children }) {
  const [themePaletteMode, setThemePaletteMode] = useState("light");

  const toggleTheme = () => {
    setThemePaletteMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  let currentTheme = createTheme({
    palette: { mode: themePaletteMode },
  });
  currentTheme.palette.background.default =
    themePaletteMode === "dark" ? "#007" : "#070";

  return (
    <themePaletteModeContext.Provider value={{ themePaletteMode, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </themePaletteModeContext.Provider>
  );
}
