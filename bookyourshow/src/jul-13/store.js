import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postReducer from "../jul-13/postSlice";
import attendanceReducer from "./attendanceSlice";
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    attendance: attendanceReducer,
    todos: todoReducer,
  },
});
