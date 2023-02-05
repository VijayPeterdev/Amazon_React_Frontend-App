import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartProduct: [],
  },

  reducers: {
    addCart: (state, action) => {
      state.cartProduct = action.payload;
    },
  },
});


export  const {addCart} = CartSlice.actions ;

export default CartSlice.reducer;
