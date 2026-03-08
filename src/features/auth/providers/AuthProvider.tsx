import { useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { AuthContext } from "../context/AuthContext";
import initialAuthState from "../context/InitialAuthState";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}