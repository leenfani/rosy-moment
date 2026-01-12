import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyThemeProvider } from "./providers/MyThemeProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </AuthProvider>
  </StrictMode>
);
