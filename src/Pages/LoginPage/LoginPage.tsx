import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FieldErrors, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { schemaLogin } from "./schemaLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { postLoginUser } from "Slices/authSlice";
import { LoginValues } from "Interfaces/userInterface";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  CircularProgress,
  Stack,
  FormHelperText,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SweetAlert from "react-sweetalert2";

export const handleMouseDownPassword = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { isLoginLoading, errorLogin } = useSelector(
    (state: RootState) => state.authSlice
  );

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schemaLogin),
  });

  const onSuccess = (values: LoginValues) => {
    dispatch(postLoginUser(values))
      .then((res: any) => {
        if (res?.error?.message) setOpenError(true);
        else {
          setOpenSuccess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const onError = (error: FieldErrors<LoginValues>) => {
    console.log(error);
  };

  return (
    <Container component="main" maxWidth="sm">
      <SweetAlert
        show={openError}
        icon="error"
        title="Có lỗi xảy ra!!!"
        text={errorLogin || undefined}
        onConfirm={() => setOpenError(false)}
      />

      <SweetAlert
        show={openSuccess}
        icon="success"
        title="Đăng nhập thành công!!!"
        timer={2000}
        onConfirm={() => {
          setOpenSuccess(false);
          navigate(-1);
        }}
        didClose={() => {
          setOpenSuccess(false);
          navigate(-1);
        }}
      />

      <Stack alignItems="center">
        <Avatar
          sx={{ margin: "0.5rem", backgroundColor: "error.main" }}
        ></Avatar>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Đăng nhập
        </Typography>

        <form onSubmit={handleSubmit(onSuccess, onError)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="taiKhoan"
            label="Tài khoản"
            autoComplete="taiKhoan"
            autoFocus
            color={errors.taiKhoan && "error"}
            {...register("taiKhoan")}
          />
          {errors.taiKhoan ? (
            <FormHelperText id="taiKhoan-text" filled error>
              {errors.taiKhoan.message}
            </FormHelperText>
          ) : (
            <FormHelperText />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Mật khẩu"
            type={showPassword ? "text" : "password"}
            id="matKhau"
            autoComplete="current-password"
            color={errors.matKhau && "warning"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("matKhau")}
          />
          {errors.matKhau ? (
            <FormHelperText id="matKhau-text" filled error>
              {errors.matKhau.message}
            </FormHelperText>
          ) : (
            <FormHelperText />
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="error" />}
            label="Nhớ tài khoản"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              py: 1,
              backgroundColor: "error.main",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
            type="submit"
          >
            {isLoginLoading ? (
              <CircularProgress color="inherit" size="25px" />
            ) : (
              "ĐĂNG NHẬP"
            )}
          </Button>

          <Stack mt={2} alignItems="flex-end">
            <Link href="#" variant="body2">
              Quên mật khẩu?
            </Link>
            <NavLink
              to={"/register"}
              style={{
                fontWeight: "500",
                fontSize: "0.875rem",
                marginTop: "5px",
              }}
            >
              Bạn chưa có tài khoản? Đăng kí
            </NavLink>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default LoginPage;
