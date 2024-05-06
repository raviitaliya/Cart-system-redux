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
      return state.filter((item)=> item.id !== action.payload)
    },
  },
});

export const { addCart, removeCart } = Cartslice.actions;

export default Cartslice.reducer;
