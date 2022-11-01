import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Container, Pagination } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "Components/CourseCard/CourseCard";
import { CourseDetail } from "Interfaces/courseInterface";
import courseAPI from "Services/CourseAPI";

type Props = {};

const CourseListPage = (props: Props) => {
  const [courseList, setCourseList] = useState<CourseDetail[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let page;
  const changePage = (page: string) => {
    setSearchParams({ page });
  };
  useEffect(() => {
    if (searchParams.get("page")) {
      page = searchParams.get("page");
      fetchData(page as string);
    } else {
      changePage("1");
    }
  }, [searchParams]);
  const fetchData = async (page: string) => {
    try {
      const data = await courseAPI.getCourseListByPage(page);
      setCourseList(data.items);
    } catch (error) {
      throw error;
    }
  };
  return (
    <Box>
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
        <Pagination
          sx={{
            marginTop: 5,
            "& .MuiPagination-ul": {
              justifyContent: "center",
            },
          }}
          count={10}
          color="primary"
          siblingCount={3}
          size="large"
          page={page}
          onChange={(event, page) => changePage(page.toString())}
        />
      </Container>
    </Box>
  );
};

export default CourseListPage;
