import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginValues, RegisterValues } from "Interfaces/userInterface";
import userAPI from "Services/UserAPI";
import { UserState } from "Interfaces/userInterface";
import { clearUserDetail } from "./userDetailSlice";

const initialState: UserState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  isUserLoading: false,
  userError: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.isUserLoading = true;
    });
    builder.addCase(postLogin.fulfilled, (state, { payload }) => {
      state.isUserLoading = false;
      state.userError = undefined;
      state.user = payload;
    });
    builder.addCase(postLogin.rejected, (state, { error }) => {
      state.isUserLoading = true;
      state.userError = error.message;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const postLogin = createAsyncThunk(
  "auth/login",
  async (payload: LoginValues, {}) => {
    try {
      const data = await userAPI.postLogin(payload);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      throw error;
    }
  }
);
// export const postRegister = createAsyncThunk(
//   "auth/register",
//   async (payload: RegisterValues) => {
//     try {
//       const data = await userAPI.postRegister(payload);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
export const logout = createAsyncThunk(
  "auth/logout",
  (payload, { dispatch }) => {
    localStorage.setItem("user", "");
    dispatch(clearUserDetail());
  }
);
export default authSlice.reducer;
