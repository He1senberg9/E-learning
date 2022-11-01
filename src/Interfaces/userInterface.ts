import { Course } from "./courseInterface";
export interface LoginValues {
  taiKhoan: string;
  matKhau: string;
}

export interface RegisterValues {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  email: string;
  maNhom?: string;
  passwordConfirm?: string;
}
export interface User {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}
export interface UserDetail {
  chiTietKhoaHocGhiDanh: Course[];
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  email: string;
}
export type UserState = {
  user: User | null;
  isUserLoading: boolean;
  userError: undefined | string;
};
export interface UserDetailState {
  userDetail: UserDetail | null;
  isUserDetailLoading: boolean;
  userDetailError: undefined | string;
}
