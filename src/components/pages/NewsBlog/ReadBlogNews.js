import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../../api/axiosPrivate";

const ReadBlogNews = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();


  useEffect(() => {
    (async () => {
      const { data } = await axiosPrivate.get(`/news-blog/${id}`);
      if (data.success) {
        setBlog(data.blog);
      }
    })();
  }, [id]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 mt-5 bg-slate-100 p-4">
        <div className="">
          <img src={blog?.img} alt="" className="w-[300px] h-[300px] rounded" />
          <div className="flex items-center bg-slate-50 p-2">
            <img
              src={blog?.blogger_img}
              alt=""
              className="w-[40px] h-[40px] rounded-full border border-orange-500 p-0.5 mr-4"
            />
            <div className="flex flex-col">
              <p className="text-xs uppercase font-bold">
                {blog?.blogger_name}
              </p>
              <p className="text-sm">{blog?.post_date?.join(" ")}</p>
            </div>
          </div>
        </div>

        {/* blog text */}
        <div className="max-w-[400px]">
          <h4 className="text-xl font-bold mb-2">{blog?.title}</h4>
          <p className="ml-4">{blog?.blog_text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadBlogNews;
