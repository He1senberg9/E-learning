import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Settings } from "Interfaces/slickInterfaces";
import CourseCard from "Components/CourseCard/CourseCard";
import { Box, Container, Typography } from "@mui/material";
import { PrevArrow, NextArrow } from "Components/Arrows/Arrows";
import useWindowSize from "Hooks/useWindowSize";

type Props = {};

const SlickCourse = (props: Props) => {
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
  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 600) {
      setSlidesToShow(1);
    } else if (width < 900) {
      setSlidesToShow(2);
    } else if (width < 1200) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  }, [width]);

  return (
    <Container sx={{ marginY: 5, width: "80vw" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Khóa học mới nhất
      </Typography>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <CourseCard />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default SlickCourse;
