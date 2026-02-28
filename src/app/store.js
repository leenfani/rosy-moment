import { configureStore } from "@reduxjs/toolkit";
import flowerBouquetReducer from "../features/products/flowerBouquetSlice";
import cartReducer from "../features/cart/cartSlice";
import uiReducer from "../shared/uiSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    flowerBouquet: flowerBouquetReducer,
    cart: cartReducer,
    ui: uiReducer,
    products: productsReducer,
  },
});
