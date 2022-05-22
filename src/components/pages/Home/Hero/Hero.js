import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bgImage from "../../../../asset/images/hero-banner/hero_banner-3.jpg";

const Hero = () => {
  return (
    <div
      style={heroCustomStyle}
      className="max-w-screen-2xl w-screen h-[700px] bg-center bg-cover  bg-gray-900">
      <div className="w-full h-full flex flex-col gap-10 justify-center items-center text-white">
        <h1 className="text-2xl md:text-5xl md:leading-[4rem] font-bold text-center max-w-[700px]">
          Manufacturer & Exporter Of <br />{" "}
          <span className="text-orange-500">Orbit</span> tools
        </h1>

        <div className="flex gap-5">
          <button className="btn btn-sm bg-transparent text-white border-white rounded-full hover:bg-transparent">
            Contact Us
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </button>
          <button className="btn btn-sm bg-transparent text-white border-white rounded-full hover:bg-transparent">
            Order Now
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const heroCustomStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .40), rgba(0, 0, 0, .80), rgba(0, 0, 0, .70)), url(${bgImage})`,
  backgroundColor: "#333333",
};
