import axiosClient from "./axiosClient";
import { CourseCatalog, CourseDetail } from "Interfaces/courseInterface";

const courseAPI = {
  getCourseCatalogs: () => {
    return axiosClient.get<CourseCatalog[]>("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getCourseList: () => {
    return axiosClient.get<CourseDetail[]>("QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },
  getCourseListByPage: (page: string) => {
    return axiosClient.get<{ items: CourseDetail[] }>(
      `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=10&MaNhom=GP01`
    );
  },
  getCourseListByCatalog: (catalogID: string) => {
    return axiosClient.get<CourseDetail[]>(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${catalogID}&MaNhom=GP01`
    );
  },
  getCourseDetail: (courseID: string) => {
    return axiosClient.get<CourseDetail>(
      `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseID}`
    );
  },
  postCourseRegister: (courseID: string, userName: string) => {
    axiosClient.post("QuanLyKhoaHoc/DangKyKhoaHoc", {
      maKhoaHoc: courseID,
      taiKhoan: userName,
    });
  },
  postCourseUnRegister: (courseID: string, userName: string) => {
    axiosClient.post("QuanLyKhoaHoc/HuyGhiDanh", {
      maKhoaHoc: courseID,
      taiKhoan: userName,
    });
  },
};
export default courseAPI;
