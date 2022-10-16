import React from "react";
import CourseDescription from "./CourseDescription/CourseDescription";
import CourseMain from "./CourseMain/CourseMain";

type Props = {};

const CourseDetailPage = (props: Props) => {
  return (
    <>
      <CourseMain />
      <CourseDescription />
    </>
  );
};

export default CourseDetailPage;
