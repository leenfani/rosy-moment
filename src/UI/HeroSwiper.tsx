// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

interface SlideItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  fontFamily?: string;
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/30104617/pexels-photo-30104617.jpeg",
    title: "Where you can find your",
    subtitle: "Rosy Moment",
    fontFamily: "MonteCarlo",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/32501973/pexels-photo-32501973.jpeg",
    title: "Share The Love With Our Special",
    subtitle: "Luxury Brands",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/28252194/pexels-photo-28252194.jpeg",
    title: "Various Styles For Various Moments",
    subtitle: "",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/34643008/pexels-photo-34643008.jpeg",
    title: "Feel The Warmth And The Sparkle",
    subtitle: "",
  },
];

export default function HeroSwiper() {
  const theme = useTheme();

  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": theme.palette.primary.main,
          "--swiper-pagination-color": theme.palette.primary.main,
          overflow: "hidden",
          paddingBottom: "30px",
          height: "450px",
          "--swiper-navigation-size": "25px",
          "--swiper-navigation-sides-offset": "5px",
        } as React.CSSProperties
      }
      loop={true}
      centeredSlides={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      speed={1100}
      pagination={{
        clickable: true,
      }}
      className="HeroSwiper"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={slide.image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt={slide.title}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                px: 3,
              }}
            >
              <Typography
                sx={{
                  mb: 1,
                  fontFamily: "Montserrat",
                  textShadow: "2px 3px 5px #333",
                  fontSize: { xs: "1.8rem", md: "3.5rem" },
                }}
              >
                {slide.title}
              </Typography>

              {slide.subtitle && (
                <Typography
                  sx={{
                    fontFamily: slide.fontFamily,
                    textShadow: "2px 3px 5px #333",
                    fontSize: { xs: "2rem", md: "4rem" },
                  }}
                >
                  {slide.subtitle}
                </Typography>
              )}
              <Box
                component="button"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                sx={{
                  mt: 3,
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: `2px solid ${theme.palette.primary.main}`,
                  padding: "8px 20px",
                  cursor: "pointer",
                  borderRadius: "20px",
                  fontFamily: "Montserrat",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    transform: "scale(1.05)",
                    border: `2px solid white`,
                  },
                }}
              >
                Explore More
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
