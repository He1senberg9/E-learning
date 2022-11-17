import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Typography, Breadcrumbs, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { CourseDetail } from "Interfaces/courseInterface";
type Props = {
  course: CourseDetail | undefined;
};
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "inherit",
  position: "relative",
  zIndex: 1,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
const IconBreadcrumbs = ({ course }: Props) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="›" sx={{ color: "#fff" }}>
        <StyledLink to="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          E-learning
        </StyledLink>
        <StyledLink
          to={`/course-list/${course?.danhMucKhoaHoc.maDanhMucKhoahoc}`}
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {course?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
        </StyledLink>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="primary.light"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {course?.tenKhoaHoc}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};
export default IconBreadcrumbs;
