import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BusinessData } from './Shop';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import { useCart } from './components/Navbar/CartContext';

const BusinessDetail = () => {
  const { id } = useParams();
  const businessId = parseInt(id, 10);
  const business = BusinessData.find((b) => b.id === businessId);
  const [message, setMessage] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage("Successfully added to cart");
    setTimeout(() => setMessage(null), 3000);
  };

  if (!business) {
    return <div className="text-center text-2xl font-bold my-4">Business not found</div>;
  }

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <div className='container mx-auto p-4'>
        <h1 className='text-center text-3xl font-bold mb-4'>{business.title}</h1>
        <div className='flex flex-col md:flex-row items-center'>
          <img src={business.img} alt={business.title} className='w-1/3 h-auto object-cover mt-4 rounded-md md:mr-4' />
          <div className='mt-4 md:mt-0'>
            <p className='text-lg'>{business.description}</p>
            <ul className='list-disc pl-5 mt-2'>
              {business.services && business.services.map((service, index) => (
                <li key={index} className='text-lg'>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className='text-xl font-bold mt-8'>Products Offered</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {business.products && business.products.map((product, index) => (
            <div key={index} className='border rounded-lg p-4 relative group'>
              <img src={product.img} alt={product.title} className='w-full h-auto object-cover rounded-md' />
              <h3 className='text-lg font-bold mt-2'>{product.title}</h3>
              <p className='text-md mt-1'>{product.description}</p>
              {/* hover blur */}
              <div className='hidden group-hover:flex absolute top-0 left-0 h-full w-full group-hover:backdrop-blur-sm duration-200'></div>
              {/* hover button */}
              <button 
                onClick={() => handleAddToCart(product)} 
                className='hidden group-hover:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-white py-2 px-4 rounded'>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4 text-center">Success</h2>
            <p className="text-gray-800 dark:text-gray-200 text-center">{message}</p>
            <button
              className="mt-4 w-full py-2 bg-primary text-white text-center rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light duration-300"
              onClick={() => setMessage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Partners />
      <Footer />
    </div>
  );
}

export default BusinessDetail;
