import React, { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useUser = (email) => {
  const [dbUser, setDbUser] = useState({});
  const [dbUserLoading, setDbUserLoading] = useState(true);

  useEffect(() => {
    if (email) {
      (async () => {
        const { data } = await axiosPrivate.get(`/user/${email}`);
        if (data.success) {
          setDbUser(data.user);
          setDbUserLoading(false);
        }
      })();
    }
  }, [email]);

  return [dbUser, dbUserLoading];
};

export default useUser;
