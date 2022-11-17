import { Fragment, useEffect, useState } from "react";
import SlickCourse from "Components/SlickCourse/SlickCourse";
import Carousel from "./Carousel/Carousel";
import Media from "./Media/Media";
import { useSelector } from "react-redux";
import { RootState } from "configStore";

type Props = {};

const HomePage = (props: Props) => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  const { courseList } = useSelector((state: RootState) => state.course);
  return (
    <Fragment>
      <Carousel />
      <SlickCourse courseList={courseList} />
      <Media />
    </Fragment>
  );
};

export default HomePage;
