import React from "react";
import useGetProduct from "../../../hooks/useGetProduct";
import Footer from "../../sheared/Footer/Footer";
import ProductCard from "../Home/ProductDisplay/ProductCard";

const Products = () => {
  const [products] = useGetProduct();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mb-20">
        <h2 className="text-center text-5xl font-bold my-10">
          Product Collection
        </h2>
        <div className="flex flex-wrap justify-center gap-10 bg-gray-200 px-4 py-10 rounded-lg">
          {products?.map((product) => {
            return (
              <ProductCard key={product.name} product={product}></ProductCard>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
