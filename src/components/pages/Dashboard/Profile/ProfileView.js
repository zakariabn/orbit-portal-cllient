import React from "react";

const ProfileView = ({ user, dbUser, setIsProfileEdit }) => {
  // const { name, img, email } = user;
  const {name, img, email, phone, address, socialLink } = dbUser;



  return (
    <div className="my-5">
      <div className="flex flex-wrap gap-10 justify-between items-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-3 ">
          {name},s Information{" "}
        </h2>
        <button
          className="btn btn-xs btn-info mt-3 font-bold text-gray-900"
          onClick={() => setIsProfileEdit(true)}>
          Edit
        </button>
      </div>
      {/*  */}
      <div className="flex mt-5 mb-3 w-[100px]">
        <img src={img} alt="" className="w-full"/>
      </div>

      <h2 className="text-xl font-bold mb-3">Account Information </h2>
      <div className="">
        {/* <h3 
            className='text-lg text-orange-600 font-medium flex justify-between'>
            <span>Name</span> 
            <span className='text-pur'>:</span> 
            <span className='text-gray-800 ml-3'>{name}</span>
          </h3> */}

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>:</th>
                <th>{name}</th>
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
                <th>{phone || "Not found"}</th>
              </tr>
              <tr>
                <th>Address</th>
                <th>:</th>
                <th>{address || "Not found"}</th>
              </tr>
              <tr>
                <th>Social link</th>
                <th>:</th>
                <th>
                  {socialLink ? (
                    <button className="btn btn-xs btn-success">
                      <a href={socialLink} rel="noreferrer" target={"_blank"} >Visit</a>
                    </button>
                  ) : (
                    "Not found"
                  )}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
