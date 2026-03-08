import type { AuthState } from "../../../types/index";
export const initialAuthState: AuthState = {
  formData: {
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    password: "",
    gender: "female",
    dateOfBirth: null,
  },
  errors: {},
  toast: {
    open: false,
    message: "",
    severity: "success",
  },
  authMode: "signup",
  showPassword: false,
  isFormValid: false,
  isSubmitting: false,
};
export default initialAuthState;
