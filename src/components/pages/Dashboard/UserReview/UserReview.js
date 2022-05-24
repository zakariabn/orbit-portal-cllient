import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import axiosPrivate from "../../../../api/axiosPrivate";
import auth from "../../../../firebase.init";

const UserReview = () => {
  const [user, loading] = useAuthState(auth);

  const [rating, setRating] = useState(3);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(inputData) {

    const reviewData = {
      name: user?.displayName,
      img: user?.photoURL,
      rating: rating,
      review: inputData.review
    };
    console.log(reviewData);

    (async () => {
      const { data } = await axiosPrivate.post(`/add/review`, {reviewData});
      console.log(data);
    })();
  }

  return (
    <div>
      <div className="my-10">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <div className="flex gap-5 mb-5">
              <div class="avatar">
                <div class="w-10 rounded-full ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
              <h2 class="card-title">{user?.displayName}</h2>
            </div>

            <span>
              {
                <Rating
                  onChange={handleRating}
                  initialRating={rating}
                  emptySymbol={
                    <FontAwesomeIcon icon={faStar} className="text-xl" />
                  }
                  fullSymbol={
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-orange-400 text-xl"
                      fractions={2}
                    />
                  }
                />
              }
            </span>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <textarea
                {...register("review", { 
                  required: {
                    value: true,
                    message: "You can't give empty review"
                  }
                })}
                class="textarea textarea-bordered min-h-[150px]"
                placeholder="Bio"></textarea>
                <small className="text-red-500">{errors.review && errors.review.message}</small>
              <button class="btn btn-outline btn-sm btn-success self-center ">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
