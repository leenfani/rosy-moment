import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import type { ToastSeverity } from "../../types/index";

interface AuthToastSuccessProps {
  open: boolean;
  message: string;
  severity: ToastSeverity;
  onClose: () => void;
}

export function AuthToastSuccess({ open, message, severity, onClose }: AuthToastSuccessProps) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}