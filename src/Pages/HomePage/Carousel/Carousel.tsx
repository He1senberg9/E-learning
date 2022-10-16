import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Settings } from "Interfaces/slickInterfaces";
import Slider from "react-slick";
import banner1 from "Assets/img/Banner/banner_1.jpg";
import banner2 from "Assets/img/Banner/banner_2.jpg";
import banner3 from "Assets/img/Banner/banner_3.jpg";
import banner4 from "Assets/img/Banner/banner_4.jpg";
import banner5 from "Assets/img/Banner/banner_5.jpg";
import banner6 from "Assets/img/Banner/banner_6.jpg";
type Props = {};
const listBanner: string[] = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
];
const Carousel = (props: Props) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box>
      <Slider {...settings}>
        {listBanner.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${item})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "100% 100%",
              height: "30vw",
            }}
          ></Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
