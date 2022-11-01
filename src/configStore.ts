import { configureStore } from "@reduxjs/toolkit";
import course from "Slices/courseSlice";
import auth from "Slices/authSlice";
import userDetail from "Slices/userDetailSlice";

const store = configureStore({
  reducer: { course, auth, userDetail },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
