import { useEffect, useState } from 'react';
import axiosPrivate from '../api/axiosPrivate';

const useGetUserInfo = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivate.get("/users");
        setUsersInfo(data.users);
      } catch (error) {
        console.log(error);
        setUsersInfo([]);
      }
    })();
  }, []);

  return [usersInfo];
};

export default useGetUserInfo;