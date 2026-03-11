import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ProductsState,
  Item,
} from "../../types/productsTypes/products";

export const fetchProducts = createAsyncThunk<{ jewellery: Item[], watches: Item[] }>(
  "products/fetchProducts",
  async () => {
    const [jewelleryRes, watchesRes] = await Promise.all([
      axios.get("https://dummyjson.com/products/category/womens-jewellery"),
      axios.get("https://dummyjson.com/products/category/mens-watches"),
    ]);

    return {
      jewellery: jewelleryRes.data.products,
      watches: watchesRes.data.products,
    };
  },
);

const initialState:ProductsState= {
    jewellery: [],
    watches: [],
    status: "idle",
    error: null,
  }

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.jewellery = action.payload.jewellery;
        state.watches = action.payload.watches;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
