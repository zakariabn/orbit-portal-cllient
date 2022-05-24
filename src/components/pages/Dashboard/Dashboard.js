import React from "react";
import { Link, Outlet } from "react-router-dom";
import useIsAdmin from "../../../hooks/useIsAdmin";

const Dashboard = () => {
  const [isAdmin] = useIsAdmin();
  console.log(isAdmin);

  return (
    <div className="drawer drawer-mobile drawer-end">
      <input id="dashboard-opener" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content ">
        <h2 className="text-center text-4xl text-white font-bold py-2 pb-4 bg-gray-800 ">
          Dashboard
        </h2>
        <div className="flex flex-col items-center">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side shadow-xl">
        <label htmlFor="dashboard-opener" className="drawer-overlay"></label>
        <ul className="menu gap-2 p-4 overflow-y-auto w-80 bg-gray-800 text-black">
          {isAdmin && (
            <>
              <li>
                <Link
                  to="overview"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  Overview
                </Link>
              </li>

              <li>
                <Link
                  to="profile"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  My Profile
                </Link>
              </li>

              <li>
                <Link
                  to="manage-users"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  Manage User
                </Link>
              </li>

              <li>
                <Link
                  to="manage-orders"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  Manage Orders
                </Link>
              </li>

              <li>
                <Link
                  to="manage-product"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  Manage Product
                </Link>
              </li>

              <li>
                <Link
                  to="add-product"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  Add Product
                </Link>
              </li>
            </>
          )}

          {!isAdmin && (
            <>
              <li>
                <Link
                  to="profile"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  My Profile
                </Link>
              </li>

              <li>
                <Link
                  to="my-orders"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  Orders
                </Link>
              </li>

              <li>
                <Link
                  to="review"
                  className="btn bg-transparent border-white text-white hover:bg-transparent hover:border-gray-500">
                  Give us a review
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
