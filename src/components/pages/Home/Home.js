import React from 'react';
import Footer from '../../sheared/Footer/Footer';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import News from './News/News';
import ProductsDisplay from './ProductDisplay/ProductsDisplay';
import Review from './Review/Review';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Hero/>
      <ProductsDisplay/>
      <BusinessSummary/>
      <News/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;