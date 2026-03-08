import type { Dispatch } from "react";
import type { Dayjs } from "dayjs";

export type AuthMode = "login" | "signup";
export type ToastSeverity = "success" | "error" | "warning" | "info";

export interface FormData {
  firstName: string;
  lastName: string;
  phoneNum: string;
  email: string;
  password: string;
  gender: "female" | "male";
  dateOfBirth: Dayjs | null;
}

export interface Toast {
  open: boolean;
  message: string;
  severity: ToastSeverity;
}

export type AuthAction =
  | { type: "SET_FIELD"; field: string; value: string | Dayjs }
  | { type: "TOGGLE_PASSWORD" }
  | { type: "TOGGLE_AUTH_MODE" }
  | { type: "VALIDATE_FORM" }
  | { type: "SHOW_SUCCESS_TOAST" }
  | { type: "CLOSE_TOAST" };

export interface AuthState {
  formData: FormData;
  errors: Record<string, string>;
  toast: Toast;
  authMode: AuthMode;
  showPassword: boolean;
  isFormValid: boolean;
  isSubmitting: boolean;
}

export interface AuthContextType {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}