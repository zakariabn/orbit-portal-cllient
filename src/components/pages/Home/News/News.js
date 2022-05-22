import React from "react";
import './News.css'
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="max-w-screen-xl w-full mb-20">
      <h1 className="text-4xl text-center md:text-left text-[#333333] font-bold mb-10">Latest News</h1>
      <div className="flex gap-5 flex-wrap justify-center">
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
      </div>
    </div>
  );
};

export default News;
