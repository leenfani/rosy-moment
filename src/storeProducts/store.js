import { configureStore } from "@reduxjs/toolkit";
import flowerBouquetSlice from "../products/flowerBouquetSlice";

export const store = configureStore({
  reducer: {
    flowerBouquet: flowerBouquetSlice,
  },
});
