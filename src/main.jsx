import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyThemeProvider } from "./providers/MyThemeProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MyThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MyThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
