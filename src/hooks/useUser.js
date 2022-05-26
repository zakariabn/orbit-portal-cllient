import  { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivate from "../api/axiosPrivate";
import Loading from "../components/sheared/Loading/Loading";
import auth from "../firebase.init";

const useUser = () => {
  const [user, loading] = useAuthState(auth);
  const [dbUser, setDbUser] = useState({});

  useEffect(() => {

    if (user) {
      (async () => {
        const { data } = await axiosPrivate.get(`/user/${user?.email}`);
        if (data.success) {
          setDbUser(data.user);
          // setDbUserLoading(false);
        }
      })();
    }
  }, [user]);

  // const {
  //   data :dbUser,
  //   isLoading,
  //   refetch,
  // } = useQuery(["user", user], () => axiosPrivate.get(`/user/${user?.email}`));

  // // console.log(data);

  // //
  // // useEffect(() => {
  // //   setDbUser(data)
  // // }, [data])
  

  if (loading) {
    return <Loading/>
  }
  // if (loading || isLoading) {
  //   return <Loading/>
  // }
  
  // return [dbUser, refetch];
  return [dbUser];
};

export default useUser;
