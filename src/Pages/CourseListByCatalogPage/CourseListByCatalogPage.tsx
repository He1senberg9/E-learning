import React, { useEffect, useState } from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "Components/CourseCard/CourseCard";
import { CourseDetail } from "Interfaces/courseInterface";
import courseAPI from "Services/CourseAPI";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "configStore";

type Props = {};
const StyledBox = styled(Box)(({ theme }) => ({
  padding: "25px",
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
}));
const CourseListByCatalogPage = (props: Props) => {
  const { catalogID = "" } = useParams();
  const [courseList, setCourseList] = useState<CourseDetail[]>([]);
  const [title, setTitle] = useState<string | undefined>("");
  const courseCatalogs = useSelector(
    (state: RootState) => state.course.courseCatalogs
  );
  useEffect(() => {
    fetchData();
    const title = courseCatalogs.find(
      (item) => item.maDanhMuc === catalogID
    )?.tenDanhMuc;
    setTitle(title);
  }, [catalogID]);
  const fetchData = async () => {
    try {
      const data = await courseAPI.getCourseListByCatalog(catalogID);
      setCourseList(data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Box>
      <StyledBox>
        <Container>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            {title}
          </Typography>
        </Container>
      </StyledBox>
      <Container sx={{ paddingY: 5 }}>
        <Grid container spacing={5}>
          {courseList.map((item) => (
            <Grid
              key={item.maKhoaHoc}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CourseCard course={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseListByCatalogPage;
