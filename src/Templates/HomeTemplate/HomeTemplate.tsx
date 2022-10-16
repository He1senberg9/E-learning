import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import { Outlet } from "react-router-dom";
import { getCourseCatalogs } from "Slices/courseSlice";
import { RootState, Dispatch } from "configStore";
type Props = {};

const HomeTemplate = (props: Props) => {
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch(getCourseCatalogs());
  }, []);
  const courseCatalogs = useSelector(
    (state: RootState) => state.course.courseCatalogs
  );
  return (
    <Fragment>
      <Header courseCatalogs={courseCatalogs} />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default HomeTemplate;
