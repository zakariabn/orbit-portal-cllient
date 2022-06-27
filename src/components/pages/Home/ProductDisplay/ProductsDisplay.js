import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../../api/axiosPrivate";
import useGetProduct from "../../../../hooks/useGetProduct";
import Loading from "../../../sheared/Loading/Loading";
import NotFound from "../../../sheared/NotFound/NotFound";
import ProductCard from "./ProductCard";

const ProductsDisplay = () => {
  const navigate = useNavigate();
  const [products, productsLoading] = useGetProduct(3);

  if (productsLoading) {
    return <Loading />;
  }

  return (
    <>
      {products.length <= 0 ? (
        <NotFound title="Products"/>
      ) : (
        <div
          className={`max-w-screen-xl w-full flex flex-col items-center gap-10 mt-[-100px] mb-20`}>
          <div className="flex flex-wrap gap-5 justify-center">
            {products?.map((product, index) => {
              return (
                <ProductCard key={product.name} product={product}></ProductCard>
              );
            })}
          </div>
          <button
            className={` ${products.length <= 0 && "hidden"} btn btn-sm`}
            onClick={() => navigate("/products")}>
            Show more
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsDisplay;
