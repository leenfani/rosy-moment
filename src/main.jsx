import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyThemeProvider } from "./app/theme/MyThemeProvider.jsx";
import { AuthProvider } from "./features/auth/providers/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MyThemeProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MyThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
