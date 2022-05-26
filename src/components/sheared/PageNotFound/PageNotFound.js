import React from 'react';
import { useLocation } from 'react-router-dom';
import bgImg from '../../../asset/images/hero-banner/hero_banner-2.jpg'

const PageNotFound = () => {
 
  const location = useLocation();
  console.log(location);

  function handelGoBack () {
    window.history.go(-1);
  }

  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: '#222222'
  }
  return (
    <div style={bgImage} className='h-[91.3vh] max-w-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-blend-multiply'>
      <h1 className='text-white text-6xl font-bold mb-4'>Page not found</h1>
      <button className='btn btn-sm btn-info' onClick={handelGoBack}>GO back</button>
    </div>
  );
};

export default PageNotFound;