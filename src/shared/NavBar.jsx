// React router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// MUI Components
import {
  Box,
  Grid,
  Button,
  InputBase,
  useColorScheme,
  Typography,
  Badge,
  Stack,
} from "@mui/material";

// MUI Icons
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";

// Custom Components & Hooks
import AuthDialog from "../features/auth/AuthDialog";
import { useState } from "react";
import { useSearch } from "../features/search/customHooksSearch/useSearch";
import SearchSuggestions from "../features/search/SearchSuggestions";

// Redux
import { useSelector } from "react-redux";

export default function NavBar() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  // Reading the items quantity from the cart slice
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { searchTerm, setSearchTerm, suggestions } = useSearch();
  // handle search
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    navigate(`/search?q=${searchTerm}`);
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

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
        flexGrow: 1,
        pl: 3,
        pr: 3,
      }}
    >
      <Grid container spacing={1}>
        {/* logo */}

        <Grid size={{ xs: 12, sm: 7.5, md: 5, lg: 4 }}>
          <Typography
            component={Link}
            to="/"
            sx={{
              display: "block",
              textAlign: { xs: "center", sm: "left" },
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
          size={{ xs: 12, sm: 3, md: 3, lg: 4 }}
          sx={{
            mt: 3,
            pr: "1px",
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
                width: {
                  xs: "200px",
                  sm: "200px",
                  md: "280px",
                  lg: "400px",
                },
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              onBlur={() => setTimeout(() => setSearchTerm(""), 200)}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />

            <Button
              onClick={handleSearch}
              aria-label="search"
              sx={{
                borderLeft: "1px solid",
                color: "common.white",
                "&:hover": {
                  borderColor: "common.white",
                  color: "common.white",
                },
              }}
            >
              <SearchIcon />
            </Button>
          </Box>
          <SearchSuggestions suggestions={suggestions} />
        </Grid>

        {/* ===search bar=== */}

        {/* icons */}

        <Grid
          container
          spacing={1}
          size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
          justifyContent={{ xs: "center", sm: "center", md: "flex-end" }}
        >
          <Stack
            flexDirection="row-reverse"
            sx={{
              color: "common.white",
            }}
          >
            {/* Authentication */}

            <Button color="inherit" onClick={() => setIsAuthDialogOpen(true)}>
              <PersonIcon fontSize="large" />
              Login
            </Button>

            {/* ==Authentication== */}

            {/* shopping cart */}

            <Button
              key="shoppingcart"
              color="inherit"
              component={Link}
              to="/Cart"
            >
              <Badge badgeContent={totalQuantity} color="secondary" showZero>
                <ShoppingCartIcon fontSize="large" />
              </Badge>
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
          </Stack>
        </Grid>

        {/* ==icons== */}
      </Grid>

      {/* Passing Props */}
      <AuthDialog
        open={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
      />
    </Box>
  );
}
