// My Components
import HeroSwiper from "./HeroSwiper";
import FlowerBouquetSwiper from "./FlowerBouquetSwiper";

// MUI
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <HeroSwiper />
      <Typography
        sx={{
          fontFamily: "Montserrat",
          p: "40px",
          textAlign: "center",
          fontSize: { xs: "1.9rem", md: "2.2rem" },
          fontWeight: "bold",
        }}
      >
        FLOWERS BOUQUET
      </Typography>
      <FlowerBouquetSwiper />
    </>
  );
}
