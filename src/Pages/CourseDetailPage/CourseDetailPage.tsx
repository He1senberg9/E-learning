import SlickCourse from "Components/SlickCourse/SlickCourse";
import { CourseDetail } from "Interfaces/courseInterface";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseAPI from "Services/CourseAPI";
import CourseDescription from "./CourseDescription/CourseDescription";
import CourseMain from "./CourseMain/CourseMain";

type Props = {};

const CourseDetailPage = (props: Props) => {
  const { courseID = "" } = useParams();
  const [courseDetail, setCourseDetail] = useState<CourseDetail>();
  const [courseList, setCourseList] = useState<CourseDetail[]>([]);

  useEffect(() => {
    fetchData();
  }, [courseID]);
  const fetchData = async () => {
    try {
      const courseDetail = await courseAPI.getCourseDetail(courseID);
      setCourseDetail(courseDetail);
      const courseList = await courseAPI.getCourseListByCatalog(
        courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc
      );
      setCourseList(courseList);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <CourseMain course={courseDetail} />
      <CourseDescription description={courseDetail?.moTa} />
      <SlickCourse courseList={courseList} title="Những khóa học liên quan" />
    </>
  );
};

export default CourseDetailPage;
