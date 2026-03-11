export interface UiState {
  snackbarOpen: boolean;
  snackbarMessage: string;
  snackbarSeverity: "error" | "warning" | "info" | "success";
}

export interface SnackbarPayload {
  message: string;
  severity: "error" | "warning" | "info" | "success";
}
