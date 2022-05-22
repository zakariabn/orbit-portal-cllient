import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../asset/icon/Logo.png";
import CustomLink from "../../sheared/CustomLink/CustomLink";

const Navigation = () => {
  const [isHome, setIsHome] = useState(false);
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
      <nav className={`${isHome ? "bg-navBgColor text-white" : "bg-slate-300 text-black"} p-4 shadow-lg` }>
        <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center ">
          <div>
            <img src={logo} alt="" className="h-[50px]" />
          </div>

          <div className="font-medium flex gap-4">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
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
