import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      console.log("in login slice", action.payload);

      state.value = action.payload;
    },
    isLoggedOut: (state) => {
      return initialState;
    },
  },
});

export const { isLoggedIn, isLoggedOut } = loginSlice.actions;

export default loginSlice.reducer;
