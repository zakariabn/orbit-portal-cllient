import React from 'react';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Hero from './Hero/Hero';
import ProductsDisplay from './ProductDisplay/ProductsDisplay';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Hero/>
      <ProductsDisplay/>
      <BusinessSummary/>
    </div>
  );
};

export default Home;