import React, { useEffect, useState } from "react";
import axiosPrivate from "../../../api/axiosPrivate";
import NotFound from "../../sheared/ProductsNotFound/NotFound";

import NewsCard from "../Home/News/NewsCard";
import BlogsCard from "./BlogsCard";

const NewsBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivate.get("/news-blog");
      if (data.success) {
        setBlogs(data?.newsBlogs);
      }
    })();
  }, []);

  return (
    <>
      {blogs.length <= 0 ? (
        <NotFound title="Blogs"/>
      ) : (
        <div className="my-10 max-w-screen-xl">
          <h1 className="text-4xl text-center text-orange-500 font-bold mb-10">
            News Blogs
          </h1>

          <div className="flex flex-wrap justify-center gap-4 bg-slate-100 p-5 rounded-2xl">
            {blogs?.map((blog) => {
              return <BlogsCard key={blog._id} newsBlog={blog}></BlogsCard>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsBlog;
