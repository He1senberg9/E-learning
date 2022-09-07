import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useParams } from "react-router-dom";
import { getCourseInfo } from "Slices/courseSlice";
import DetailCover from "./DetailCover/DetailCover";
import DetailOverView from "./DetailOverview/DetailOverView";
import DetailRelated from "./DetailRelated/DetailRelated";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";

const DetailPage = () => {
  const { courseId } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { isCourseLoading } = useSelector(
    (state: RootState) => state.courseSlice
  );

  useEffect(() => {
    document.title = "Chi tiết";
  }, []);

  useEffect(() => {
    if (courseId) dispatch(getCourseInfo(courseId));

    return () => {};
  }, [courseId, dispatch]);

  if (isCourseLoading) {
    return <LoadingLazy />;
  }

  return (
    <Fragment>
      <DetailCover />
      <DetailOverView />
      <DetailRelated />
    </Fragment>
  );
};

export default DetailPage;
