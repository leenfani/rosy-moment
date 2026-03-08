import { useContext, useEffect, type SyntheticEvent} from "react";
import { AuthContext } from "../context/AuthContext";
import type { Dayjs } from "dayjs";

export function useAuthForm() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthForm must be used within AuthProvider");
  }

  const { state, dispatch } = context;

  const setField = (field: string, value: string | Dayjs) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const togglePassword = () => dispatch({ type: "TOGGLE_PASSWORD" });

  const toggleAuthMode = () => dispatch({ type: "TOGGLE_AUTH_MODE" });

  const submit = (e?: SyntheticEvent) => {
    if (e) e.preventDefault();
    dispatch({ type: "VALIDATE_FORM" });
  };

  useEffect(() => {
    if (state.isSubmitting && state.isFormValid) {
      dispatch({ type: "SHOW_SUCCESS_TOAST" });
    }
  }, [state.isSubmitting, state.isFormValid, dispatch]);

  const closeToast = () => dispatch({ type: "CLOSE_TOAST" });

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
