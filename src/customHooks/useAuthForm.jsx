import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuthForm() {
  const { state, dispatch } = useContext(AuthContext);

  const setField = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const togglePassword = () => dispatch({ type: "TOGGLE_PASSWORD" });

  const toggleAuthMode = () => dispatch({ type: "TOGGLE_AUTH_MODE" });

  const submit = (e) => {
    if (e) e.preventDefault();
    dispatch({ type: "VALIDATE_FORM" });
  };

  return {
    state,
    setField,
    togglePassword,
    toggleAuthMode,
    submit,
  };
}
