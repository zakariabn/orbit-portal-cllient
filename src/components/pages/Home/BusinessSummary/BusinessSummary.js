import React from "react";

const BusinessSummary = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full bg-stone-200 mb-20">
      <div>
        {/* <h1 className="text-center text-3xl text-orange-400 font-bold">Business Stats</h1> */}
      </div>
      <div class="flex justify-around">
        <div class="stat flex flex-col items-center">
          <div class="stat-title font-medium text-black ">Downloads</div>
          <div class="stat-value text-orange-600">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat flex flex-col items-center">
          <div class="stat-title font-medium text-black ">New Users</div>
          <div class="stat-value text-orange-600">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat flex flex-col items-center">
          <div class="stat-title font-medium text-black ">New Registers</div>
          <div class="stat-value text-orange-600">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div class="stat flex flex-col items-center">
          <div class="stat-title font-medium text-black ">New Registers</div>
          <div class="stat-value text-orange-600">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
