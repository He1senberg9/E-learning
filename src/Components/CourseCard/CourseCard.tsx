import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardActions,
  Divider,
  Rating,
  Stack,
  styled,
} from "@mui/material";
import { CourseDetail } from "Interfaces/courseInterface";
import { useNavigate } from "react-router-dom";
type Props = {
  course: CourseDetail;
};
const Title = styled(Typography)({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});
const Paragraph = styled(Typography)({
  display: "-webkit-box",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

const CourseCard = ({ course }: Props) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 400, width: "100%" }}>
      <CardActionArea
        onClick={() => {
          navigate(`/course-detail/${course.maKhoaHoc}`);
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={course.hinhAnh}
          alt="course-img"
        />
        <CardContent sx={{ height: "150px" }}>
          <Title gutterBottom variant="h6">
            {course.tenKhoaHoc}
          </Title>
          <Paragraph variant="body2" color="text.secondary">
            {course.moTa}
          </Paragraph>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ backgroundColor: "divider", justifyContent: "space-evenly" }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", transform: "translateY(1px)" }}
        >
          {course.luotXem} views
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Stack spacing={1}>
          <Rating
            sx={{ justifyContent: "center" }}
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Stack>
      </CardActions>
    </Card>
  );
};
export default CourseCard;
