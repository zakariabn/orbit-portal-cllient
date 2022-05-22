import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../asset/icon/Logo.png";
import CustomLink from "../../sheared/CustomLink/CustomLink";

const Navigation = () => {
  const [isHome, setIsHome] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setIsHome(location.pathname === "/" ? true : false);
  }, [location]);
  

  return (
    <div
      className={`${
        isHome
          ? "absolute max-w-screen-2xl w-full"
          : "max-w-screen-2xl w-full block"
      }`}>
      {/* nav container */}
      <nav
        className={`${
          isHome ? "bg-navBgColor text-white" : "bg-slate-300 text-black"
        } px-2 sm:px-10  py-4 shadow-lg`}>
        <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center ">
          <div className="flex items-center gap-5">
            <span
              className="ml-4 md:hidden text-xl font-bold"
              onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? (
                <FontAwesomeIcon icon={faArrowLeft} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </span>

            <img src={logo} alt="" className="h-[50px]" />
          </div>

          <div>
            {/* for mobile width  */}
            <div
              className={` ${
                navOpen ? "left-0" : "left-[-200px]"
              } w-[200px] h-[300px] font-medium absolute px-5 py-4 top-[82px] md:hidden gap-4 duration-200 text-xl rounded-[0rem_1rem_1rem_0rem] text-black menu bg-base-100 shadow-md` }>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/store">Store</CustomLink>
            </div>

            {/* fo tablet and desktop width */}
            <div className="font-medium hidden md:flex gap-4 duration-150">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/store">Store</CustomLink>
            </div>
          </div>

          <div className=" font-medium">
            <CustomLink to="/login">Login</CustomLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
