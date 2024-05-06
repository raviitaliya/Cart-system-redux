import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addCart, removeCart } = Cartslice.actions;

export default Cartslice.reducer;
