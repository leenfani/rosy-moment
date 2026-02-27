import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const [jewelryRes, watchesRes] = await Promise.all([
      axios.get("https://dummyjson.com/products/category/womens-jewellery"),
      axios.get("https://dummyjson.com/products/category/mens-watches"),
    ]);

    return {
      jewelry: jewelryRes.data.products,
      watches: watchesRes.data.products,
    };
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    jewelry: [],
    watches: [],
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.jewelry = action.payload.jewelry;
        state.watches = action.payload.watches;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
