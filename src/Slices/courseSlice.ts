import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CourseAPI from "Services/CourseAPI";
import { CourseState } from "Interfaces/courseInterface";

const initialState: CourseState = {
  courseCatalogs: [],
  isCourseCatalogsLoading: false,
  courseCatalogsError: undefined,

  courseList: [],
  isCourseListLoading: false,
  courseListError: undefined,
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
    // CourseList
    builder.addCase(getCourseList.pending, (state) => {
      state.isCourseListLoading = true;
    });
    builder.addCase(getCourseList.fulfilled, (state, { payload }) => {
      state.isCourseListLoading = false;
      state.courseListError = undefined;
      state.courseList = payload;
    });
    builder.addCase(getCourseList.rejected, (state, { error }) => {
      state.isCourseListLoading = false;
      state.courseListError = error.message;
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
export const getCourseList = createAsyncThunk(
  "course/getCourseList",
  async () => {
    try {
      const data = await CourseAPI.getCourseList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
// export const {} = courseSlice.actions;
export default courseSlice.reducer;
