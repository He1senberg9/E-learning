import { configureStore } from "@reduxjs/toolkit";
import course from "Slices/courseSlice";

const store = configureStore({
  reducer: { course },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
