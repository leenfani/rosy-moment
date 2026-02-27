import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./products/cartSlice";
import { showSnackbar } from "./products/uiSlice";
import { useEffect } from "react";
import { fetchProducts } from "./products/productsSlice";
import { useTheme } from "@mui/material";

export default function SearchResult() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("q") || "";

  const jewelry = useSelector((state) => state.products.jewelry);
  const watches = useSelector((state) => state.products.watches);
  const flowers = useSelector((state) => state.flowerBouquet.items);

  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const allProducts = [...jewelry, ...watches, ...flowers];

  const results = allProducts.filter((product) => {
    const title = (product.title || product.alt || "").toLowerCase();
    const brand = (product.brand || "").toLowerCase();
    const category = (product.category || "").toLowerCase();

    return (
      title.includes(searchTerm.toLowerCase()) ||
      brand.includes(searchTerm.toLowerCase()) ||
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
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" mb={4}>
        Results for "{searchTerm}"
      </Typography>

      <Grid container spacing={3}>
        {results.map((item) => {
          const title = item.title || item.alt;
          const image = item.thumbnail || item.images?.[0] || item.src?.medium;
          const price = item.price;

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={image}
                  alt={title}
                  sx={{ objectFit: "contain", bgcolor: "#f9f9f9", p: 2 }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom noWrap>
                    {title}
                  </Typography>

                  {price && <Typography fontWeight="bold">${price}</Typography>}
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "transparent",
                      border: `2px solid ${theme.palette.primary.main}`,
                      padding: "8px 20px",
                      cursor: "pointer",
                      borderRadius: "20px",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        transform: "scale(1.05)",
                        border: `2px solid white`,
                        color: "#FCFBF4",
                      },
                    }}
                    onClick={() => {
                      dispatch(addToCart(item));
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
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
