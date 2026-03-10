import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Photo, FlowersBouquetState } from "../../types/index";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const fetchFlowerBouqet = createAsyncThunk<Photo[]>(
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
    return response.data.photos;
  },
);
const initialState: FlowersBouquetState = {
  items: [],
  status: "idle",
  error: null,
};

export const flowerBouquetSlice = createSlice({
  name: "flowersBouquet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
