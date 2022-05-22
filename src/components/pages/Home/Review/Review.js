import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="mb-20 flex flex-col items-center">
      <h2 className="text-center text-3xl text-stone-600 font-medium mb-5">
        User Reviews
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-5">
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>

      <button className="btn btn-sm bg-transparent text-black rounded-none hover:bg-transparent hover:rounded-[0_1rem_1rem_0] hover:border-stone-200 hover:text-orange-500 duration-200">
        See more
      </button>
    </div>
  );
};

export default Review;
