import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogsCard = ({newsBlog}) => {
  const {_id, title, img, post_date} = newsBlog;

  const navigate = useNavigate();

  function handelReadPost (id) {
    navigate(`/news-blog/read/${id}`)

  }

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundColor: "#222222",
      }}
      onClick={() => handelReadPost(_id)}
      className="rounded-2xl overflow-hidden w-[300px] md:w-[300px] h-[300px] bg-cover bg-center bg-blend-overlay shadow-md border relative news-body">
      <div className="absolute bottom-5 left-5">
        <h2 className="text-[#eeeaea] text-2xl font-medium news-title">
          {title.length > 30 ? title.split(' ').slice(0, 4).join(' ') + " ..." : title}
        </h2>
        <span className="posted-time">
          <FontAwesomeIcon
            icon={faStopwatch}
            className="text-white"></FontAwesomeIcon>
          <p className="text-[#eeeaea] inline-block ml-4 font-medium">{post_date.join(' | ')}</p>
        </span>
      </div>
    </div>
  );
};

export default BlogsCard;