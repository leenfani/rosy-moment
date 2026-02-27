import { configureStore } from "@reduxjs/toolkit";
import flowerBouquetReducer from "../products/flowerBouquetSlice";
import cartReducer from "../products/cartSlice";

export const store = configureStore({
  reducer: {
    flowerBouquet: flowerBouquetReducer,
    cart: cartReducer,
  },
});
