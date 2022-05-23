import { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useGetProduct = (limit = '') => {
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivate.get(`/products?limit=${limit}`);
        setProducts(data.products);
      }
      catch (error) {
        setProductsError(error);
      }
    })();
  }, [limit]);

  return[products, productsError];
};

export default useGetProduct;
