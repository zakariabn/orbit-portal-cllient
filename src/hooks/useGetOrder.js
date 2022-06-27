import { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useGetOrder = (email = "") => {
  const [orders, setOrders] = useState([]);
  const [orderLoading, setOrderLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (email) {
          const { data } = await axiosPrivate(`/orders?email=${email}`);
          if (data.success) {
            setOrders(data.orders);
            setOrderLoading(false);
          }
        } else {
          const { data } = await axiosPrivate(`/orders`);
          if (data.success) {
            setOrders(data.orders);
            setOrderLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
        setOrderLoading(false);
      }
    })();
  }, [email]);

  return [orders, orderLoading];
};

export default useGetOrder;
