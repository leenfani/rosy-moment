import {
  Dialog,
  Box,
  Button,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useAuthForm } from "../customHooks/useAuthForm";

export default function AuthDialog({ open, onClose }) {
  const { state, setField, submit, togglePassword, toggleAuthMode } =
    useAuthForm();
  const { authMode, showPassword, formData, errors } = state;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box p={3}>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h6">
              {authMode === "login" ? "Login" : "Sign Up"}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Body */}
          {authMode === "signup" && (
            <>
              <Box display="flex" gap={2} mb={2}>
                {/* firstName */}
                <TextField
                  label="First Name"
                  fullWidth
                  value={formData.firstName}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  onChange={(e) => setField("firstName", e.target.value)}
                />
                {/* lastName */}
                <TextField
                  label="Last Name"
                  fullWidth
                  value={formData.lastName}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  onChange={(e) => setField("lastName", e.target.value)}
                />
              </Box>

              {/* phoneNum */}
              <TextField
                label="Phone Number"
                fullWidth
                sx={{ mb: 2 }}
                value={formData.phoneNum}
                error={!!errors.phoneNum}
                helperText={errors.phoneNum}
                onChange={(e) => setField("phoneNum", e.target.value)}
              />

              {/* date of birth */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date Of Birth"
                  sx={{ width: "100%", mb: 2 }}
                  value={formData.dateOfBirth}
                  onChange={(newValue) => setField("dateOfBirth", newValue)}
                  slotProps={{
                    textField: {
                      error: !!errors.dateOfBirth,
                      helperText: errors.dateOfBirth,
                    },
                  }}
                />
              </LocalizationProvider>

              {/* Gender */}
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  value={formData.gender}
                  onChange={(e) => setField("gender", e.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </>
          )}

          {/* Email */}
          <TextField
            label="Email"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={(e) => setField("email", e.target.value)}
          />

          {/* Password */}
          <TextField
            label="Password"
            fullWidth
            sx={{ mb: 2 }}
            type={showPassword ? "text" : "password"}
            value={formData.password}
            error={!!errors.password}
            helperText={errors.password}
            onChange={(e) => setField("password", e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Footer */}
          <Box mt={2}>
            <Button variant="contained" fullWidth size="large" onClick={submit}>
              {authMode === "login" ? (
                <label className="text-white"> Login </label>
              ) : (
                <label className="text-white"> Sign Up</label>
              )}
            </Button>
          </Box>

          <Box mt={3} textAlign="center">
            {authMode === "login" ? (
              <Typography variant="body2">
                Don't have an account?
                <Button
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  color="primary.main"
                  variant="text"
                  onClick={toggleAuthMode}
                >
                  Sign Up
                </Button>
              </Typography>
            ) : (
              <Typography variant="body2">
                Already have an account?
                <Button
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  color="primary.main"
                  variant="text"
                  onClick={toggleAuthMode}
                >
                  Login
                </Button>
              </Typography>
            )}
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}
