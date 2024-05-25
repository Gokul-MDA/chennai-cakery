import React from "react";
import { Navigate } from "react-router-dom";
import { URL } from "./Routes";
import Layout from "components/Layout";
import PropTypes from "prop-types";

const AuthProtected = ({ children }) => {
  if (!localStorage.getItem("authUser")) {
    return <Navigate to={{ pathname: URL.login }} />;
  }
  return <Layout>{children}</Layout>;
};

export default AuthProtected;

AuthProtected.propTypes = {
  children: PropTypes.node,
};
