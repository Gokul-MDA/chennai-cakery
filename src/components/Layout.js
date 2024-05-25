import React from "react";
import PropTypes from "prop-types";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};