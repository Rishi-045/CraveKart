import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      const amount = state.items.reduce((acc, res) => acc + res.price, 0);
      state.totalAmount = amount / 100;
    },
    removeItem: (state, action) => {
      const { id, price } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalAmount -= Math.floor( price / 100);
    },
    clearCart: (state) => {
      state.items.length = 0;
    //   state.totalAmount = 0;
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
