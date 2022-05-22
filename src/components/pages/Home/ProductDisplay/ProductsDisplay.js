import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("product.json");
      setProducts(data);
    })();
    
  }, []);

  return (
    <div className="max-w-screen-xl w-full flex flex-col items-center gap-10 mt-[-100px] mb-20">
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product, index) => {
          return (
            <ProductCard key={product.name} product={product}></ProductCard>
          );
        })}
      </div>
      <button className="btn btn-sm" onClick={() => navigate('/shop')}>Show more</button>
    </div>
  );
};

export default ProductsDisplay;
