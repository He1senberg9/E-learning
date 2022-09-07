import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "Slices/courseSlice";
import userSlice from "Slices/userSlice";
import authSlice from "Slices/authSlice";
const store = configureStore({
  reducer: { courseSlice, userSlice, authSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
