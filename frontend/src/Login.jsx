import React, { useState } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase.jsx';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setSuccessMessage("Login Successful!");
      navigate('/add');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='register-container bg-white dark:bg-gray-900 dark:text-white py-10'>
      <div className='container mx-auto px-4'>
        <form className="register-form bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className='text-2xl font-bold mb-4'>Login</h2>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-sm font-semibold mb-2'>
              Email:
            </label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-sm font-semibold mb-2'>
              Password:
            </label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
          </div>
          <button type='submit' className='w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark duration-200'>Login</button> <br />
          {successMessage && <div className='mt-4 p-4 bg-green-100 text-green-800 rounded-md'>{successMessage}</div>}
          <p className='mt-4 text-sm'>Don't have an account? <Link to="/register" className='text-primary hover:underline'>Register</Link></p>
        </form>
      </div>
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
}

export default Login;
