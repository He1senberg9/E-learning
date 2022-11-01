import { object, string } from "yup";

const schema = object({
  taiKhoan: string()
    .required("Tên tài khoản không được để trống")
    .min(3, "Tên tài khoản không được ít hơn 3 ký tự")
    .max(12, "Tên tài khoản không được vượt quá 12 ký tự")
    .matches(
      /^[a-zA-Z0-9]{3,12}$/,
      "Tên tài khoản không được chứa ký tự đặc biệt"
    ),
  matKhau: string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu không được ít hơn 3 ký tự")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự"),
});
export default schema;
