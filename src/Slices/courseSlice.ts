import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CourseAPI from "Services/CourseAPI";
import { CourseState } from "Interfaces/courseInterface";

const initialState: CourseState = {
  courseCatalogs: [],
  isCourseCatalogsLoading: false,
  courseCatalogsError: undefined,
};
const courseSlice = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CourseCatalogs
    builder.addCase(getCourseCatalogs.pending, (state) => {
      state.isCourseCatalogsLoading = true;
    });
    builder.addCase(getCourseCatalogs.fulfilled, (state, { payload }) => {
      state.isCourseCatalogsLoading = false;
      state.courseCatalogsError = undefined;
      state.courseCatalogs = payload;
    });
    builder.addCase(getCourseCatalogs.rejected, (state, { error }) => {
      state.isCourseCatalogsLoading = false;
      state.courseCatalogsError = error.message;
    });
  },
});
export const getCourseCatalogs = createAsyncThunk(
  "course/getCourseCatalogs",
  async () => {
    try {
      const data = await CourseAPI.getCourseCatalogs();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// export const {} = courseSlice.actions;
export default courseSlice.reducer;
