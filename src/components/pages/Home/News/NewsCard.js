import {
  faStopwatch,
  faStopwatch20,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./News.css";
import placeholderImg from "../../../../asset/images/newse_placeholder_img.jpg";

const NewsCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${placeholderImg})`,
        backgroundColor: "#222222",
      }}
      className="rounded-2xl overflow-hidden w-[380px] h-[300px] bg-cover bg-center bg-blend-overlay shadow-md border relative news-body">
      <div className="absolute bottom-5 left-5">
        <h2 className="text-[#eeeaea] text-2xl font-medium news-title">
          News title here
        </h2>
        <span className="posted-time">
          <FontAwesomeIcon
            icon={faStopwatch}
            className="text-white"></FontAwesomeIcon>
          <p className="text-[#eeeaea] inline-block ml-4 font-medium">August 28, 2020</p>
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
