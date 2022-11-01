import { object, string, ref } from "yup";

const schema = object({
  currentPassword: string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu không được ít hơn 3 ký tự")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự"),
  newPassword: string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu không được ít hơn 3 ký tự")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự"),
  confirmPassword: string()
    .required("Mật khẩu không được để trống")
    .oneOf([ref("newPassword")], "Mật khẩu phải trùng khớp"),
});
export default schema;
// retypePassword: string()
//   .required("Mật khẩu không được để trống")
//   .test("passwords-match", "Mật khẩu phải trùng khớp", function (value) {
//     return this.parent.newPassword === value;
//   }),
