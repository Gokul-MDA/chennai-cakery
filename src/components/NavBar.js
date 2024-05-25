import React from "react";
import Cart from "assets/icons/cart.png";
import User from "assets/icons/user.png";
import Location from "assets/icons/Location.png";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { URL } from "utils/Routes";

const NavBar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="flex justify-between px-14 align-middle h-[50px] items-center">
      <div className="w-1/4">
        <h3 className="font-poppins font-semibold text-sm">
          Chennai
          <span className="text-Primary-Rosecus font-poppins font-semibold text-sm">
            Cakery
          </span>
        </h3>
      </div>
      <div className="flex w-1/4 justify-between">
        <NavLink
          to={URL.home}
          className={classNames("font-poppins text-sm", {
            "text-Primary-Rosecus": pathName === URL.home,
            "text-Layout-600": pathName !== URL.home,
          })}
        >
          Home
        </NavLink>
        <NavLink
          to={URL.about}
          className={classNames("font-poppins text-sm", {
            "text-Primary-Rosecus": pathName === URL.about,
            "text-Layout-600": pathName !== URL.about,
          })}
        >
          About
        </NavLink>
        <NavLink
          to={URL.menu}
          className={classNames("font-poppins text-sm", {
            "text-Primary-Rosecus": pathName === URL.menu,
            "text-Layout-600": pathName !== URL.menu,
          })}
        >
          Menu
        </NavLink>
        <NavLink
          to={URL.gallery}
          className={classNames("font-poppins text-sm", {
            "text-Primary-Rosecus": pathName === URL.gallery,
            "text-Layout-600": pathName !== URL.gallery,
          })}
        >
          Gallery
        </NavLink>
        <NavLink
          to={URL.contact}
          className={classNames("font-poppins text-sm", {
            "text-Primary-Rosecus": pathName === URL.contact,
            "text-Layout-600": pathName !== URL.contact,
          })}
        >
          Contact
        </NavLink>
      </div>
      <div className="flex w-1/4 justify-between">
        <NavLink to="/#" className="flex font-poppins font-semibold text-sm">
          <span className="pr-1">
            <img src={Location} height={24} width={18} />
          </span>
          Deliver to
        </NavLink>
        <NavLink to="/#" className="flex font-poppins font-semibold text-sm">
          <span className="pr-1">
            <img src={User} height={24} width={18} />
          </span>
          My Account
        </NavLink>
        <NavLink to="/#" className="flex font-poppins font-semibold text-sm">
          <span className="pr-1">
            <img src={Cart} height={24} width={18} />
          </span>
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
