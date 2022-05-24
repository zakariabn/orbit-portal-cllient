import React from "react";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useUser from "../../../../hooks/useUser";
import Loading from "../../../sheared/Loading/Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  const { displayName, photoURL, email, phoneNumber } = user;

  if (loading) {
    return <Loading/>
  }

  return (
    <div>
      <div className="my-10">
        <h2 className="text-2xl font-bold text-orange-500 mb-3 ">
          {displayName},s Information{" "}
        </h2>
        {/*  */}
        <div className="flex gap-4 border px-3 py-5 mb-3">
          <img src={photoURL} alt="" />
          <div className="self-end">
            <input type="file" />
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3">Account Information </h2>
        <div className="">
          {/* <h3 
            className='text-lg text-orange-600 font-medium flex justify-between'>
            <span>Name</span> 
            <span className='text-pur'>:</span> 
            <span className='text-gray-800 ml-3'>{displayName}</span>
          </h3> */}

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>:</th>
                  <th>{displayName}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Email</th>
                  <th>:</th>
                  <th>{email}</th>
                </tr>
                <tr>
                  <th>Phone</th>
                  <th>:</th>
                  <th>{phoneNumber || "Not found"}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
