import React from "react";

const ProductCard = ({ product }) => {
  const {
    name,
    img,
    description,
    price,
    availableQuantity,
    minimumOrderQuantity,
  } = product;

  const productImgBg = {
    backgroundImage: `url(${img})`,
    backgroundColor: "#00000099",
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <div
        style={productImgBg}
        className="h-[216px] flex justify-center bg-cover bg-blend-darken bg-center">
        <img src={img} alt="" className="h-[215px] shadow-md m-3 rounded-lg" />
      </div>

      <div className="card-body">
        <h2 className="card-title" title={name}>
          {name.length > 60 ? name.slice(0, 60) : name}
        </h2>
        <div className=" mb-6">
          <h3 className="text-lg text-black font-medium">
            Price: <span className="text-orange-800 font-bold">{price}</span>{" "}
            <sup>$ per pisces</sup>
          </h3>
          <h4 className="text-lg font-medium ">Available: <span className="text-black">{availableQuantity}</span> pics</h4>
          <h4 className="text-lg font-medium ">Minimum Order quantity: <span className="text-black">{minimumOrderQuantity}</span></h4>
        </div>

        <p>
          {description.length > 120
            ? description.slice(0, 120) + " ..."
            : description}
        </p>
        <div className="card-actions justify-center mt-5">
          <div className="btn btn-sm">Order</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
