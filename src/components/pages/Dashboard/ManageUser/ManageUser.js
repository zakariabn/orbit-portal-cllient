import React from "react";
import useGetUserInfo from "../../../../hooks/useGetUserInfo";
import UserCard from "./UserCard";

const ManageUser = () => {
  const [usersInfo] = useGetUserInfo();

  return (
    <div className="mt-5">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Select Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersInfo?.map((user) => {
              return <UserCard key={user._id} user={user}></UserCard>;
            })}
          </tbody>

          <tfoot>
            <tr>
              <th>...</th>
              <th>...</th>
              <th>...</th>
              <th>...</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
