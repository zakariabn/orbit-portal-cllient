import React, { useState } from "react";
import useUser from "../../../../hooks/useUser";
import Loading from "../../../sheared/Loading/Loading";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";


const Profile = () => {
  const [isProfileEdit, setIsProfileEdit] = useState(false);

  const [dbUser, refetch] = useUser();

  console.log(dbUser);

  return (
    <div>
      {isProfileEdit ? (
        <ProfileEdit dbUser={dbUser} setIsProfileEdit={setIsProfileEdit} />
      ) : (
        <ProfileView  dbUser={dbUser} setIsProfileEdit={setIsProfileEdit}/>
      )}
    </div>
  );
};

export default Profile;
