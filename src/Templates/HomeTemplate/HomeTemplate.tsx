import React, { Fragment, useEffect, useState } from "react";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCourseCatalogs } from "Slices/courseSlice";
import { dispatch, RootState } from "configStore";
type Props = {};

const HomeTemplate = (props: Props) => {
  const courseCatalogs = useSelector(
    (state: RootState) => state.course.courseCatalogs
  );
  useEffect(() => {
    dispatch(getCourseCatalogs());
  }, []);

  return (
    <Fragment>
      <Header courseCatalogs={courseCatalogs} />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default HomeTemplate;
