import React from "react";
import { Navigate } from "react-router-dom";
import { URL } from "./Routes";

const AuthProtected = ({ children }) => {
  if (!localStorage.getItem("authUser")) {
    return <Navigate to={{ pathname: URL.login }} />;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProtected;
