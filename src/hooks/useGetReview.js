import { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

const useGetReview = (limit = '') => {
  const [review, setReview] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivate.get(`/review?limit=${limit}`);
        setReview(data.review);
      }
      catch (error) {
        console.log(error);
      }
    })();
  }, [limit]);

  return[review];
};

export default useGetReview;
