import React from "react";
import useGetProduct from "../../../hooks/useGetProduct";
import Footer from "../../sheared/Footer/Footer";
import Loading from "../../sheared/Loading/Loading";
import NotFound from "../../sheared/ProductsNotFound/NotFound";

import ProductCard from "../Home/ProductDisplay/ProductCard";

const Products = () => {
  const [products, productsLoading] = useGetProduct();


  if (productsLoading) {
    return <Loading/>
  }

  return (
    <>
      {products.length <= 0 ? (
        <NotFound title="Products"/>
      ) : (
        <div>
      <div className="max-w-screen-xl mx-auto mb-20">
        <h2 className="text-center text-5xl font-bold my-10">
          Product Collection
        </h2>
        <div className="flex flex-wrap justify-center gap-10 bg-gray-200 px-4 py-10 rounded-lg">
          {products?.map((product) => {
            return (
              <ProductCard key={product._id} product={product}></ProductCard>
            );
          })}
        </div>
      </div>
      <Footer position={products.length <= 0 ? "fixed bottom-0 left-0" : ""}/>
    </div>
      )}
    </>
  );
};

export default Products;
