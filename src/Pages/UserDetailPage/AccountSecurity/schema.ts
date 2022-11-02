import { object, string, ref } from "yup";
import store from "configStore";
// const password = store.getState().userDetail.userDetail?.matKhau as string;
const schema = object({
  email: string()
    .required("Email không được để trống")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Email có định dạng không phù hợp"
    ),
  currentPassword: string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu không được ít hơn 3 ký tự")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự"),
  // .oneOf([password], "Mật khẩu hiện tại không đúng"),
  newPassword: string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật khẩu không được ít hơn 3 ký tự")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự"),
  confirmPassword: string()
    .required("Mật khẩu không được để trống")
    .oneOf([ref("newPassword")], "Mật khẩu phải trùng khớp"),
});
// console.log(store.getState().userDetail.userDetail?.matKhau);
export default schema;
// retypePassword: string()
//   .required("Mật khẩu không được để trống")
//   .test("passwords-match", "Mật khẩu phải trùng khớp", function (value) {
//     return this.parent.newPassword === value;
//   }),
