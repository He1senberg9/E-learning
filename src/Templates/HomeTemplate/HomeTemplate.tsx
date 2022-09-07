import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default HomeTemplate;
