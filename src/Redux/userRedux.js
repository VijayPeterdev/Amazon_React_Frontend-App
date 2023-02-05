import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    userdata: null,
    error: false,
    errordata: {},
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.userdata = action.payload;
    },
    loginFailed: (state, action) => {
      state.error = true;
      state.isFetching = false;
      state.errordata = action.payload;
    },
    logout: (state, action) => {
      state.error = false;
      state.isFetching = false;
      state.errordata = {};
      state.userdata = null;
    },
    signupStart: (state) => {
      state.isFetching = true;
    },
    signupSuccess: (state, action) => {
      state.isFetching = false;
      state.userdata = action.payload;
      state.error = false;
    },
    signupFailed: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errordata= action.payload;
      state.userdata = null;

    },
  },
});

export const { loginFailed, loginStart, logout, loginSuccess ,signupFailed,signupStart,signupSuccess} =
  userSlice.actions;

export default userSlice.reducer;
