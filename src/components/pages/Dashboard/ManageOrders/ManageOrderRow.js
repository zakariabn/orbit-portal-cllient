import React from "react";

const ManageOrderRow = ({ order }) => {
  const { productName, address, quantity, price, timeDate, img } = order;

  console.log(parseInt(quantity) * price);
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
        {<button className="btn btn-xs btn-error mr-4">unpaid</button>}
        <button className="btn btn-xs btn-info">Shift</button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
