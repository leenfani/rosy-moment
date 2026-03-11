import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState, SnackbarPayload } from "../types";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    snackbarOpen: false,
    snackbarMessage: "",
    snackbarSeverity: "success",
  } as UiState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.snackbarOpen = true;
      state.snackbarMessage = action.payload.message;
      state.snackbarSeverity = action.payload.severity || "success";
    },
    hideSnackbar: (state) => {
      state.snackbarOpen = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = uiSlice.actions;
export default uiSlice.reducer;
