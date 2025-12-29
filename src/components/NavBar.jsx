// icons
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// grid
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { blue } from "@mui/material/colors";

export default function NavBar() {
  return (
    <nav className=" p-7 bg-pink-300 text-white">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid bgcolor={"black"} size={8}>
            <h1 className="text-5xl font-MonteCarlo">Rosy Moment</h1>
          </Grid>
          <Grid container direction="row-reverse" size={4} spacing={4}>
            <Grid>
              <PersonIcon fontSize="large" />
              Login
            </Grid>
            <Grid>
              <ShoppingCartIcon fontSize="large" />
            </Grid>
            <Grid>
              <DarkModeIcon fontSize="large" />
            </Grid>
            <Grid>
              <LightModeIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </nav>
  );
}
