import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const ReviewCard = ({ reviewData }) => {
  const { img, name, rating, review } = reviewData;

  return (
    <div className="card w-[300px]  bg-white shadow-md border text-primary-content">
      <div className="card-body p-4">
        {/* user info */}
        <div className="avatar placeholder gap-4 items-center mb-2">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <img src={img} alt="" />
          </div>
          <p className="card-title text-gray-700">{name}</p>
        </div>

        <div className="">
          <Rating
            initialRating={rating}
            readonly={true}
            emptySymbol={<FontAwesomeIcon icon={faStar} className=" text-gray-400" />}
            fullSymbol={
              <FontAwesomeIcon
                icon={faStar}
                className="text-orange-400"
                fractions={2}
              />
            }
          />
        </div>

        {/* Review info */}
        <p className="text-gray-900">{review}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
