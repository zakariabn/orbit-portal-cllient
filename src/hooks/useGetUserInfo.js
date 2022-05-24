import { useEffect, useState } from 'react';
import axiosPrivate from '../api/axiosPrivate';

const useGetUserInfo = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivate.get("/users");
      setUsersInfo(data.users);
    })();
  }, []);

  return [usersInfo];
};

export default useGetUserInfo;