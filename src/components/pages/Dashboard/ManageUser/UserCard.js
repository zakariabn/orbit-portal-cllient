import React from "react";

const UserCard = ({ user }) => {
  const { name, email, img, role } = user;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{"Bangladesh"}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-info pb-0.5 text-black badge-sm">{role}</span>
      </td>
      <td>
        <select name="" id="">
          <option value="customer">Customer</option>
          <option value="customer">Admin</option>
        </select>
      </td>
      <td>
        { role !== 'admin' && <button className="btn btn-xs btn-success mr-4">Make Admin</button>}
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default UserCard;
