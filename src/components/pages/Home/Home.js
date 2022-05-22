import React from 'react';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import ProductsDisplay from './ProductDisplay/ProductsDisplay';
import Review from './Review/Review';

const Home = () => {
  return (
    <div className='flex flex-col items-center mb-20'>
      <Hero/>
      <ProductsDisplay/>
      <BusinessSummary/>
      <Review/>
      <Contact/>
    </div>
  );
};

export default Home;