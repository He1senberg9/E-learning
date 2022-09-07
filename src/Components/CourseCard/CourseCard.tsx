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

const OverflowTypo = styled(Typography)({
  display: "-webkit-box",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});
export default function CourseCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mega.com.vn/media/news/1507_hinh-nen-luffy-gear-5-one-piece-cuc-ngau8.jpg"
          alt="luffy-gear5"
        />
        <CardContent sx={{ height: "150px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
          >
            Luffy
          </Typography>
          <OverflowTypo variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica with over
            6,000 species, ranging across all continents except Antar Antarctica
          </OverflowTypo>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ backgroundColor: "divider", justifyContent: "space-evenly" }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary", transform: "translateY(1px)" }}
        >
          6.3k views
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
}
