import {
  Course,
  CourseCatalog,
  RegisterCourse,
} from "Interfaces/courseInterface";
import axiosClient from "./axiosClient";

const courseAPI = {
  getCourseCatalog: () => {
    return axiosClient.get<CourseCatalog[]>(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`);
  },

  getCourseByCategory: (
    maDanhMuc: string = "TuDuy",
    maNhom: string = "GP01"
  ) => {
    return axiosClient.get<Course[]>(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`
    );
  },

  getCourseInfo: (courseId: string) => {
    return axiosClient.get<Course>(
      `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`
    );
  },

  postRegisterCourse: (payload: RegisterCourse) => {
    return axiosClient.post(`QuanLyKhoaHoc/DangKyKhoaHoc`, { ...payload });
  },
};

export default courseAPI;
