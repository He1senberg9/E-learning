import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Settings } from "Interfaces/slickInterfaces";
import CourseCard from "Components/CourseCard/CourseCard";
import { Box, Container, Typography } from "@mui/material";
import { PrevArrow, NextArrow } from "Components/Arrows/Arrows";
import useWindowSize from "Hooks/useWindowSize";
import { CourseDetail } from "Interfaces/courseInterface";

type Props = {
  courseList: CourseDetail[];
  title?: string;
};

const SlickCourse = ({
  courseList = [],
  title = "Những khoá học nổi bật",
}: Props) => {
  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // Adjust the number of displayed CourseCard (slideToShow) to fit the current Width and length of the list (courseList)
  const { width } = useWindowSize();
  useEffect(() => {
    const length = courseList.length;
    if (width < 600) {
      setSlidesToShow(1);
    } else if (width < 900) {
      setSlidesToShow(length < 2 ? length : 2);
    } else if (width < 1200) {
      setSlidesToShow(length < 3 ? length : 3);
    } else {
      setSlidesToShow(length < 4 ? length : 4);
    }
  }, [width, courseList]);

  return (
    <Container sx={{ marginY: 5, width: "80vw" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Slider {...settings}>
        {courseList?.slice(0, 6).map((item, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <CourseCard course={item} />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default SlickCourse;
