// grid import
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// btn
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

// icons import
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";

// themes import
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
          {/* logo */}

          <Grid size={4}>
            <h1
              style={{ fontFamily: "MonteCarlo" }}
              className="text-5xl text-white"
            >
              Rosy Moment
            </h1>
          </Grid>

          {/* ===logo=== */}

          {/* search bar */}

          <Grid size={4} className="mt-3 !text-white flex justify-center">
            <div className="border-1 pl-3 w-fit">
              <InputBase
                className="w-100 !text-white"
                placeholder="What are you looking for?"
                inputProps={{ "aria-label": "search" }}
              />

              <Button
                aria-label="search"
                className="!border-l-1 hover:!border-white"
              >
                <SearchIcon />
              </Button>
            </div>
          </Grid>

          {/* ===search bar=== */}

          {/* icons */}

          <Grid
            container
            spacing={1}
            size={4}
            flexDirection="row-reverse"
            justifyItems="flex-end"
            className="text-white"
          >
            <Button key="login" className="nav-btn">
              <PersonIcon fontSize="large" />
              Login
            </Button>

            <Button key="shoppingcart" className="nav-btn">
              <ShoppingCartIcon fontSize="large" />
            </Button>

            <Button onClick={handleToggle} className="nav-btn">
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
