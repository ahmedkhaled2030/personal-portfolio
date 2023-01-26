import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

    },
    removeItem: (state, action) => {

    },
    resetCart: (state) => {

    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;