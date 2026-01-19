// MUI Components
import {
  Box,
  Grid,
  Button,
  InputBase,
  useColorScheme,
  Typography,
} from "@mui/material";

// MUI Icons
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";

// Custom Components & Hooks
import AuthDialog from "./AuthDialog";
import { useState } from "react";

export default function NavBar() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  // Set Theme Mode With handleToggle

  const { mode, setMode } = useColorScheme();
  const isDarkMode = mode === "dark";
  const handleToggle = () => {
    setMode(isDarkMode ? "light" : "dark");
  };
  if (!mode) {
    return <Box component="nav" />;
  }

  return (
    <Box
      component="nav"
      sx={{
        bgcolor: "primary.main",
        p: 2,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          mr: 1,
          ml: 1,
        }}
      >
        <Grid container>
          {/* logo */}

          <Grid size={4}>
            <Typography
              sx={{
                fontFamily: "MonteCarlo",
                fontSize: "50px",
                color: (theme) => theme.palette.common.white,
              }}
            >
              Rosy Moment
            </Typography>
          </Grid>

          {/* ===logo=== */}

          {/* search bar */}

          <Grid
            size={4}
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid",
                borderColor: "common.white",
                pl: 2,
                mb: 1,
                height: "40px",
              }}
            >
              <InputBase
                placeholder="What are you looking for?"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  color: "common.white",
                  width: 400,
                }}
              />

              <Button
                aria-label="search"
                sx={{
                  borderLeft: "1px solid",
                  borderColor: "common.white",
                  color: "common.white",
                  "&:hover": {
                    borderColor: "common.white",
                  },
                }}
              >
                <SearchIcon />
              </Button>
            </Box>
          </Grid>

          {/* ===search bar=== */}

          {/* icons */}

          <Grid
            container
            spacing={1}
            size={4}
            flexDirection="row-reverse"
            justifyItems="flex-end"
            sx={{ color: "common.white" }}
          >
            {/* Authentication */}

            <Button color="inherit" onClick={() => setIsAuthDialogOpen(true)}>
              <PersonIcon fontSize="large" />
              Login
            </Button>

            {/* ==Authentication== */}

            {/* shopping cart */}

            <Button key="shoppingcart" color="inherit">
              <ShoppingCartIcon fontSize="large" />
            </Button>

            {/* ==shopping cart== */}

            {/* change mode */}

            <Button onClick={handleToggle} color="inherit">
              {isDarkMode ? (
                <DarkModeIcon fontSize="large" />
              ) : (
                <LightModeIcon fontSize="large" />
              )}
            </Button>

            {/* ==change mode== */}
          </Grid>

          {/* ==icons== */}
        </Grid>
      </Box>

      {/* Passing Props */}
      <AuthDialog
        open={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
      />
    </Box>
  );
}
