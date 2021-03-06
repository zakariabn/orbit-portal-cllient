import React from "react";
import useGetReview from "../../../../hooks/useGetReview";
import NotFound from "../../../sheared/NotFound/NotFound";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews] = useGetReview();

  return (
    <>
      <div className="mb-20 flex flex-col items-center">
        <h2 className="text-center text-3xl text-stone-600 font-medium mb-5">
          User Reviews
        </h2>

        {reviews.length <= 0 ? (
          <NotFound title={"Reviews"}/>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {reviews?.map((review) => {
              return (
                <ReviewCard key={review._id} reviewData={review}></ReviewCard>
              );
            })}
          </div>
        )}

        <button className="btn btn-sm bg-transparent text-black rounded-none hover:bg-transparent hover:rounded-[0_1rem_1rem_0] hover:border-stone-200 hover:text-orange-500 duration-200">
          See more
        </button>
      </div>
    </>
  );
};

export default Review;
