import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./slice/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSliceReducer,
  },
});
