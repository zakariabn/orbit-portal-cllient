import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useGetUserInfo from "../../../../hooks/useGetUserInfo";

const Overview = () => {
  const [usersInfo] = useGetUserInfo();


  return (
    <div className="my-5">
      {/* user count */}
      <div className="flex flex-col items-center justify-center bg-base-100 shadow-xl p-4 rounded-2xl">
        <span className="w-[60px] h-[60px] bg-orange-500 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} className="text-[35px] mb-1 ml-0.5" />
        </span>
        <h2 className="text-xl font-bold mb-3">Total User</h2>
        <h2 className="text-sm font-bold bg-gray-300 px-5 py-0.5 rounded-full">{usersInfo.length}</h2>
      </div>
    </div>
  );
};

export default Overview;
