import { createSlice } from "@reduxjs/toolkit";
type State = {
  value: string;
};
const initialState: State = { value: "" };
const searchSlice = createSlice({
  name: "searchKey",
  initialState: initialState,
  reducers: {
    changeKey: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { changeKey } = searchSlice.actions;
export default searchSlice.reducer;
