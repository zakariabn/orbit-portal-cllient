import React from 'react';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalBody = ({isOpen, handelAgree, handelDisAgree}) => {
  return (
    <div
      className={`${
        isOpen ? "absolute" : "hidden"
      } top-0 z-50 text-gray-500 bg-[#fff3f2] m-4 p-4 rounded-xl`}>
      <h1 className="mb-4">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-orange-600 text-2xl mr-2"
        />
        <span className="text-xl font-medium text-black">
          Are you sure you want to delete
        </span>
      </h1>

      <div className="flex gap-2 ml-8">
        <button
          className="btn btn-xs btn-success font-bold"
          onClick={handelAgree}>
          OK
        </button>
        <button
          className="btn btn-xs btn-error font-bold"
          onClick={handelDisAgree}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalBody;