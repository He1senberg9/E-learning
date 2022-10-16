import SlickCourse from "Components/SlickCourse/SlickCourse";
import { Fragment, useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import Media from "./Media/Media";

type Props = {};

const HomePage = (props: Props) => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <Fragment>
      <Carousel />
      <SlickCourse />
      <Media />
    </Fragment>
  );
};

export default HomePage;
