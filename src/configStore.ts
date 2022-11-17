import { configureStore } from "@reduxjs/toolkit";
import course from "Slices/courseSlice";
import auth from "Slices/authSlice";
import userDetail from "Slices/userDetailSlice";
import searchKey from "Slices/searchSlice";

const store = configureStore({
  reducer: { course, auth, userDetail, searchKey },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export const dispatch = store.dispatch;
