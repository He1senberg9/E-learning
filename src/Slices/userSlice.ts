import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterValues } from "Interfaces/userInterface";
import userAPI from "Services/userAPI";

interface State {
  userRegister: RegisterValues | null;
  isRegisterLoading: boolean;
  errorRegister: string | null;
}

const initialState: State = {
  userRegister: null,
  isRegisterLoading: false,
  errorRegister: null,
};

export const postRegisterUser = createAsyncThunk(
  `user/register`,
  async (payload: RegisterValues) => {
    try {
      const data = userAPI.postRegisterUser(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postRegisterUser.pending, (state) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(postRegisterUser.fulfilled, (state, { payload }) => {
      state.errorRegister = null;
      state.isRegisterLoading = false;
      state.userRegister = payload;
    });
    builder.addCase(postRegisterUser.rejected, (state, { error }) => {
      state.isRegisterLoading = false;
      state.errorRegister = error.message as string;
    });
  },
});

export default userSlice.reducer;
