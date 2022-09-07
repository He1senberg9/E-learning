import { Box } from "@mui/material";
import { Settings } from "Interfaces/slickInterfaces";
import Slider from "react-slick";

import banner_1 from "Assets/img/Banner/banner_1.jpg";
import banner_2 from "Assets/img/Banner/banner_2.jpg";
import CustomPrevArrow from "Components/CustomSlick/CustomPrevArrow";
import CustomNextArrow from "Components/CustomSlick/CustomNextArrow";

type Props = {};

const Banner = (props: Props) => {
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box sx={{ mt: "5rem" }}>
      <Slider {...settings}>
        <Box
          sx={{
            backgroundImage: `url(${banner_1})`,
            backgroundPosition: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "30%",
          }}
        ></Box>
        <Box
          sx={{
            backgroundImage: `url(${banner_2})`,
            backgroundPosition: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            paddingTop: "30%",
          }}
        ></Box>
      </Slider>
    </Box>
  );
};

export default Banner;
