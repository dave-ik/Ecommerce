import React, { useState } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import { firestore } from './firebase';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddBusiness = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    brandImage: null,
    contactInfo: '',
    socials: '',
    productImages: [],
    description: '',
  });

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { files, name } = e.target;
    if (name === 'brandImage') {
      setFormData({
        ...formData,
        brandImage: files[0],
      });
    } else if (name === 'productImages') {
      setFormData({
        ...formData,
        productImages: Array.from(files),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storage = getStorage();
    let brandImageUrl = '';
    const productImageUrls = [];

    try {
      // Uploading the brand image
      if (formData.brandImage) {
        const storageRef = ref(storage, `brandImages/${formData.brandImage.name}`);
        await uploadBytes(storageRef, formData.brandImage);
        brandImageUrl = await getDownloadURL(storageRef);
      }

      for (const file of formData.productImages) {
        const storageRef = ref(storage, `productImages/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        productImageUrls.push(url);

      }

      const businessData = {
        ...formData,
        brandImage: brandImageUrl, // Replace with URLs
        productImages: productImageUrls // Replace with URLs
      };

      await addDoc(collection(firestore, 'businesses'), businessData);
      setSuccessMessage('Business successfully added! Waiting to confirm approval from school.');

      // Here to reset form data if needed
      setFormData({
        businessName: '',
        brandImage: null,
        contactInfo: '',
        socials: '',
        productImages: [],
        description: '',
      });
    } catch (error) {
      console.error("Error adding business: ", error);
    }
  };

  return (
    <div className='add-business-container bg-white dark:bg-gray-900 dark:text-white py-10'>
      <div className='container mx-auto px-4'>
        <form className="add-business-form bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className='text-2xl font-bold mb-4'>Add a New Business</h2>
          <div className='mb-4'>
            <label htmlFor="businessName" className='block text-sm font-semibold mb-2'>
              Business Name:
            </label>
            <input type="text" id="businessName" name="businessName" onChange={handleChange} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' required />
          </div>
          <div className='mb-4'>
            <label htmlFor="brandImage" className='block text-sm font-semibold mb-2'>
              Brand Image:
            </label>
            <input type="file" id="brandImage" name="brandImage" accept="image/*" onChange={handleFileChange} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' required />
          </div>
          <div className='mb-4'>
            <label htmlFor="contactInfo" className='block text-sm font-semibold mb-2'>
              Contact Info:
            </label>
            <input type="text" id="contactInfo" name="contactInfo" onChange={handleChange} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' required />
          </div>
          <div className='mb-4'>
            <label htmlFor="socials" className='block text-sm font-semibold mb-2'>
              Social Media:
            </label>
            <input type="text" id="socials" name="socials" onChange={handleChange} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
          </div>
          <div className='mb-4'>
            <label htmlFor="productImages" className='block text-sm font-semibold mb-2'>
              Product Images:
            </label>
            <input type="file" id="productImages" name="productImages" accept="image/*" multiple onChange={handleFileChange} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
          </div>
          <div className='mb-4'>
            <label htmlFor="description" className='block text-sm font-semibold mb-2'>
              Description:
            </label>
            <textarea id="description" name="description" onChange={handleChange} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' required />
          </div>
          <button type='submit' className='w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark duration-200'>Add Business</button>
        </form>
        {successMessage && (
          <div className='mt-4 p-4 bg-green-100 text-green-800 rounded-md'>
            {successMessage}
          </div>
        )}
      </div>
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
};

export default AddBusiness;
