import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../api/axiosPrivate";

const UserCard = ({ user }) => {
  const { name, email, img, role } = user;

  function handelDeleteUser(email) {

  }

  function handelMakeAdmin(email) {

    ( async() => {
      const {data} = await axiosPrivate.put('/admin-user/role', {email: email, role: "admin"})

      if (data.success) {
        toast.success('Role updated');
        window.history.go(0);
      }
    })()

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
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{"Bangladesh"}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-info pb-0.5 text-black badge-sm">
          {role}
        </span>
      </td>
      <td>
        <select name="" id="">
          <option value="customer">Customer</option>
          <option value="customer">Admin</option>
        </select>
      </td>
      <td>
        {role !== "admin" && (
          <button
            onClick={() => handelMakeAdmin(email)}
            className="btn btn-xs btn-success mr-4">
            Make Admin
          </button>
        )}
        <button
          disabled
          onClick={() => handelDeleteUser(email)}
          className="btn btn-xs btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserCard;
