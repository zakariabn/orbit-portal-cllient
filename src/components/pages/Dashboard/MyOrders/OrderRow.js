import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../api/axiosPrivate";

const OrderRow = ({ order }) => {
  const { productName, address, quantity, price, timeDate, img } = order;

  function handelOrderCancel(id) {
    const isAgree = window.confirm("Are you sure? You wan't to cancel");

    if (isAgree) {
      (async () => {
        const { data } = await axiosPrivate.delete(`/order/${id}`);

        if (data.success) {
          toast.info(`Order ${id} is successfully canceled`);
          window.history.go(0);
        }
      })();
    }
  }

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>
        {
          <>
            {price} <sup className="text-orange-600">$</sup>
          </>
        }
      </td>
      <td>{parseInt(quantity) * price}</td>
      <td>
        {<button className="btn btn-xs btn-success mr-4">pay</button>}
        <button
          className="btn btn-xs btn-error"
          onClick={() => handelOrderCancel(order?._id)}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
