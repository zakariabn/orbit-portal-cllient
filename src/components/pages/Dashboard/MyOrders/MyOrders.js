import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import useGetOrder from "../../../../hooks/useGetOrder";
import Loading from "../../../sheared/Loading/Loading";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, ordersLoading] = useGetOrder(user?.email);

  if (loading || ordersLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen w-full">
      <h1 className="text-3xl font-bold text-center text-orange-600 bg-stone-100 py-3 shadow-md w-full">
        <span className="">My Orders</span>
      </h1>

      <div className="mt-5 max-w-screen-xl mx-auto">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product name</th>
                <th>Order Quantity</th>
                <th>
                  Price <sup>(per pice)</sup>
                </th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders?.map((order) => {
                  return <OrderRow key={order._id} order={order}></OrderRow>;
                })
              ) : (
                <>
                  <tr className="text-xl text-center block">
                    <td>No Order found</td>
                  </tr>
                </>
              )}
            </tbody>

            <tfoot>
              <tr>
                <th>...</th>
                <th>...</th>
                <th>...</th>
                <th>...</th>
                <th>...</th>
                <th>...</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
