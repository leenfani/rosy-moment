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

export default function NavBar() {
  return (
    <nav className=" p-7 bg-pink-300 text-white">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid bgcolor={"black"} size={8}>
            <h1 className="text-5xl font-MonteCarlo">Rosy Moment</h1>
          </Grid>

          {/* icons */}

          <Grid
            container
            spacing={1}
            size={4}
            display="flex"
            flexDirection="row-reverse"
            justifyItems="flex-end"
            sx={{
              "& .MuiButton-root": {
                borderRadius: 0,
                color: "common.white",
                transition: "box-shadow 0.2s ease",

                "&:focus": {
                  outline: "none",
                },
                "&:hover": {
                  boxShadow: "inset 0 -2px 0 rgba(255,255,255,0.5)",
                },
              },
            }}
          >
            <Button key="login">
              <PersonIcon fontSize="large" />
              login
            </Button>

            <Button key="shoppingcart">
              <ShoppingCartIcon fontSize="large" />
            </Button>

            <Button key="darkMood">
              <DarkModeIcon fontSize="large" />
            </Button>

            <Button key="lightMood">
              <LightModeIcon fontSize="large" />
            </Button>
          </Grid>

          {/* ==icons== */}
        </Grid>
      </Box>
    </nav>
  );
}
