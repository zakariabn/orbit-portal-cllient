import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../../asset/icon/Logo.png";
import CustomLink from "../../sheared/CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import userPlaceHolderImg from "../../../asset/images/user-account-img-placeholder.png";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../../api/axiosPrivate";
import { toast } from "react-toastify";

const Navigation = () => {
  const [isHome, setIsHome] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setIsHome(location.pathname === "/" ? true : false);
  }, [location]);

  function handelSignOut() {
    axiosPrivate.get("/user/logout").then(res => {
      if(res.status === 200) {
        signOut(auth);
        setOpenModal(false);
        toast.info('Successfully logout');
      }
    });
  }

  return (
    <div
      className={`${
        isHome
          ? "absolute max-w-screen-2xl w-full"
          : "max-w-screen w-full block"
      }`}>
      {/* nav container */}
      <nav
        className={`${
          isHome
            ? "bg-navBgColor text-white"
            : "bg-navBgColorNotHome text-white"
        } px-2 sm:px-10  py-4 shadow-lg`}>
        <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center relative">
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
                navOpen ? "left-[-10px]" : "left-[-300px]"
              } w-[200px] h-[300px] font-medium absolute px-5 py-4 top-[82px] md:hidden gap-4 duration-200 text-xl rounded-[0rem_1rem_1rem_0rem] text-black menu bg-base-100 shadow-md`}>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/products">Products</CustomLink>
              <CustomLink to="/about">About</CustomLink>
            </div>

            {/* fo tablet and desktop width */}
            <div className="font-medium hidden md:flex gap-4 duration-150">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/products">Products</CustomLink>
              <CustomLink to="/about">About</CustomLink>
            </div>
          </div>

          <div className=" font-medium flex gap-5">
            {!user ? (
              <>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/sign-up">Sign Up</CustomLink>
              </>
            ) : (
              <>
                <div
                  className="w-[45px] h-[45px] bg-slate-400 rounded-full overflow-hidden hover:cursor-pointer shadow-md shadow-gray-600"
                  onClick={() => setOpenModal(!openModal)}>
                  <img src={user?.photoURL || userPlaceHolderImg} alt="" />
                </div>
              </>
            )}
          </div>

          {/* user info popup modal */}
          {openModal && (
            <div className="absolute top-[4rem] right-0 md:right-[-12rem] bg-white min-w-[200px] text-black rounded-lg shadow-md">

              <div className="w-full flex flex-col items-center px-2 py-4">
                <div className="flex flex-col items-center mb-5">
                  <img
                    src={user?.photoURL || userPlaceHolderImg}
                    alt=""
                    className="w-[60px] mb-3 rounded-full"
                  />
                  <h3 className="text-xl font-medium">
                    {user?.displayName || "User"}
                  </h3>
                  <p>{user?.email}</p>
                </div>

                <button onClick={handelSignOut} className="btn btn-sm">
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
