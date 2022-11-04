import React, { SyntheticEvent, useState } from "react";
import {
  Divider,
  Toolbar,
  Typography,
  Stack,
  Button,
  Paper,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PasswordInput from "Components/PasswordInput/PasswordInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { UserDetail } from "Interfaces/userInterface";
import userAPI from "Services/UserAPI";
import CustomizedSnackbars from "Components/CustomizedSnackbars/CustomizedSnackbars";
import { dispatch } from "configStore";
import { getUserDetail } from "Slices/userDetailSlice";

type Props = {
  userDetail: UserDetail | null;
};
type SecurityForm = {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
const MyPaper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});
const AccountSecurity = ({ userDetail }: Props) => {
  const [isEmailChangeSuccess, setIsEmailChangeSuccess] = useState(false);
  const [isPasswordChangeSuccess, setIsPasswordChangeSuccess] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<SecurityForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const validateCurrentPassword = () => {
    if (getValues().currentPassword === userDetail?.matKhau) {
      return true;
    } else {
      setIsPasswordError(true);
      return false;
    }
  };
  const handleUpdateEmail = () => {
    if (!errors.email) {
      putUser(getValues().email, null);
      handleClose();
    }
  };
  const handleUpdatePassword = (event: SyntheticEvent) => {
    event.preventDefault();
    if (
      !(
        errors.currentPassword ||
        errors.newPassword ||
        errors.confirmPassword
      ) &&
      validateCurrentPassword()
    ) {
      putUser(null, getValues().newPassword);
    }
  };
  const putUser = async (email: string | null, password: string | null) => {
    try {
      if (userDetail) {
        await userAPI.putUser({
          taiKhoan: userDetail.taiKhoan,
          matKhau: password ? password : userDetail.matKhau,
          hoTen: userDetail.hoTen,
          soDT: userDetail.soDT,
          maLoaiNguoiDung: "HV",
          maNhom: userDetail.maNhom,
          email: email ? email : userDetail.email,
        });
        dispatch(getUserDetail());
        if (email) {
          setIsEmailChangeSuccess(true);
        } else if (password) {
          setIsPasswordChangeSuccess(true);
        }
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      {" "}
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          paddingY: 1,
        }}
      >
        <Typography variant="h5">Tài khoản</Typography>
        <Typography variant="body1">
          Chỉnh sửa thiết lập tài khoản và thay đổi mật khẩu tại đây
        </Typography>
      </Toolbar>
      <Divider />
      <Stack
        sx={{
          m: "auto",
          paddingY: 2,
          overflowY: "auto",
          width: "80%",
        }}
        alignItems="center"
        component="form"
        onSubmit={(event: SyntheticEvent) => handleUpdatePassword(event)}
      >
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: "flex-start", marginBottom: "5px" }}
        >
          Email:
        </Typography>
        <MyPaper variant="outlined">
          <Typography sx={{ flexGrow: "1", marginLeft: "5px" }}>
            Địa chỉ email của bạn là <b>{userDetail?.email}</b>
          </Typography>
          <Button variant="text" onClick={handleClickOpen}>
            <EditIcon />
          </Button>
        </MyPaper>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Cập nhật email</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Để thay đổi email vui lòng nhập vào ô dưới đây.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              type="email"
              fullWidth
              variant="standard"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Đóng</Button>
            <Button onClick={handleUpdateEmail}>Cập nhật</Button>
          </DialogActions>
        </Dialog>
        <Divider
          sx={{
            margin: "40px 0",
            width: "100%",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: "flex-start", marginBottom: "5px" }}
        >
          Thay đổi mật khẩu:
        </Typography>

        <PasswordInput
          label="Mật khẩu hiện tại"
          helperText={errors.currentPassword?.message}
          error={!!errors.currentPassword}
          register={register("currentPassword")}
        />
        <PasswordInput
          label="Mật khẩu mới"
          helperText={errors.newPassword?.message}
          error={!!errors.newPassword}
          register={register("newPassword")}
        />
        <PasswordInput
          label="Nhập lại mật khẩu mới"
          helperText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword}
          register={register("confirmPassword")}
        />
        <CustomizedSnackbars
          message="Cập nhật email thành công"
          open={isEmailChangeSuccess}
          setOpen={setIsEmailChangeSuccess}
        />
        <CustomizedSnackbars
          message="Cập nhật mật khẩu thành công"
          open={isPasswordChangeSuccess}
          setOpen={setIsPasswordChangeSuccess}
        />
        <CustomizedSnackbars
          message="Mật khẩu hiện tại không chính xác"
          open={isPasswordError}
          setOpen={setIsPasswordError}
          severity="error"
        />
        <Button type="submit" variant="contained">
          Cập nhật
        </Button>
      </Stack>
    </>
  );
};

export default AccountSecurity;
export {};
