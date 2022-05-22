import React from "react";

const ReviewCard = () => {
  return (
    <div className="card w-[300px]  bg-white shadow-md border text-primary-content">
      <div className="card-body p-4">
        {/* user info */}
        <div className="avatar placeholder gap-4 items-center mb-2">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">AA</span>
          </div>
          <p className="card-title">User name</p>
        </div>

        <div className="rating rating-sm">
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        </div>

        {/* Review info */}
        <p className="text-gray-900">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
