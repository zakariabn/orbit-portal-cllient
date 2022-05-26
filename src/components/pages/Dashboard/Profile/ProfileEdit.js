import { async } from "@firebase/util";
import { add } from "date-fns";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../api/axiosPrivate";

const ProfileEdit = ({ user, dbUser, setIsProfileEdit }) => {
  // const { name, img, email, phoneNumber } = user;

  const { name, img, email, phone, address, socialLink } = dbUser;

  const [userInfo, setUserInfo] = useState({
    phone: "",
    address: "",
    socialLink: "",
  });

  useEffect(() => {
    if (dbUser) {
      setUserInfo({
        phone: dbUser.phone,
        address: dbUser.address,
        socialLink: dbUser.socialLink,
      });
    }
  }, [dbUser]);

  // let newData = false;
  // if (userInfo.phone || userInfo.socialLink || userInfo.address) {
  //   newData = true;
  // }

  function handelPhoneChange(e) {
    setUserInfo({ ...userInfo, phone: e.target.value });
  }

  function handelAddressChange(e) {
    setUserInfo({ ...userInfo, address: e.target.value });
  }

  function handelSocialChange(e) {
    setUserInfo({ ...userInfo, socialLink: e.target.value });
  }

  // i need to do if user not login with social login he can update his profile picture and name

  function handelSaveUserInfo() {
    console.log("func-log1", userInfo);

    (async () => {
      const { data } = await axiosPrivate.put(
        `/update-user?email=${email}`,
        userInfo
      );
      console.log(data);
      if (data.success) {
        toast.success("Profile update successfully");
      }
    })();
    setIsProfileEdit(false);
    window.history.go(0);
  }

  return (
    <div className="my-5 flex flex-col items-center">
      <div>
        {/*  */}
        <div className="flex gap-5 mt-10 mb-3">
          <div className="w-[100px]">
            <img src={img} alt="" className="w-full" />
          </div>

          <h2 className="self-end text-2xl font-bold text-orange-500">
            {name}{" "}
          </h2>
          {/* <div className="self-end">
            <input type="file" />
          </div> */}
        </div>

        <h2 className="text-xl font-bold mb-3">Account Information </h2>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>:</th>
                  <th className="p-2">
                    <input
                      type="text"
                      value={name}
                      disabled
                      readOnly
                      placeholder="Your Name"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Email</th>
                  <th>:</th>
                  <th className="p-2">
                    <input
                      type="email"
                      value={email}
                      readOnly
                      disabled
                      placeholder="Email"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </th>
                </tr>
                <tr>
                  <th>Phone</th>
                  <th>:</th>
                  <th className="p-2">
                    <input
                      type="number"
                      onChange={handelPhoneChange}
                      value={userInfo.phone}
                      name="number"
                      placeholder="Your Number"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </th>
                </tr>
                <tr>
                  <th>Address</th>
                  <th>:</th>
                  <th className="p-2">
                    <input
                      type="text"
                      name="address"
                      value={userInfo.address}
                      onChange={handelAddressChange}
                      placeholder="Your address"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </th>
                </tr>
                <tr>
                  <th>Social link</th>
                  <th>:</th>
                  <th className="p-2">
                    <input
                      type="text"
                      name="socialLink"
                      value={userInfo.socialLink}
                      onChange={handelSocialChange}
                      placeholder="www.linkedin.com/user/your_name"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <button
          className="btn btn-success btn-sm mt-5"
          onClick={handelSaveUserInfo}
          // disabled={!newData}>
          // {newData ? "Save" : "No New Data"}
        >
          save
        </button>
        <button
          className="btn btn-error btn-sm mt-5"
          onClick={() => setIsProfileEdit(false)}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
