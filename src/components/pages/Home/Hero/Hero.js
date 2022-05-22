import React from "react";
import bgImage from "../../../../asset/images/hero-banner/hero_banner-3.jpg";

const Hero = () => {
  return (
    <div
      style={heroCustomStyle}
      className="max-w-screen-2xl w-screen h-[700px] bg-center bg-cover bg-blend-color-dodge bg-gray-900">
      <dir>
          <h1>Hello world</h1>
      </dir>
    </div>
  );
};

export default Hero;

const heroCustomStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${bgImage})`,
  // backgroundColor: "#00090c"
};
