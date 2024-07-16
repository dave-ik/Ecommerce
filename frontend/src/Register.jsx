// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from './components/Footer/Footer.jsx';
// import Partners from './components/Partners/Partners.jsx';
// import Blogs from './components/Blogs/Blogs.jsx';
// import { Link } from 'react-router-dom';
// import { auth } from './firebase.jsx';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate();

//     const isValidEmail = (email) => {
//         const regex = /^[a-zA-Z0-9._%+-]+@pau\.edu\.ng$/;
//         return regex.test(email);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!isValidEmail(email)) {
//             setErrorMessage("Please enter a valid email ending with @pau.edu.ng");
//             setTimeout(() => setErrorMessage(''), 2000);
//             return;
//         }
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//             setSuccessMessage("Account Created");
//             setTimeout(() => {
//                 navigate('/add');
//             }, 3000);
//         } catch (err) {
//             console.log(err);
//             setErrorMessage("Registration failed. Please try again.");
//             setTimeout(() => setErrorMessage(''), 2000);
//         }
//     };

//     return (
//         <div className='register-container bg-white dark:bg-gray-900 dark:text-white py-10'>
//             <div className='container mx-auto px-4'>
//                 <form className="register-form bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
//                     <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
//                     <div className='mb-4'>
//                         <label htmlFor="email" className='block text-sm font-semibold mb-2'>Email:</label>
//                         <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
//                     </div>
//                     <div className='mb-4'>
//                         <label htmlFor="password" className='block text-sm font-semibold mb-2'>Password:</label>
//                         <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
//                     </div>
//                     <button type='submit' className='w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark duration-200'>Sign Up</button>
//                     <br />
//                     {successMessage && <div className='mt-4 p-4 bg-green-100 text-green-800 rounded-md'>{successMessage}</div>}
//                     {errorMessage && <div className='mt-4 p-4 bg-red-100 text-red-800 rounded-md'>{errorMessage}</div>}
//                     <p className='mt-4 text-sm'>Already Registered? <Link to="/login" className='text-primary hover:underline'>Login</Link></p>
//                 </form>
//             </div>
//             <Blogs />
//             <Partners />
//             <Footer />
//         </div>
//     );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import { Link } from 'react-router-dom';
import { auth } from './firebase.jsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@pau\.edu\.ng$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email ending with @pau.edu.ng");
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccessMessage("Account Created");
            setTimeout(() => {
                setSuccessMessage(''); // Clear success message
                setIsSuccessPopupOpen(true); // Show success popup after delay
            }, 3000); // Delay before showing the popup
        } catch (err) {
            console.log(err);
            setErrorMessage("Registration failed. Please try again.");
            setTimeout(() => setErrorMessage(''), 3000);
        }
    };

    const closeSuccessPopup = () => {
        setIsSuccessPopupOpen(false);
    };

    return (
        <div className='register-container bg-white dark:bg-gray-900 dark:text-white py-10'>
            <div className='container mx-auto px-4'>
                <form className="register-form bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-sm font-semibold mb-2'>Email:</label>
                        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-sm font-semibold mb-2'>Password:</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600' />
                    </div>
                    <button type='submit' className='w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark duration-200'>Sign Up</button>
                    <br />
                    {successMessage && <div className='mt-4 p-4 bg-green-100 text-green-800 rounded-md'>{successMessage}</div>}
                    {errorMessage && <div className='mt-4 p-4 bg-red-100 text-red-800 rounded-md'>{errorMessage}</div>}
                    <p className='mt-4 text-sm'>Already Registered? <Link to="/login" className='text-primary hover:underline'>Login</Link></p>
                </form>
            </div>
            <Blogs />
            <Partners />
            <Footer />

            {/* Success Popup */}
            {isSuccessPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold mb-4 text-center">Registration Successful!</h2>
                        <p className="text-gray-800 dark:text-gray-200 text-center mb-4">Your account has been created successfully.</p>
                        <div className="flex justify-around">
                            <Link to="/add" className="py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark duration-300" onClick={closeSuccessPopup}>
                                Add Business
                            </Link>
                            <Link to="/" className="py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400 duration-300" onClick={closeSuccessPopup}>
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
