import { object, string } from "yup";

const schema = object({
  name: string()
    .required("Tên không được để trống")
    .min(3, "Tên không được ít hơn 3 ký tự"),
  email: string()
    .required("Email không được để trống")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Email có định dạng không phù hợp"
    ),
  phoneNumber: string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9\-\+]{9,15}$/, "Số điện thoại có định dạng không phù hợp"),
});
export default schema;
