import React from "react";
import Loader from "cssonly-loaders-react";

const Loading = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <Loader type="double-circle" duration="0.5" color= "#23333e" />
    </div>
  );
};

export default Loading;
