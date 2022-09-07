import { theme } from "GlobalStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { Box, Button, Container, Grid, Link, Stack } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import BreadcrumbNav from "../BreadcrumbNav/BreadcrumbNav";
import {
  DetailDesc,
  DetailText,
  DetailTitle,
} from "_Playground/StyledComponents/DetailPage/detail.styled";
import SweetAlert from "react-sweetalert2";
import { useNavigate } from "react-router-dom";
import { postRegisterCourse } from "Slices/courseSlice";

const DetailCover = () => {
  const [openWarning, setOpenWarning] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { course, errorRegisterCourse } = useSelector(
    (state: RootState) => state.courseSlice
  );

  const { userLogin } = useSelector((state: RootState) => state.authSlice);

  const handleConfirm = (courseId: string) => {
    if (!userLogin) {
      setOpenWarning(true);
      return;
    }
    setOpenConfirm(true);
  };

  const handleRegisterCourse = () => {
    if (userLogin && course)
      dispatch(
        postRegisterCourse({
          taiKhoan: userLogin.taiKhoan,
          maKhoaHoc: course?.maKhoaHoc,
        })
      )
        .then((res: any) => {
          console.log(res);
          if (res?.error?.message) setOpenError(true);
          else {
            setOpenSuccess(true);
          }
        })
        .catch((err: any) => console.log(err));
  };
  return (
    <Box
      sx={{
        mt: "5rem",
        bgcolor: "primary.main",
      }}
      py={5}
    >
      <SweetAlert
        show={openWarning}
        icon="warning"
        title="Bạn chưa đăng nhập!!!"
        text="Bạn có muốn đăng nhập?"
        confirmButtonText="Đồng ý"
        cancelButtonText="Hủy bỏ"
        showCancelButton={true}
        onConfirm={() => {
          setOpenWarning(false);
          navigate("/login");
        }}
        didClose={() => {
          setOpenWarning(false);
        }}
      />

      <SweetAlert
        show={openConfirm}
        icon="question"
        title="Bạn có muốn đăng ký!!!"
        confirmButtonText="Đồng ý"
        cancelButtonText="Hủy bỏ"
        showCancelButton={true}
        onConfirm={() => {
          setOpenConfirm(false);
          handleRegisterCourse();
        }}
        didClose={() => {
          setOpenConfirm(false);
        }}
      />

      <SweetAlert
        show={openError}
        icon="error"
        title="Có lỗi xảy ra!!!"
        text={errorRegisterCourse || undefined}
        onConfirm={() => setOpenError(false)}
      />

      <SweetAlert
        show={openSuccess}
        icon="success"
        title="Đăng kí thành công!!!"
        timer={2000}
        onConfirm={() => {
          setOpenSuccess(false);
        }}
        didClose={() => {
          setOpenSuccess(false);
        }}
      />

      <Container>
        <BreadcrumbNav
          secondLevel={course?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          thirdLevel={course?.tenKhoaHoc}
        />
        <Grid container spacing={2}>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DetailTitle color={theme.palette.primary.contrastText}>
              {course?.tenKhoaHoc}
            </DetailTitle>
            <DetailText color={theme.palette.primary.contrastText}>
              Giảng viên: {course?.nguoiTao.hoTen}
            </DetailText>
            <DetailDesc color={theme.palette.primary.contrastText}>
              {course?.moTa}
            </DetailDesc>
            <Link
              href="#description"
              sx={{
                width: "max-content",
                "&:hover>*": {
                  color: "secondary.main",
                  transition: "all 0.4s",
                },
              }}
            >
              <DetailText color={theme.palette.primary.contrastText}>
                [Xem thêm]
              </DetailText>
            </Link>
            <DetailText color={theme.palette.primary.contrastText}>
              Cập nhật lần cuối: {course?.ngayTao}
            </DetailText>
            <Stack direction="row">
              <Stack alignItems="center" mr={5}>
                <VisibilityOutlinedIcon
                  titleAccess="Lượt xem"
                  color="secondary"
                />
                <DetailText color={theme.palette.primary.contrastText}>
                  {course?.luotXem}
                </DetailText>
              </Stack>
              <Stack alignItems="center">
                <HowToRegOutlinedIcon
                  titleAccess="Lượt đăng ký"
                  color="secondary"
                />
                <DetailText color={theme.palette.primary.contrastText}>
                  {course?.soLuongHocVien}
                </DetailText>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src={course?.hinhAnh} alt={course?.hinhAnh} width="100%" />
            <Stack mt={2} alignItems="center">
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "max-content",
                  color: "primary.contrastText",
                }}
                onClick={() => {
                  handleConfirm(course!.maKhoaHoc);
                }}
              >
                Đăng ký
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailCover;
