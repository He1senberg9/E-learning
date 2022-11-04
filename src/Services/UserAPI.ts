import {
  LoginValues,
  RegisterValues,
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
  postRegister: (payload: RegisterValues) => {
    return axiosClient.post<RegisterValues>("QuanLyNguoiDung/DangKy", {
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
