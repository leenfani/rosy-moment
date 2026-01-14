import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

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

  useEffect(() => {
    if (state.isSubmitting && state.isFormValid) {
      dispatch({ type: "SHOW_SUCCESS_TOAST" });
    }
  }, [state.isSubmitting, state.isFormValid, dispatch]);

  const closeToast = () => {
    dispatch({ type: "CLOSE_TOAST" });
  };

  return {
    state,
    setField,
    togglePassword,
    toggleAuthMode,
    submit,
    toastProps: {
      open: state.toast.open,
      message: state.toast.message,
      severity: state.toast.severity,
      onClose: closeToast,
    },
  };
}
