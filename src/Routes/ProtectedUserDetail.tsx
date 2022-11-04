import React from "react";
import { Box } from "@mui/material";
import { RootState } from "configStore";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
type Props = {
  children: JSX.Element;
};

const ProtectedUserDetail = ({ children }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedUserDetail;
