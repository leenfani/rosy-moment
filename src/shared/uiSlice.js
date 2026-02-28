import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    snackbarOpen: false,
    snackbarMessage: "",
    snackbarSeverity: "success",
  },
  reducers: {
    showSnackbar: (state, action) => {
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