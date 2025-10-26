import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../data/data";

const initialState = {
  products: productsData,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
