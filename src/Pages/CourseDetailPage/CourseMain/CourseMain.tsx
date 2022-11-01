import React, { useEffect, useState } from "react";
import { Box, Chip, Container, Rating, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import IconBreadcrumbs from "Components/IconBreadcrumbs/IconBreadcrumbs";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import {
  StyledBox,
  GridItem1,
  GridItem2,
  StyledButton,
} from "./CourseMain.styled";
import { CourseDetail } from "Interfaces/courseInterface";
import { useSelector } from "react-redux";
import { dispatch, RootState } from "configStore";
import { getUserDetail } from "Slices/userDetailSlice";
import courseAPI from "Services/CourseAPI";
import { useNavigate } from "react-router-dom";
type Props = {
  course: CourseDetail | undefined;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CourseMain = ({ course }: Props) => {
  const navigate = useNavigate();
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
  const [openUnregisterDialog, setOpenUnregisterDialog] = useState(false);
  const [openSuccessUnregisterDialog, setOpenSuccessUnregisterDialog] =
    useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openFailDialog, setOpenFailDialog] = useState(false);
  // handle open
  const handleClickOpenRegisterDialog = () => setOpenRegisterDialog(true);
  const handleClickOpenUnregisterDialog = () => setOpenUnregisterDialog(true);
  const handleClickOpenSuccessUnregisterDialog = () =>
    setOpenSuccessUnregisterDialog(true);
  const handleClickOpenSuccessDialog = () => setOpenSuccessDialog(true);
  const handleClickOpenFailDialog = () => setOpenFailDialog(true);
  // handle close
  const handleRegisterDialogClose = () => setOpenRegisterDialog(false);
  const handleUnregisterDialogClose = () => setOpenUnregisterDialog(false);
  const handleSuccessUnregisterDialogClose = () => {
    dispatch(getUserDetail());
    setOpenSuccessUnregisterDialog(false);
  };
  const handleSuccessDialogClose = () => {
    dispatch(getUserDetail());
    setOpenSuccessDialog(false);
  };
  const handleFailDialogClose = () => setOpenFailDialog(false);
  // ----
  const handleRegister = () => {
    handleRegisterDialogClose();
    if (course && userDetail) {
      postCourseRegister(course.maKhoaHoc, userDetail.taiKhoan);
    } else {
      handleClickOpenFailDialog();
    }
  };
  const handleUnregister = () => {
    if (course && userDetail) {
      postCourseUnregister(course.maKhoaHoc, userDetail.taiKhoan);
    }
    handleUnregisterDialogClose();
  };
  const postCourseRegister = async (courseID: string, userName: string) => {
    try {
      await courseAPI.postCourseRegister(courseID, userName);
      handleClickOpenSuccessDialog();
    } catch (error) {
      throw error;
    }
  };
  const postCourseUnregister = async (courseID: string, userName: string) => {
    try {
      await courseAPI.postCourseUnRegister(courseID, userName);
      handleClickOpenSuccessUnregisterDialog();
    } catch (error) {
      throw error;
    }
  };
  const { userDetail } = useSelector((state: RootState) => state.userDetail);
  useEffect(() => {
    dispatch(getUserDetail());
  }, []);
  const [isRegister, setIsRegister] = useState(false);
  useEffect(() => {
    const flag = !!userDetail?.chiTietKhoaHocGhiDanh.find(
      (item) => item.maKhoaHoc === course?.maKhoaHoc
    );
    setIsRegister(flag);
  }, [course, userDetail]);
  return (
    <>
      <StyledBox>
        <IconBreadcrumbs course={course} />
        <Container>
          <Grid container>
            <GridItem1 xs={12} md={8}>
              <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
                {course?.tenKhoaHoc}
              </Typography>
              <Typography variant="subtitle1" sx={{}}>
                {`Giảng viên: ${course?.nguoiTao.hoTen}`}
              </Typography>
              <Box
                sx={{
                  margin: "auto",
                  width: "300px",
                  display: { xs: "block", md: "none" },
                }}
              >
                <img width="100%" src={course?.hinhAnh} alt="course-img" />
              </Box>
              <Rating
                sx={{ margin: { xs: "auto", md: "0" } }}
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
              <Box>
                <Chip
                  label={course?.luotXem}
                  variant="outlined"
                  color="primary"
                  icon={<VisibilityIcon />}
                />
                <Chip
                  label={course?.soLuongHocVien}
                  variant="outlined"
                  color="success"
                  icon={<HowToRegIcon />}
                  sx={{ marginX: 1 }}
                />
                <StyledButton
                  variant="outlined"
                  size="medium"
                  sx={{ m: 0 }}
                  onClick={handleClickOpenRegisterDialog}
                  disabled={isRegister}
                >
                  Đăng ký
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  size="medium"
                  sx={{ ml: 1 }}
                  onClick={handleClickOpenUnregisterDialog}
                  disabled={!isRegister}
                >
                  Huỷ Ghi Danh
                </StyledButton>
              </Box>
            </GridItem1>
            <GridItem2 xs={0} md={4}>
              <img width="100%" src={course?.hinhAnh} alt="course-img" />
            </GridItem2>
          </Grid>
        </Container>
      </StyledBox>

      <Dialog
        open={openRegisterDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleRegisterDialogClose}
      >
        <DialogTitle>Bạn có muốn đăng ký khóa học ?</DialogTitle>
        <DialogContent>
          <DialogContentText>{course?.tenKhoaHoc}</DialogContentText>
          <DialogContentText>{`Giảng viên: ${course?.nguoiTao.hoTen}`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegisterDialogClose}>Đóng</Button>
          <Button onClick={handleRegister}>Đăng ký</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openSuccessDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleSuccessDialogClose}
      >
        <DialogTitle>Đăng ký khóa học thành công!!!</DialogTitle>
        <DialogActions>
          <Button onClick={handleSuccessDialogClose}>Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openFailDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleFailDialogClose}
      >
        <DialogTitle>Đăng ký khóa học thất bại!!!</DialogTitle>
        <DialogContent>
          <DialogContentText>Bạn chưa đăng nhập!</DialogContentText>
          <DialogContentText>
            Hãy đăng nhập hoặc đăng ký tài khoản e-learning mới để đăng ký khóa
            học của riêng bạn
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFailDialogClose}>Đóng</Button>
          <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
          <Button onClick={() => navigate("/register")}>Dăng ký </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openUnregisterDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleUnregisterDialogClose}
      >
        <DialogTitle>Bạn có muốn hủy ghi danh khóa học ?</DialogTitle>
        <DialogContent>
          <DialogContentText>{course?.tenKhoaHoc}</DialogContentText>
          <DialogContentText>{`Giảng viên: ${course?.nguoiTao.hoTen}`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUnregisterDialogClose}>Đóng</Button>
          <Button onClick={handleUnregister}>Huỷ ghi danh</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openSuccessUnregisterDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleSuccessUnregisterDialogClose}
      >
        <DialogTitle>Đã hủy ghi danh khóa học!!!</DialogTitle>
        <DialogActions>
          <Button onClick={handleSuccessUnregisterDialogClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseMain;
