import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "Components/PasswordInput/PasswordInput";
import { LoginValues } from "Interfaces/userInterface";
import { postLogin } from "Slices/authSlice";
import { dispatch, RootState } from "configStore";
import { useSelector } from "react-redux";
import CustomizedSnackbars from "Components/CustomizedSnackbars/CustomizedSnackbars";

type Props = {};

const LoginPage = (props: Props) => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = (value: LoginValues) => {
    dispatch(postLogin(value)).then((res: any) => {
      if (res?.error?.message) {
        setIsError(true);
      }
    });
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Container sx={{ p: 5 }}>
      <Stack
        component="form"
        alignItems="center"
        sx={{
          maxWidth: "500px",
          marginX: "auto",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography>Đăng nhập vào tài khoản E-learning của bạn</Typography>
        <Divider sx={{ marginY: 3, width: "100%" }} />
        <TextField
          sx={{ m: 1, width: "80%" }}
          label="Tên tài khoản"
          error={!!errors.taiKhoan}
          helperText={errors.taiKhoan?.message}
          {...register("taiKhoan")}
        />
        <PasswordInput
          label="Mật khẩu"
          width="80%"
          helperText={errors.matKhau?.message}
          error={!!errors.matKhau}
          register={register("matKhau")}
        />
        <Button sx={{ marginY: 2 }} type="submit" variant="contained">
          Đăng nhập
        </Button>
        <Link to="/register">Bạn chưa có tài khoản? Đăng ký</Link>
        <CustomizedSnackbars
          message="Đăng nhập thất bại"
          open={isError}
          setOpen={setIsError}
          severity="error"
        />
      </Stack>
    </Container>
  );
};

export default LoginPage;
