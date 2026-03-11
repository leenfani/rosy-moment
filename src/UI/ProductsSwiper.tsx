import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
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
import ShowSkeleton from "../shared/Skeleton";
import { fetchProducts } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";
import { showSnackbar } from "../shared/uiSlice";
import { useEffect } from "react";

import { CartItem } from "../types";


import { useAppDispatch, useAppSelector } from "../app/redux-hooks";

interface ProductsSwiperProps {
  type: "jewellery" | "watches";
}

export default function ProductsSwiper({ type }: ProductsSwiperProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const { jewellery, watches, status, error } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const items = (type === "jewellery" ? jewellery : watches) || [];

  if (status === "failed") {
    return (
      <Typography color="error" align="center">
        {error} <SentimentVeryDissatisfiedIcon />
      </Typography>
    );
  }
  if (status === "succeeded" && items.length === 0) {
    return <Typography align="center">No products found for {type}</Typography>;
  }

  return (
    <Swiper
      key={type}
      style={
        {
          "--swiper-navigation-color": theme.palette.primary.main,
          "--swiper-pagination-color": theme.palette.primary.main,
          paddingBottom: "30px",
          height: "850px",
          "--swiper-navigation-size": "35px",
        } as React.CSSProperties
      }
      navigation={true}
      slidesPerView={1}
      spaceBetween={30}
      loop={items.length > 0}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
    >
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
        items.map((product) => (
          <SwiperSlide
            key={`${type}-${product.id}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: { xs: "80%", md: "60%" },
                height: "800px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "40px",
                boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: "65%",
                  objectFit: "contain",
                  bgcolor: "#f9f9f9",
                  p: 2,
                }}
                image={product.thumbnail}
                title={product.title}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs:"1.4rem", lg: "1.6rem" },
                  }}
                >
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  px: { xs: 2, md: 6 },
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.9rem" },
                    fontWeight: "bold",
                  }}
                >
                  ${product.price}
                </Typography>
                <Button
                  size="large"
                  sx={{
                    backgroundColor: "transparent",
                    border: `2px solid ${theme.palette.primary.main}`,
                    padding: "5px 20px",
                    
                    cursor: "pointer",
                    borderRadius: "20px",
                    fontSize: { xs: "1.1rem", md: "1.5rem" },
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      transform: "scale(1.05)",
                      border: `2px solid white`,
                      color: "#FCFBF4",
                    },
                  }}
                  onClick={() => {
                    const cartItem: CartItem = {
                      id: product.id,
                      title: product.description || "Beautiful Bouquet",
                      image: product.thumbnail,
                      price: product.price,
                      quantity: 1,
                    };

                    dispatch(addToCart(cartItem));
                    dispatch(
                      showSnackbar({
                        message: "Product added to cart!",
                        severity: "success",
                      }),
                    );
                  }}
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
