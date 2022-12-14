import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export default authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;
