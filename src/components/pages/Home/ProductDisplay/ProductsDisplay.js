import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../../api/axiosPrivate";
import useGetProduct from "../../../../hooks/useGetProduct";
import ProductCard from "./ProductCard";

const ProductsDisplay = () => {
  const navigate = useNavigate();
  const [products] = useGetProduct(3);

  return (
    <div className="max-w-screen-xl w-full flex flex-col items-center gap-10 mt-[-100px] mb-20">
      <div className="flex flex-wrap gap-5 justify-center">
        {products?.map((product, index) => {
          return (
            <ProductCard key={product.name} product={product}></ProductCard>
          );
        })}
      </div>
      <button className="btn btn-sm" onClick={() => navigate('/products')}>Show more</button>
    </div>
  );
};

export default ProductsDisplay;
