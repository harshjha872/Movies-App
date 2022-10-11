import { createSlice } from "@reduxjs/toolkit";
const loginStateSlice = createSlice({
  name: "loginState",
  initialState: {
    isloggedIn: false,
  },
  reducers: {
    UserLoggedOut(state) {
      state.isloggedIn = false;
    },

    UserLoggedIn(state) {
      state.isloggedIn = true;
    },
  },
});

export const loginStateActions = loginStateSlice.actions;

export default loginStateSlice;
