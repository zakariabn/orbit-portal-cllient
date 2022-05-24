import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import Loading from "../../sheared/Loading/Loading";
import { format } from "date-fns";
import axiosPrivate from "../../../api/axiosPrivate";
import { async } from "@firebase/util";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ product }) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const { _id, name, img, price, availableQuantity, minimumOrderQuantity } =
    product;

  const isStockOut =
    parseInt(availableQuantity) < parseInt(minimumOrderQuantity);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(inputData) {
    const orderData = {
      userEmail: user?.email,
      productName: name,
      img: img,
      price: price,
      quantity: inputData.orderQuantity,
      timeDate: [format(new Date(), "PP"), format(new Date(), "pp")],
      address: inputData.address,
      phone: inputData.phone,
    };

    (async () => {
      const { data } = await axiosPrivate.post(
        `/order?productId=${_id}&quantity=${inputData.orderQuantity}`,{ orderData });
      if (data.success) {
        toast.success('Your order place successfully');
        navigate('/dashboard/my-orders');
      }
    })();
  }

  if (loading) return <Loading />;

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card bg-base-100 shadow-xl md:min-w-[400px]">
          <div className="card-body items-center justify-center">
            {/* img */}
            <div className="w-[220px] h-[220px] border flex justify-center items-center shadow-xl">
              <img
                src={img}
                alt=""
                className="p-5 w-[80%] max-h-[90%] rounded-lg shadow-md"
              />
            </div>

            <div>
              <h4 className="md:max-w-[500px] w-full text-lg font-medium mb-3">
                <span className="text-orange-600 font-bold">Name:</span>
                <span className="block ml-3">{name}</span>
              </h4>

              <h5 className="max-w-[350px] text-lg font-medium">
                <span className="text-orange-600 font-bold">Price:</span>
                <span className="ml-3">
                  {price} <sup className="text-orange-900">$</sup>
                </span>
              </h5>

              <h5 className="max-w-[350px] text-lg font-medium">
                <span className="text-orange-600 font-bold">Min Order:</span>
                <span className="ml-3">{minimumOrderQuantity} </span>
              </h5>
              <h5 className="max-w-[350px] text-lg font-medium">
                <span className="text-orange-600 font-bold">
                  Current Stock:
                </span>
                <span className="ml-3">{availableQuantity}</span>
              </h5>
            </div>
          </div>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={user?.displayName}
                  readOnly
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={user?.email}
                  readOnly
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Order quantity</span>
                </label>
                <input
                  type="number"
                  placeholder={minimumOrderQuantity}
                  className="input input-bordered"
                  {...register("orderQuantity", {
                    required: {
                      value: true,
                      message: "must require",
                    },
                    min: {
                      value: parseInt(minimumOrderQuantity),
                      message: `Minimum Order quantity ${minimumOrderQuantity}`,
                    },
                    max: {
                      value: parseInt(availableQuantity),
                      message: `Stock available ${availableQuantity}`,
                    },
                  })}
                />
                <small className="text-red-400 max-w-[320px] mt-1">
                  {errors.orderQuantity?.type === "required" &&
                    errors.orderQuantity.message}
                  {errors.orderQuantity?.type === "min" &&
                    errors.orderQuantity.message}
                  {errors.orderQuantity?.type === "max" &&
                    errors.orderQuantity.message}
                </small>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  required
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  required
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                      message: "Invalid mobile number",
                    },
                  })}
                  type="text"
                  placeholder="+88 01716760398"
                  className="input input-bordered"
                />
                <small className="text-red-400 max-w-[320px] mt-1">
                  {errors.phone && errors.phone.message}
                </small>
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={isStockOut}
                  className="btn btn-primary"
                  type="submit">
                  {isStockOut ? "Stock Out" : "Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
