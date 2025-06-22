import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "/src/modules/App.jsx";

import store from "/src/redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
