import { Fragment, useEffect, useState } from "react";
import SlickCourse from "Components/SlickCourse/SlickCourse";
import Carousel from "./Carousel/Carousel";
import Media from "./Media/Media";
import courseAPI from "Services/CourseAPI";
import { CourseDetail } from "Interfaces/courseInterface";

type Props = {};

const HomePage = (props: Props) => {
  const [courseList, setCourseList] = useState<CourseDetail[]>([]);
  useEffect(() => {
    document.title = "Trang chủ";
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await courseAPI.getCourseList();
      setCourseList(data);
    } catch (error) {
      throw error;
    }
  };
  return (
    <Fragment>
      <Carousel />
      <SlickCourse courseList={courseList} />
      <Media />
    </Fragment>
  );
};

export default HomePage;
