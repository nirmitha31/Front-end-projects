import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postReducer from "./postSlice";
import attendanceReducer from "./attendanceSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    post: postReducer,
    attendance: attendanceReducer,
    todos: todoReducer,
  },
});
