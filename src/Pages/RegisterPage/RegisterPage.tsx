import React from "react";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./schema";
import PasswordInput from "Components/PasswordInput/PasswordInput";

type Props = {};
type registerForm = {
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};
type inputName = "name" | "userName" | "email" | "phoneNumber";
const inputs: Array<{ inputName: inputName; label: string }> = [
  { inputName: "name", label: "Họ và tên" },
  {
    inputName: "userName",
    label: "Tên tài khoản",
  },
  {
    inputName: "email",
    label: "Email",
  },
  {
    inputName: "phoneNumber",
    label: "Số điện thoại",
  },
];
const RegisterPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  return (
    <Container sx={{ p: 5 }}>
      <Stack
        component="form"
        alignItems="center"
        sx={{
          maxWidth: "500px",
          marginX: "auto",
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
      >
        <Typography>Đăng ký tài khoản E-learning của bạn</Typography>
        <Divider sx={{ marginY: 3, width: "100%" }} />
        {inputs.map(({ inputName, label }) => (
          <TextField
            label={label}
            error={!!errors[inputName]}
            helperText={errors[inputName]?.message}
            {...register(inputName)}
          />
        ))}
        <PasswordInput
          width="80%"
          label="Mật khẩu"
          error={!!errors.password}
          helperText={errors.password?.message}
          register={register("password")}
        />
        <PasswordInput
          width="80%"
          label="Nhập lại mật khẩu"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          register={register("confirmPassword")}
        />
        <Button sx={{ marginY: 2 }} type="submit" variant="contained">
          Đăng ký
        </Button>
        <Link to="/login">Bạn đã có tài khoản? Đăng nhập</Link>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
