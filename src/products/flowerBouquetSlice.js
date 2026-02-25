import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const fetchFlowerBouqet = createAsyncThunk(
  "flowerBouquet/fetchFlowerBouqet",
  async () => {
    const response = await axios.get(
      "https://api.pexels.com/v1/search?query=bouquet",
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    );
    console.log("response", response.data.photos)
    return response.data.photos;
  },
);

export const flowerBouquetSlice = createSlice({
  name: "flowersBouquet",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: (build) => {
    build
      .addCase(fetchFlowerBouqet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlowerBouqet.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchFlowerBouqet.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default flowerBouquetSlice.reducer;
