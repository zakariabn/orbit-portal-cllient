import React from "react";

const ReviewCard = () => {
  return (
    <div class="card w-[300px]  bg-white shadow-md border text-primary-content">
      <div class="card-body p-4">
        {/* user info */}
        <div class="avatar placeholder gap-4 items-center mb-2">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span class="text-xs">AA</span>
          </div>
          <p class="card-title">User name</p>
        </div>

        <div class="rating rating-sm">
          <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
        </div>

        {/* Review info */}
        <p className="text-gray-900">If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
