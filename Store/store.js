import { configureStore } from "@reduxjs/toolkit";
import watchlistSlice from "./StateSlices/watchlistSlice";
import loginStateSlice from "./StateSlices/loginSlice";

const store = configureStore({
  reducer: {
    watchlist: watchlistSlice.reducer,
    loginStateR: loginStateSlice.reducer,
  },
});

export default store;
