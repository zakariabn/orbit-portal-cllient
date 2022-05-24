import { useEffect, useState } from 'react';
import axiosPrivate from '../api/axiosPrivate';

const useGetOrder = (email = '') => {

  const [orders, setOrders] = useState([]);
  const [orderLoading, setOrderLoading] = useState(true);

  useEffect(() => {

      ( async () => {

        if (email) {
          const {data} = await axiosPrivate(`/orders?email=${email}`);
          console.log('user', data);
          if (data.success) {
            setOrders(data.orders)
            setOrderLoading(false);
          }
        }
        else {
          const {data} = await axiosPrivate(`/orders`);
          console.log(data);
          if (data.success) {
            setOrders(data.orders);
            setOrderLoading(false);
          }
        }
        
      })()
    }, [email])

    return [orders, orderLoading]
};

export default useGetOrder;