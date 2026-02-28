import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart === null) return DEFAULT_STATE;

    return { ...DEFAULT_STATE, ...JSON.parse(savedCart) };
  } catch {
    return DEFAULT_STATE;
  }
};

const initialState = loadCartFromStorage();

const saveCartToStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const productPrice = item.price || 59;

      const existingItem = state.cartItems.find(
        (product) => product.id === item.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: item.id,
          title: item.title || item.alt,
          image: item.src?.large2x || item.thumbnail,
          price: productPrice,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += productPrice;

      saveCartToStorage(state);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;

      const existingItem = state.cartItems.find((product) => product.id === id);

      if (!existingItem) return;

      existingItem.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += existingItem.price;

      saveCartToStorage(state);
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

      saveCartToStorage(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
