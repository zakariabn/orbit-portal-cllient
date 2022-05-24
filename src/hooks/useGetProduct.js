import { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useGetProduct = (limit = '') => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivate.get(`/products?limit=${limit}`);
        console.log(data);
        if (data.success) {
          setProducts(data.products);
          setProductsLoading(false);
        }
      }
      catch (error) {
        setProductsError(error);
        setProductsLoading(false);
      }
    })();
  }, [limit]);

  return[products, productsLoading, productsError];
};

export default useGetProduct;
