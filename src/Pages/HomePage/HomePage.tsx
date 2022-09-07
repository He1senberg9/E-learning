import { Fragment, useEffect } from "react";
import Banner from "./Banner/Banner";
import CourseList from "./CourseList/CourseList";

type Props = {};

const HomePage = (props: Props) => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <Fragment>
      <Banner />
      <CourseList />
    </Fragment>
  );
};

export default HomePage;
