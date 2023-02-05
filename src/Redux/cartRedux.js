
// step 1 import the createslice method in @redux toolkit

import { createSlice } from "@reduxjs/toolkit";

// step 2 configure the createSlice

const CartSlice = createSlice({
  //  give the slice name
  name: "Cart",

  // create the Initital State
  initialState: {
    products: [],
    cartTotalQuanity: 0,
    cartTotalPrice: 0,
  },

  // create a reducer function
  reducers: {

    // create a action type for dispatch purpose

    addProducts: (state, action) => {
      state.cartTotalQuanity += 1;
      state.products.push(action.payload);
      state.cartTotalPrice += action.payload.productPrice * action.payload.quantityCount;
    },
  },
});

// exporting Action for Dispatch the action

export const { addProducts } = CartSlice.actions;

// exporting Reducer for store
export default CartSlice.reducer;
