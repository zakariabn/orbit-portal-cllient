import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../api/axiosPrivate";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(inputData) {
    

    const productInfo = {
      name: inputData.name,
      img: inputData.image,
      price: inputData.price,
      availableQuantity: inputData.stock,
      minimumOrderQuantity: inputData.minQuantity,
      description: inputData.description,
    };


    const formData = new FormData();
    const image = inputData.image[0];


    formData.append("image", image);
    
   

    // form data appending not working thats why i did't implement direct upload;

    /*
      ( async () => {
        axios.post(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`)
          .then (data => {
            console.log(data);
          })
      })() 
    */

    // sending product data
/*     if (productInfo) {
      (async () => {
        console.log(productInfo);
        const { data } = await axiosPrivate.post("/product", productInfo);

        console.log(data);
        if (data.success) {
          toast.success("Successfully added a new product");
          reset();
        } else {
          toast.error("Request failed, Product not added");
        }
      })();
    } */
  }

  return (
    <div className="max-w-screen-xl w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-orange-600 bg-stone-100 py-3 shadow-md w-full">
        <span className="">Add Product</span>
      </h1>

      <div className="mt-10 bg-slate-100 p-10 rounded-2xl w-full md:w-[400px]">
        <form
          className="flex flex-col gap-3 items-center justify-center px-2"
          onSubmit={handleSubmit(onSubmit)}>
          {/* product name input */}
          <div className="w-full">
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Must require",
                },
              })}
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
            />
            <small className="text-red-400">
              {errors.name && errors.name.message}
            </small>
          </div>

          <div className="w-full">
            <input
              {...register("price", {
                required: {
                  value: true,
                  message: "Must require",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Input should be positive Integer",
                },
              })}
              type="text"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
            <small className="text-red-400">
              {errors.price && errors.price.message}
            </small>
          </div>

          <div className="w-full">
            <input
              {...register("stock", {
                required: {
                  value: true,
                  message: "Must require",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Input should be positive Integer",
                },
              })}
              type="text"
              placeholder="Current Stock"
              className="input input-bordered w-full max-w-xs"
            />
            <small className="text-red-400">
              {errors.stock && errors.stock.message}
            </small>
          </div>

          {/* min quantity input */}
          <div className="w-full">
            <input
              {...register("minQuantity", {
                required: {
                  value: true,
                  message: "Must require",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Input should be positive Integer",
                },
              })}
              type="text"
              placeholder="Minimum Order"
              className="input input-bordered w-full max-w-xs"
            />
            <small className="text-red-400">
              {errors.minQuantity && errors.minQuantity.message}
            </small>
          </div>

          <div className="w-full">
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "Must require",
                },
              })}
              class="textarea textarea-bordered w-full h-[100px]"
              placeholder="Product description"></textarea>

            <small className="text-red-400">
              {errors.description && errors.description.message}
            </small>
          </div>

          {/* image input */}
          <div className="w-full mb-5">
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Image must require"
                }
              })}
              type="file"
              placeholder="Minimum Order"
              className="input input-bordered w-full max-w-xs pt-1.5"
            />
            {/* <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Image must require",
                },
                pattern: {
                  value: /(https?:\/\/.*\.(?:png|jpg))/,
                  message: "Url is not valid",
                },
              })}
              type="input"
              placeholder="Image Url"
              className="input input-bordered w-full max-w-xs pt-1.5"
            /> */}
            <small className="text-red-400">
              {errors.image && errors.image.message}
            </small>
          </div>

          <input
            type="submit"
            value="Add Product"
            className="btn w-full btn-success text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
