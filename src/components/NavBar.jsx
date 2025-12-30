// grid
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// btn
import Button from "@mui/material/Button";

// icons
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// themes

import { useColorScheme } from "@mui/material/styles";

export default function NavBar() {
  // set mood
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
      className=" p-7"
      sx={{
        bgcolor: "primary.main",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container>
          <Grid bgcolor={"black"} size={8}>
            <h1 className="text-5xl font-MonteCarlo text-white">Rosy Moment</h1>
          </Grid>

          {/* icons */}

          <Grid
            container
            spacing={1}
            size={4}
            flexDirection="row-reverse"
            justifyItems="flex-end"
            className="text-white"
          >
            <Button key="login">
              <PersonIcon fontSize="large" />
              Login
            </Button>

            <Button key="shoppingcart">
              <ShoppingCartIcon fontSize="large" />
            </Button>

            <Button onClick={handleToggle}>
              {isDarkMode ? (
                <DarkModeIcon fontSize="large" />
              ) : (
                <LightModeIcon fontSize="large" />
              )}
            </Button>
          </Grid>

          {/* ==icons== */}
        </Grid>
      </Box>
    </Box>
  );
}
