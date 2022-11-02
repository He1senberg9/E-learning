import React, { useEffect, useMemo, forwardRef, useState } from "react";
import {
  TextField,
  Divider,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { UserDetail, UserToPut } from "Interfaces/userInterface";
import userAPI from "Services/UserAPI";
import { dispatch } from "configStore";
import { getUserDetail } from "Slices/userDetailSlice";
import CustomizedSnackbars from "Components/CustomizedSnackbars/CustomizedSnackbars";
type Props = { userDetail: UserDetail | null };
type ProfileForm = {
  userName: string;
  name: string;
  phoneNumber: string;
  groupCode: string;
};
type InputName = "userName" | "name" | "phoneNumber" | "groupCode";
const Profile = ({ userDetail }: Props) => {
  const [open, setOpen] = useState(false);
  const mapData = () => {
    const user = {
      userName: userDetail?.taiKhoan,
      name: userDetail?.hoTen,
      phoneNumber: userDetail?.soDT,
      groupCode: userDetail?.maNhom,
    };
    return user;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileForm>({
    defaultValues: useMemo(() => mapData(), [userDetail]),
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const inputs: Array<{
    inputName: InputName;
    label: string;
  }> = [
    {
      inputName: "userName",
      label: "Tên tài khoản",
    },
    {
      inputName: "name",
      label: "Họ và tên",
    },
    {
      inputName: "phoneNumber",
      label: "Số điện thoại",
    },
    {
      inputName: "groupCode",
      label: "Mã nhóm",
    },
  ];

  const onSubmit = (form: ProfileForm) => {
    if (userDetail) {
      const user: UserToPut = {
        taiKhoan: form.userName,
        matKhau: userDetail.matKhau,
        hoTen: form.name,
        soDT: form.phoneNumber,
        maLoaiNguoiDung: "HV",
        maNhom: form.groupCode,
        email: userDetail.email,
      };
      putUser(user);
    }
  };
  const putUser = async (user: UserToPut) => {
    try {
      await userAPI.putUser(user);
      dispatch(getUserDetail());
      setOpen(true);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    reset(mapData());
  }, [userDetail]);
  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          paddingY: 1,
        }}
      >
        <Typography variant="h5">Hồ sơ công khai</Typography>
        <Typography variant="body1">Thêm thông tin về bạn</Typography>
      </Toolbar>
      <Divider />
      <Stack
        alignItems="center"
        component="form"
        sx={{
          paddingY: 3,
          overflowY: "auto",
          "& .MuiTextField-root": { m: 1, width: { xs: "95%", sm: "80%" } },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputs.map(({ inputName, label }) => (
          <TextField
            key={inputName}
            label={label}
            error={!!errors[inputName]}
            helperText={errors[inputName]?.message}
            defaultValue="0"
            disabled={inputName === "userName"}
            {...register(inputName)}
          />
        ))}
        <CustomizedSnackbars
          message="Cập nhật hồ sơ thành công!"
          open={open}
          setOpen={setOpen}
        />
        <Button type="submit" sx={{ mt: 2 }} variant="contained">
          Cập nhật
        </Button>
      </Stack>
    </>
  );
};
export default Profile;
