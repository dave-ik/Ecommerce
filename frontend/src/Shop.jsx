import React from 'react';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Products from './components/Products/Products.jsx';

const Shop = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <h1 className='text-center text-2xl font-bold my-4'>
        <Products />
        Shop</h1>
      {/* Add your shop content here */}
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
}

export default Shop;

