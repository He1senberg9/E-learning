import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDetailState } from "Interfaces/userInterface";
import userAPI from "Services/UserAPI";

const initialState: UserDetailState = {
  userDetail: null,
  isUserDetailLoading: false,
  userDetailError: undefined,
};
const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: initialState,
  reducers: {
    clearUserDetail: (state) => {
      state.userDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.pending, (state) => {
      state.isUserDetailLoading = true;
    });
    builder.addCase(getUserDetail.fulfilled, (state, { payload }) => {
      state.isUserDetailLoading = false;
      state.userDetail = payload;
      state.userDetailError = undefined;
    });
    builder.addCase(getUserDetail.rejected, (state, { error }) => {
      state.isUserDetailLoading = false;
      state.userDetailError = error.message;
    });
  },
});

export const getUserDetail = createAsyncThunk(
  "user/getUserDetail",
  async () => {
    try {
      const data = await userAPI.getUserDetail();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const { clearUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
