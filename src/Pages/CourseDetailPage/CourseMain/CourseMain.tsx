import React from "react";
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
type Props = {};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CourseMain = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBox>
        <IconBreadcrumbs />
        <Container>
          <Grid container>
            <GridItem1 xs={12} md={8}>
              <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
                Lập Trình Front End
              </Typography>
              <Typography variant="subtitle1" sx={{}}>
                Giảng viên: Lê Quang Anh
              </Typography>
              <Box
                sx={{
                  margin: "auto",
                  width: "300px",
                  display: { xs: "block", md: "none" },
                }}
              >
                <img
                  width="100%"
                  src="https://elearningnew.cybersoft.edu.vn/hinhanh/angular-js-6-123_gp01.jpg"
                  alt=""
                />
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
                  label="70"
                  variant="outlined"
                  color="primary"
                  icon={<VisibilityIcon />}
                />
                <Chip
                  label="59"
                  variant="outlined"
                  color="success"
                  icon={<HowToRegIcon />}
                  sx={{ ml: 1 }}
                />
                <StyledButton
                  variant="outlined"
                  size="medium"
                  sx={{ ml: 8 }}
                  onClick={handleClickOpen}
                >
                  Đăng ký
                </StyledButton>
              </Box>
            </GridItem1>
            <GridItem2 xs={0} md={4}>
              <img
                width="100%"
                src="https://elearningnew.cybersoft.edu.vn/hinhanh/angular-js-6-123_gp01.jpg"
                alt=""
              />
            </GridItem2>
          </Grid>
        </Container>
      </StyledBox>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Bạn có muốn đăng ký khóa học ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Lập trình Front-end</DialogContentText>
          <DialogContentText>Giảng viên: Lê Quang Anh</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Không</Button>
          <Button onClick={handleClose}>Đăng ký</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseMain;
