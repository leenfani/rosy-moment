import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { addToCart } from "../cart/cartSlice";
import { showSnackbar } from "../../shared/uiSlice";
import { useEffect } from "react";
import { fetchProducts } from "../products/productsSlice";
import { fetchFlowerBouqet } from "../../features/products/flowerBouquetSlice";
import { useTheme } from "@mui/material";

import { Item, Photo, CartItem } from "../../types/index";

export default function SearchResult() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("q") || "";

  const jewellery = useAppSelector((state) => state.products.jewellery);
  const watches = useAppSelector((state) => state.products.watches);
  const flowers = useAppSelector((state) => state.flowerBouquet.items);
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
      dispatch(fetchFlowerBouqet(10));
    }
  }, [status, dispatch]);

  const allProducts: (Item | Photo)[] = [...jewellery, ...watches, ...flowers];

  const results = allProducts.filter((product) => {
    const title = (
      "title" in product ? product.title : product.alt || ""
    ).toLowerCase();
    const category = (
      "category" in product ? product.category : ""
    ).toLowerCase();

    return (
      title.includes(searchTerm.toLowerCase()) ||
      category.includes(searchTerm.toLowerCase())
    );
  });

  if (!results.length) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          No results found for "{searchTerm}"
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5" mb={4}>
        Results for "{searchTerm}"
      </Typography>

      <Grid container spacing={3}>
        {results.map((item) => {
          const isPhoto = "src" in item;
          const title = isPhoto ? item.alt : item.title;
          const image = isPhoto ? item.src.large2x : item.thumbnail;
          const price = isPhoto ? 59 : item.price;

          return (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card
                sx={{
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
                  image={image}
                  alt={title}
                  sx={{
                    height: "70%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    backgroundColor: theme.palette.background.paper,
                  }}
                />

                <CardContent
                  sx={{
                    px: { xs: 2, md: 3 },
                    pb: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    height: "5px",
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="h6">{title}</Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    {price && (
                      <Typography fontWeight="bold" sx={{ fontSize: "1.5rem" }}>
                        ${price}
                      </Typography>
                    )}

                    <Button
                      size="small"
                      sx={{
                        backgroundColor: "transparent",
                        border: `2px solid ${theme.palette.primary.main}`,
                        padding: "5px 15px",
                        borderRadius: "20px",
                        fontSize: "1rem",
                        transition: "0.3s",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main,
                          color: "#FCFBF4",
                        },
                      }}
                      onClick={() => {
                        const isPhoto = "src" in item;

                        const cartItem: CartItem = {
                          id: item.id,
                          title: isPhoto ? item.alt : item.title,
                          image: isPhoto ? item.src.large2x : item.thumbnail,
                          price: isPhoto ? 59 : item.price,
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
