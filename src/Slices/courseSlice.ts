import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Course,
  CourseCatalog,
  RegisterCourse,
} from "Interfaces/courseInterface";
import courseAPI from "Services/courseAPI";

interface State {
  courseCatalog: CourseCatalog[];
  isCourseCatalogLoading: boolean;
  errorCourseCatalog: string | null;
  courseList: Course[];
  isCourseListLoading: boolean;
  errorCourseList: string | null;
  course: Course | null;
  isCourseLoading: boolean;
  errorCourse: string | null;
  registerCourse: Course | null;
  isRegisterCourseLoading: boolean;
  errorRegisterCourse: string | null;
}

const initialState: State = {
  courseCatalog: [],
  isCourseCatalogLoading: false,
  errorCourseCatalog: null,
  courseList: [],
  isCourseListLoading: false,
  errorCourseList: null,
  course: null,
  isCourseLoading: false,
  errorCourse: null,
  registerCourse: null,
  isRegisterCourseLoading: false,
  errorRegisterCourse: null,
};

export const getCourseCatalog = createAsyncThunk(
  `course/getCourseCatalog`,
  async () => {
    try {
      const data = await courseAPI.getCourseCatalog();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCourseByCategory = createAsyncThunk(
  `course/getCourseByCategory`,
  async (payload?: string) => {
    try {
      const data = await courseAPI.getCourseByCategory(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCourseInfo = createAsyncThunk(
  `course/getCourseInfo`,
  async (payload: string) => {
    try {
      const data = await courseAPI.getCourseInfo(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const postRegisterCourse = createAsyncThunk(
  `course/postRegisterCourse`,
  async (payload: RegisterCourse) => {
    try {
      const data = await courseAPI.postRegisterCourse(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourseCatalog.pending, (state) => {
      state.isCourseCatalogLoading = true;
    });
    builder.addCase(getCourseCatalog.fulfilled, (state, { payload }) => {
      state.errorCourseCatalog = null;
      state.isCourseCatalogLoading = false;
      state.courseCatalog = payload;
    });
    builder.addCase(getCourseCatalog.rejected, (state, { error }) => {
      state.isCourseCatalogLoading = false;
      state.errorCourseCatalog = error.message as string;
    });
    //------------------------------------------------------------------
    builder.addCase(getCourseByCategory.pending, (state) => {
      state.isCourseListLoading = true;
    });
    builder.addCase(getCourseByCategory.fulfilled, (state, { payload }) => {
      state.errorCourseList = null;
      state.isCourseListLoading = false;
      state.courseList = payload;
    });
    builder.addCase(getCourseByCategory.rejected, (state, { error }) => {
      state.isCourseListLoading = false;
      state.errorCourseList = error.message as string;
    });
    //------------------------------------------------------------------
    builder.addCase(getCourseInfo.pending, (state) => {
      state.isCourseLoading = true;
    });
    builder.addCase(getCourseInfo.fulfilled, (state, { payload }) => {
      state.errorCourse = null;
      state.isCourseLoading = false;
      state.course = payload;
    });
    builder.addCase(getCourseInfo.rejected, (state, { error }) => {
      state.isCourseLoading = false;
      state.errorCourse = error.message as string;
    });
    //------------------------------------------------------------------
    builder.addCase(postRegisterCourse.pending, (state) => {
      state.isRegisterCourseLoading = true;
    });
    builder.addCase(postRegisterCourse.fulfilled, (state, { payload }) => {
      state.errorRegisterCourse = null;
      state.isRegisterCourseLoading = false;
      state.registerCourse = payload;
    });
    builder.addCase(postRegisterCourse.rejected, (state, { error }) => {
      state.isRegisterCourseLoading = false;
      state.errorRegisterCourse = error.message as string;
    });
  },
});

export default courseSlice.reducer;
