import React from "react";
import {
  Divider,
  Toolbar,
  Typography,
  Stack,
  Button,
  Paper,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PasswordInput from "Components/PasswordInput/PasswordInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";

type Props = {};
type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
const MyPaper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});
const AccountSecurity = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordForm>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {};
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
        <Typography variant="h5">Account</Typography>
        <Typography variant="body1">
          Edit your account settings and change your password here
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          variant="subtitle1"
          sx={{ alignSelf: "flex-start", marginBottom: "5px" }}
        >
          Email:
        </Typography>
        <MyPaper variant="outlined">
          <Typography sx={{ flexGrow: "1", marginLeft: "5px" }}>
            Your email address is <b>sangnguyen1345@gmail.com</b>
          </Typography>
          <Button variant="text">
            <EditIcon />
          </Button>
        </MyPaper>
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
          Change Password:
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
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Stack>
    </>
  );
};

export default AccountSecurity;
export {};
