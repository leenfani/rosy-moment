import { useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { AuthContext } from "../contexts/AuthContext";
import initialAuthState from "../contexts/InitialAuthState";

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
