import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginValues, User } from "Interfaces/userInterface";
import userAPI from "Services/userAPI";

interface State {
  userLogin: User | null;
  isLoginLoading: boolean;
  errorLogin: string | null;
}

const initialState: State = {
  userLogin: JSON.parse(localStorage.getItem("user") as string) || null,
  isLoginLoading: false,
  errorLogin: null,
};

export const postLoginUser = createAsyncThunk(
  `user/login`,
  async (payload: LoginValues) => {
    try {
      const data = userAPI.postLoginUser(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userLogin = null;
      localStorage.setItem("user", JSON.stringify(null));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLoginUser.pending, (state) => {
      state.isLoginLoading = true;
    });
    builder.addCase(postLoginUser.fulfilled, (state, { payload }) => {
      state.errorLogin = null;
      state.isLoginLoading = false;
      state.userLogin = payload;
      payload === undefined
        ? localStorage.setItem("user", JSON.stringify(null))
        : localStorage.setItem("user", JSON.stringify(payload));
    });
    builder.addCase(postLoginUser.rejected, (state, { error }) => {
      state.isLoginLoading = false;
      state.errorLogin = error.message as string;
    });
  },
});
export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
