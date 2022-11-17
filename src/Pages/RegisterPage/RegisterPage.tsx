import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./schema";
import PasswordInput from "Components/PasswordInput/PasswordInput";
import userAPI from "Services/UserAPI";
import { LoginValues, RegisterValues } from "Interfaces/userInterface";
import { dispatch, RootState } from "configStore";
import { postLogin } from "Slices/authSlice";
import { useSelector } from "react-redux";
import CustomizedSnackbars from "Components/CustomizedSnackbars/CustomizedSnackbars";
import axios, { AxiosError } from "axios";

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
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>("");
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSuccess = (values: registerForm) => {
    const payload: RegisterValues = {
      email: values.email,
      hoTen: values.name,
      maNhom: "GP01",
      matKhau: values.password,
      soDT: values.phoneNumber,
      taiKhoan: values.userName,
    };
    postRegister(payload);
  };
  const postRegister = async (payload: RegisterValues) => {
    try {
      const data = await userAPI.postRegister(payload);
      const loginValue: LoginValues = {
        taiKhoan: data.taiKhoan,
        matKhau: data.matKhau,
      };
      dispatch(postLogin(loginValue));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data);
      }
      setIsError(true);
      throw error;
    }
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
        onSubmit={handleSubmit(onSuccess)}
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
        <CustomizedSnackbars
          message={errorMessage}
          open={isError}
          setOpen={setIsError}
          severity="error"
        />
      </Stack>
    </Container>
  );
};

export default RegisterPage;
