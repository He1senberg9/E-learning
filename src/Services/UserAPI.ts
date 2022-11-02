import {
  LoginValues,
  User,
  UserDetail,
  UserToPut,
} from "Interfaces/userInterface";
import axiosClient from "./axiosClient";

const userAPI = {
  postLogin: (payload: LoginValues) => {
    return axiosClient.post<User>("QuanLyNguoiDung/DangNhap", {
      ...payload,
    });
  },
  getUserDetail: () => {
    return axiosClient.post<UserDetail>("QuanLyNguoiDung/ThongTinNguoiDung");
  },
  putUser: (user: UserToPut) => {
    return axiosClient.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      ...user,
    });
  },
};
export default userAPI;
