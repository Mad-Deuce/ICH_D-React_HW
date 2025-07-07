import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "/src/modules/App.jsx";

import AppThemeProvider from "/src/shared/context/AppThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>
);
