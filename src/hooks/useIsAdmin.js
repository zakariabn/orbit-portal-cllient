import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../api/axiosPrivate";
import Loading from "../components/sheared/Loading/Loading";
import auth from "../firebase.init";

const useIsAdmin = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await axiosPrivate.get(
          `/user/admin?email=${user?.email}`
        );
        if (data.admin) {
          setIsAdmin(true);
          setIsAdminLoading(false);
        }
        else {
          setIsAdmin(false)
          setIsAdminLoading(false);
        }
      })();
    }
  });

  // if (loading) return <Loading></Loading>;

  return [isAdmin, isAdminLoading];
};

export default useIsAdmin;
