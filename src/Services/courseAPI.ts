import axiosClient from "./axiosClient";
import { CourseCatalog } from "Interfaces/courseInterface";

const courseAPI = {
  getCourseCatalogs: () => {
    return axiosClient.get<CourseCatalog[]>("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
};
export default courseAPI;
