import React from "react";

const BusinessSummary = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full bg-stone-200 mb-20">
      <div>
        {/* <h1 className="text-center text-3xl text-orange-400 font-bold">Business Stats</h1> */}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="stat flex flex-col items-center">
          <div className="stat-title font-medium text-black ">Happy customer</div>
          <div className="stat-value text-orange-600">3K</div>
        </div>

        <div className="stat flex flex-col items-center">
          <div className="stat-title font-medium text-black ">Total sell</div>
          <div className="stat-value text-orange-600">4,200</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat flex flex-col items-center">
          <div className="stat-title font-medium text-black ">We Are In</div>
          <div className="stat-value text-orange-600">12</div>
          <div className="stat-desc">Country</div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
