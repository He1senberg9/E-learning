import { useState } from "react";

import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Stack,
  InputBase,
  Paper,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "Components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "configStore";
import { logoutUser } from "Slices/authSlice";
import SearchIcon from "@mui/icons-material/Search";
import SweetAlert from "react-sweetalert2";
import { FieldErrors, useForm } from "react-hook-form";

const Header = () => {
  const dispatch = useDispatch<any>();
  const { userLogin } = useSelector((state: RootState) => state.authSlice);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      searchText: "",
    },
    mode: "onSubmit",
  });

  const onSuccess = (values: any) => {};
  const onError = (errors: FieldErrors<{ searchText: string }>) => {
    console.log(errors);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    setOpenSuccess(true);
  };

  return (
    <AppBar position="sticky" sx={{ height: "5rem", bgcolor: "primary.dark" }}>
      <SweetAlert
        show={openConfirm}
        icon="question"
        title="Bạn muốn đăng xuất?"
        confirmButtonText="Đồng ý"
        cancelButtonText="Hủy bỏ"
        showCancelButton={true}
        onConfirm={() => {
          handleLogout();
          setOpenSuccess(true);
        }}
        didClose={() => {
          setOpenConfirm(false);
        }}
      />

      <SweetAlert
        show={openSuccess}
        icon="success"
        title="Đăng xuất thành công!!!"
        confirmButtonText="Đồng ý"
        timer={2000}
        onConfirm={() => {
          setOpenSuccess(false);
        }}
        didClose={() => {
          setOpenSuccess(false);
          navigate("/");
        }}
      />

      <Container sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Logo />
          </Box>

          <Stack direction="row">
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: 400,
                mr: 3,
              }}
              onSubmit={handleSubmit(onSuccess, onError)}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Tìm kiếm"
                {...register("searchText")}
              />
              <IconButton sx={{ p: "10px" }} type="submit">
                <SearchIcon />
              </IconButton>
            </Paper>

            {userLogin ? (
              <Stack direction="row">
                <NavLink to={"/user"}>
                  <Stack direction="row">
                    <IconButton sx={{ p: 0 }}>
                      <Avatar
                        alt="https://i.pravatar.cc"
                        src="https://i.pravatar.cc"
                      />
                    </IconButton>

                    <Typography
                      sx={{
                        m: 2,
                        color: "primary.contrastText",
                        "&:hover": {
                          color: "secondary.light",
                        },
                      }}
                    >
                      {userLogin.hoTen}
                    </Typography>
                  </Stack>
                </NavLink>

                <Typography
                  sx={{
                    m: 2,
                    color: "primary.contrastText",
                    cursor: "pointer",
                    transition: "all 0.4s",
                    "&:hover": {
                      color: "secondary.light",
                    },
                  }}
                  onClick={() => {
                    setOpenConfirm(true);
                  }}
                >
                  Đăng xuất
                </Typography>
              </Stack>
            ) : (
              <Stack direction="row">
                <NavLink to={"/login"}>
                  <Typography
                    sx={{
                      m: 2,
                      color: "primary.contrastText",
                      transition: "all 0.4s",
                      "&:hover": {
                        color: "secondary.light",
                      },
                    }}
                  >
                    Đăng nhập
                  </Typography>
                </NavLink>
                <NavLink to={"/register"}>
                  <Typography
                    sx={{
                      m: 2,
                      color: "primary.contrastText",
                      transition: "all 0.4s",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    Đăng ký
                  </Typography>
                </NavLink>
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
