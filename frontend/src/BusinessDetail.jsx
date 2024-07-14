import React from "react";
import { useParams } from "react-router-dom";
import { BusinessData } from "./Shop";
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';

const BusinessDetail = () => {
  const { id } = useParams();
  const businessId = parseInt(id, 10);
  const business = BusinessData.find((b) => b.id === businessId);

  // if (!business) {
  //   return <div className="text-center text-2xl font-bold my-4">Business not found</div>;
  // }

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
            <div key={index} className='border rounded-lg p-4'>
              <img src={product.img} alt={product.title} className='w-full h-auto object-cover rounded-md' />
              <h3 className='text-lg font-bold mt-2'>{product.title}</h3>
              <p className='text-md mt-1'>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Partners />
      <Footer />
    </div>
  );
}

export default BusinessDetail;
