import React, { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useSignIn = (user) => {
  const [validUser, setValidUser] = useState(false);

  useEffect(() => {
    if (user) {
      const { displayName, email, photoURL } = user?.user;

      const userData = {
        name: displayName,
        email: email,
        img: photoURL,
        role: 'customer'
      };

      // request
      (async () => {
        try {
          const { data } = await axiosPrivate.put(`/user/${email}`, userData);
          if (data.validUser) {
            setValidUser(true);
          } else {
            setValidUser(false);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user]);

  return [validUser];
};

export default useSignIn;
