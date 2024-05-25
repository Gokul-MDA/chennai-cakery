import React from "react";
import Login from "pages/login";
import Home from "pages/home";
import Offer from "pages/offer";
import Menu from "pages/menu";

export const URL = {
  login: "login",
  home: "/home",
  offers: "/offers",
  about: "about",
  menu: "/menu",
  gallery: "gallery",
  contact: "contact",
};

const authProtectedRoutes = [
  { path: URL.home, component: <Home /> },
  { path: URL.offers, component: <Offer /> },
  { path: URL.menu, component: <Menu /> },
];

const publicRoutes = [{ path: URL.login, component: <Login /> }];

export { authProtectedRoutes, publicRoutes };
