import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CourseCard from "Components/CourseCard/CourseCard";

type Props = {};
const StyledBox = styled(Box)(({ theme }) => ({
  padding: "25px",
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
}));
const CourseListByCatalogPage = (props: Props) => {
  return (
    <Box>
      <StyledBox>
        <Container>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Lập Trình Front-end
          </Typography>
        </Container>
      </StyledBox>
      <Container sx={{ paddingY: 5 }}>
        <Grid container spacing={5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <Grid
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
      </Container>
    </Box>
  );
};

export default CourseListByCatalogPage;
