import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Container, Pagination } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "Components/CourseCard/CourseCard";

type Props = {};

const CourseListPage = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let page;
  const changePage = (page: string) => {
    setSearchParams({ page });
  };
  // useEffect(() => {
  // }, [searchParams]);
  useEffect(() => {
    if (searchParams.get("page")) {
      page = searchParams.get("page");
    } else {
      changePage("1");
    }
  }, [searchParams]);

  return (
    <Box>
      <Container sx={{ paddingY: 5 }}>
        <Grid container spacing={5}>
          {[1, 2, 3, 4].map((item) => (
            <Grid
              key={item}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CourseCard />
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
