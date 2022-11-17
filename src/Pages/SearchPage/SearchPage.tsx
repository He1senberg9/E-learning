import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "Components/CourseCard/CourseCard";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { CourseDetail } from "Interfaces/courseInterface";

type Props = {};

const SearchPage = (props: Props) => {
  const [matchedCourseList, setMatchedCourseList] = useState<CourseDetail[]>(
    []
  );
  const key = useSelector((state: RootState) => state.searchKey.value);
  const { courseList } = useSelector((state: RootState) => state.course);
  useEffect(() => {
    const list = courseList.filter((item) => {
      if (item.tenKhoaHoc.toUpperCase().search(key.toUpperCase()) === -1) {
        return false;
      } else {
        return true;
      }
    });
    setMatchedCourseList(list);
  }, [key]);
  return (
    <Box>
      <Container sx={{ paddingY: 5 }}>
        <Grid container spacing={5}>
          {matchedCourseList.length === 0 && (
            <Typography variant="h5" sx={{ marginBottom: "60vh" }}>
              Không tìm thấy khóa học nào phù hợp!
            </Typography>
          )}
          {matchedCourseList.map((item) => (
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

export default SearchPage;
