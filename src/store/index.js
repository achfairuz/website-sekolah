import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice"; // contoh slice

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
