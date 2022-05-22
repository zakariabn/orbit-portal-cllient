import React from "react";

const BusinessSummary = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full bg-stone-200 mb-20">
      <div>
        {/* <h1 className="text-center text-3xl text-orange-400 font-bold">Business Stats</h1> */}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="stat flex flex-col items-center">
          <div className="stat-title font-medium text-black ">Downloads</div>
          <div className="stat-value text-orange-600">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat flex flex-col items-center">
          <div className="stat-title font-medium text-black ">New Users</div>
          <div className="stat-value text-orange-600">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat flex flex-col items-center">
          <div className="stat-title font-medium text-black ">New Registers</div>
          <div className="stat-value text-orange-600">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat flex flex-col items-center">
          <div className="stat-title font-medium text-black ">New Registers</div>
          <div className="stat-value text-orange-600">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
