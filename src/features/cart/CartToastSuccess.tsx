import { Snackbar, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { hideSnackbar } from "../../shared/uiSlice";

export function CartToastSuccess() {
const dispatch = useAppDispatch();
const { snackbarOpen, snackbarMessage, snackbarSeverity } = useAppSelector(
  (state) => state.ui,
);

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={() => dispatch(hideSnackbar())}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={() => dispatch(hideSnackbar())}
        severity={snackbarSeverity}
        variant="filled"
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
}
