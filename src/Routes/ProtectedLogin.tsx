import React from "react";
import { RootState } from "configStore";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
type Props = {
  children: JSX.Element;
};

const ProtectedLogin = ({ children }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedLogin;
