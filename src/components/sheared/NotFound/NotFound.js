import React from "react";

const NotFound = ({title}) => {
  return (
    <h2 className="my-10 font-bold">
      <span className="block text-center text-sm text-red-500 ">
        Something went wrong !
      </span>
      <span className="block text-center text-4xl">{title} Not Found</span>
    </h2>
  );
};

export default NotFound;
