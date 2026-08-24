import { createSlice } from "@reduxjs/toolkit";

const attendanceSlice = createSlice({
  name: "attendance",

  initialState: {
    present: 0,
  },

  reducers: {
    markPresent: (state) => {
      state.present++;
    },

    markAbsent: (state) => {
      if (state.present > 0) {
        state.present--;
      }
    },
  },
});

export const { markPresent, markAbsent } = attendanceSlice.actions;

export default attendanceSlice.reducer;
