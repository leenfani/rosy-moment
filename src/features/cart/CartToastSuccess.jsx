import { Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from "../../shared/uiSlice";

export function CartToastSuccess() {
  const dispatch = useDispatch();
  const { snackbarOpen, snackbarMessage, snackbarSeverity } = useSelector(
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
