import { useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { AuthContext } from "../context/AuthContext";
import initialAuthState from "../context/InitialAuthState";

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
