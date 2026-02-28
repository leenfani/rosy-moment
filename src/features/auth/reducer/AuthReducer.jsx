export function AuthReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };
    case "TOGGLE_PASSWORD":
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    case "TOGGLE_AUTH_MODE":
      return {
        ...state,
        authMode: state.authMode === "login" ? "signup" : "login",
        errors: {},
      };
    case "VALIDATE_FORM": {
      const errors = {};
      const { formData, authMode } = state;
      const fieldsToValidate =
        authMode === "signup"
          ? [
              "firstName",
              "lastName",
              "phoneNum",
              "email",
              "password",
              "dateOfBirth",
            ]
          : ["email", "password"];

      fieldsToValidate.forEach((field) => {
        if (!formData[field]) {
          errors[field] = "This field is required";
        }
      });

      if (!errors.email && !formData.email.includes("@")) {
        errors.email = "Invalid email";
      }

      if (!errors.password) {
        if (formData.password.length < 8) {
          errors.password = "Password is short";
        } else if (!/[!@#$%]/.test(formData.password)) {
          errors.password = "Password must contain symbols (!@#$%)";
        }
      }

      if (!errors.phoneNum && formData.phoneNum.length < 11) {
        errors.phoneNum = "Invalid phone number";
      }

      return {
        ...state,
        errors: errors,
        isFormValid: Object.keys(errors).length === 0,
        isSubmitting: true,
      };
    }
    case "SHOW_SUCCESS_TOAST":
      return {
        ...state,
        toast: {
          open: true,
          message:
            state.authMode === "signup"
              ? "Account created successfully!"
              : "Login successfully!",
          severity: "success",
        },
        isSubmitting: false,
      };
    case "CLOSE_TOAST":
      return {
        ...state,
        toast: { ...state.toast, open: false },
      };

    default:
      return state;
  }
}
