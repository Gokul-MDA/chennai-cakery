import React from "react";
import Login from "../pages/login";
import Home from "../pages/home";

export const URL = {
  login: "login",
  home: "/home",
  about: "about",
  menu: "menu",
  gallery: "gallery",
  contact: "contact",
};

const authProtectedRoutes = [{ path: URL.home, component: <Home /> }];

const publicRoutes = [{ path: URL.login, component: <Login /> }];

export { authProtectedRoutes, publicRoutes };
