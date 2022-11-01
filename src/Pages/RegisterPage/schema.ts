import { object, string, ref } from "yup";

const schema = object({
  name: string()
    .required("Tên không được để trống")
    .min(3, "Tên không được ít hơn 3 ký tự"),
  userName: string()
    .required("Tên tài khoản không được để trống")
    .min(3, "Tên tài khoản không được ít hơn 3 ký tự")
    .max(12, "Tên tài khoản không được vượt quá 12 ký tự")
    .matches(
      /^[a-zA-Z0-9]{3,12}$/,
      "Tên tài khoản không được chứa ký tự đặc biệt"
    ),
  email: string()
    .required("Email không được để trống")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Email có định dạng không phù hợp"
    ),
  phoneNumber: string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9\-\+]{9,15}$/, "Số điện thoại có định dạng không phù hợp"),
  password: string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu không được ít hơn 3 ký tự")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự"),
  confirmPassword: string()
    .required("Mật khẩu không được để trống")
    .oneOf([ref("password")], "Mật khẩu phải trùng khớp"),
});
export default schema;
