import { useAppDispatch, useAppSelector } from "../../app/redux-hooks";
import { increaseQuantity, decreaseQuantity, clearCart } from "./cartSlice";

// MUI

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";

import { showSnackbar } from "../../shared/uiSlice";

export default function Cart() {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice, totalQuantity } = useAppSelector(
    (state) => state.cart,
  );

  const theme = useTheme();

  // handle checkout

  const handleCheckout = () => {
    dispatch(
      showSnackbar({
        message: "Order placed successfully! we will message you by details",
        severity: "success",
      }),
    );

    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 3,
        }}
      >
        <Typography variant="h4">
          Your cart is empty explore our produts to start your
        </Typography>
        <Typography variant="h2" fontFamily="MonteCarlo">
          Rosy Moment
        </Typography>
        <Button
          component={Link}
          to="/"
          sx={{
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
        >
          EXPLORE
        </Button>
        <Typography variant="h4"></Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 5 }}>
      <Typography variant="h4" mb={4}>
        Shopping Cart
      </Typography>

      {/* product card */}

      {cartItems.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            p: 2,
            borderRadius: "20px",
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            sx={{ width: 150, height: 150, borderRadius: "15px" }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography>Price: ${item.price}</Typography>
            <Typography>Quantity: {item.quantity}</Typography>
          </CardContent>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(decreaseQuantity(item.id));
                dispatch(
                  showSnackbar({
                    message: "Product removed from cart!",
                    severity: "success",
                  }),
                );
              }}
            >
              -
            </Button>

            <Typography>{item.quantity}</Typography>

            <Button
              variant="outlined"
              onClick={() => {
                dispatch(increaseQuantity(item.id));
                dispatch(
                  showSnackbar({
                    message: "Product added to cart!",
                    severity: "success",
                  }),
                );
              }}
            >
              +
            </Button>
          </Box>
        </Card>
      ))}

      {/* ==product card== */}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ textAlign: "right", pb: "50px" }}>
        <Typography variant="h6">Total Items: {totalQuantity}</Typography>
        <Typography variant="h5" fontWeight="bold">
          Total Price: ${totalPrice}
        </Typography>
        <Button variant="contained" size="large" onClick={handleCheckout}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
}
