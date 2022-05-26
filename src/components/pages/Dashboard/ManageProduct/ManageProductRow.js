import { async } from "@firebase/util";
import {toast} from 'react-toastify';
import React, { useState } from "react";
import axiosPrivate from "../../../../api/axiosPrivate";
import ConfirmModal from "../../../sheared/ConfirmModal/ConfirmModal";

const ManageProductRow = ({ product }) => {
  const { name, price, img, availableQuantity, minimumOrderQuantity } = product;

  function handelProductDelete(id) {
    const isAgree = window.confirm("Are you sure? You want to delete.");

    if (isAgree) {

      ( async () => {
        const {data} = await axiosPrivate.delete(`/product/delete?id=${id}`)
        console.log(data);

        if (data?.success) {
          toast.success('Product delete successfully');
        }
      })()
    }
  }

  console.log(parseInt(availableQuantity) * price);
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
      <td title={name}>
        {name.length > 35
          ? name.split(" ").slice(0, 4).join(" ") + " ..."
          : name}
      </td>
      <td>{availableQuantity}</td>
      <td>
        {
          <>
            {price} <sup className="text-orange-600">$</sup>
          </>
        }
      </td>
      <td>{minimumOrderQuantity}</td>
      <td>
        {<button className="btn btn-xs btn-info mr-4">Edit</button>}
        <button className="btn btn-xs btn-error" onClick={() => handelProductDelete(product._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageProductRow;
