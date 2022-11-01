import { Password } from "@mui/icons-material";
import { LoginValues, User, UserDetail } from "Interfaces/userInterface";
import axiosClient from "./axiosClient";

const userAPI = {
  login: (payload: LoginValues) => {
    return axiosClient.post<User>("QuanLyNguoiDung/DangNhap", {
      ...payload,
    });
  },
  getUserDetail: () => {
    return axiosClient.post<UserDetail>("QuanLyNguoiDung/ThongTinNguoiDung");
  },
};
export default userAPI;
