import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { Box, Container } from "@mui/material";
import {
  DetailText,
  DetailTitle,
} from "_Playground/StyledComponents/DetailPage/detail.styled";

const DetailOverView = () => {
  const { course } = useSelector((state: RootState) => state.courseSlice);
  return (
    <Box id="description" bgcolor="paper.main" py={5}>
      <Container>
        <DetailTitle style={{ textAlign: "center" }}>Giới thiệu</DetailTitle>
        <DetailText>{course?.moTa}</DetailText>
      </Container>
    </Box>
  );
};

export default DetailOverView;
