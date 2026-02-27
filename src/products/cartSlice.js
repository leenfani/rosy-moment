import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: item.id,
          title: item.alt,
          image: item.src.large2x,
          price: 59,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += 59;
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;

      const existingItem = state.cartItems.find((product) => product.id === id);

      if (!existingItem) return;

      existingItem.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += existingItem.price;
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const existingItem = state.cartItems.find((product) => product.id === id);

      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      } else {
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;

        state.cartItems = state.cartItems.filter(
          (product) => product.id !== id,
        );
      }
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
