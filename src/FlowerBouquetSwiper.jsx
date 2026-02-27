// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// required modules
import { Pagination, Navigation } from "swiper/modules";

// MUI
import {
  useTheme,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ShowSkeleton from "./components/skeleton";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowerBouqet } from "./products/flowerBouquetSlice";
import { addToCart } from "./products/cartSlice";

// React
import { useEffect } from "react";

export default function FlowerBouquetSwiper() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.flowerBouquet);
  const theme = useTheme();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFlowerBouqet());
    }
  }, [status, dispatch]);

  if (status === "failed") {
    return (
      <Typography color="error" align="center">
        {error} <SentimentVeryDissatisfiedIcon />
      </Typography>
    );
  }

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": theme.palette.primary.main,
        "--swiper-pagination-color": theme.palette.primary.main,
        overflow: "hidden",
        paddingBottom: "30px",
        height: "850px",
        "--swiper-navigation-size": "35px",
        "--swiper-navigation-sides-offset": "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      loading="lazy"
      centeredSlides={true}
      navigation={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
      }}
      className="HeroSwiper"
    >

      {/* is loading case */}

      {status === "loading" ? (
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ShowSkeleton />
        </SwiperSlide>
      ) : (
        items.map((photo) => (
          <SwiperSlide
            key={photo.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            {/* product card */}
            
            <Card
              sx={{
                width: { xs: "80%", md: "60%" },
                height: "800px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "40px",
                overflow: "hidden",
                boxShadow: "0px 20px 40px  rgba(0,0,0,0.4)",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: "70%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  backgroundColor: theme.palette.background.paper,
                }}
                image={photo.src.large2x}
                title="green iguana"
              />
              <CardContent
                sx={{
                  width: "90%",
                  height: "5px",
                  flexGrow: 1,
                  gap: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    
                    pt: "135px",
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                  }}
                >
                  {photo.alt || "Beautiful Bouquet"}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  px: { xs: 2, md: 6 },
                  pb: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.9rem", md: "2.5rem" },
                    pt: "110px",
                    fontWeight: "bold",
                  }}
                >
                  $59
                </Typography>
                <Button
                  size="large"
                  sx={{
                    mt: 13,
                    backgroundColor: "transparent",
                    border: `2px solid ${theme.palette.primary.main}`,
                    padding: "8px 20px",
                    cursor: "pointer",
                    borderRadius: "20px",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      transform: "scale(1.05)",
                      border: `2px solid white`,
                      color: "#FCFBF4",
                    },
                  }}
                  onClick={() => dispatch(addToCart(photo))}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
