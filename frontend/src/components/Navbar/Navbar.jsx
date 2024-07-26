import React, { useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import DarkMode from './DarkMode';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import { FaUserTimes, FaUserCheck } from "react-icons/fa";
import { useCart } from '../Navbar/CartContext.jsx'

const MenuLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/businesses" },
    { id: 3, name: "Sign Up", link: "/register" },
    { id: 4, name: "Add Business", link: "/add" }
];

const Popup = ({ message, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
            <p className="text-gray-800 dark:text-gray-200 text-center text-lg font-semibold">{message}</p>
            <button
                className="mt-4 w-full py-2 bg-primary text-white rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light duration-300"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

const UserDetailsPopup = ({ userEmail, onClose, onLogout }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">User Details</h2>
            <p className="text-gray-800 dark:text-gray-200">Email: {userEmail}</p>
            <button
                className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 duration-300"
                onClick={onLogout}
            >
                Logout
            </button>
            <button
                className="mt-2 w-full py-2 bg-primary text-white rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light duration-300"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

const NoUserPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4 text-center">No User Logged In</h2>
            <p className="text-gray-800 dark:text-gray-200 text-center">Please sign up or log in to access your details.</p>
            <Link to="/register" className="mt-4 block w-full py-2 bg-primary text-white text-center rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light duration-300" onClick={onClose}>
                Sign Up / Login
            </Link>
            <button
                className="mt-2 w-full py-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 duration-300"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

const LogoutPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4 text-center">Logged Out</h2>
            <p className="text-gray-800 dark:text-gray-200 text-center mb-4">You have been logged out.</p>
            <Link to="/login" className="block w-full py-2 bg-primary text-white text-center rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light duration-300" onClick={onClose}>
                Login
            </Link>
            <button
                className="mt-2 w-full py-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 duration-300"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

const Navbar = ({ handleOrderPopup }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const [isUserDetailsPopupOpen, setIsUserDetailsPopupOpen] = useState(false);
    const [isNoUserPopupOpen, setIsNoUserPopupOpen] = useState(false);
    const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false); 
    const { cart, getCartCount } = useCart();

    const location = useLocation();
    const [activeTab, setActiveTab] = useState('/');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUserEmail(null);
            setTimeout(() => {
                setIsLogoutPopupOpen(true); 
            }, 3000); 
            closeUserDetailsPopup();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };
    

    const handleCartClick = () => {
        setIsPopupOpen(true);
    };

    const handleUserDetailsClick = () => {
        if (userEmail) {
            setIsUserDetailsPopupOpen(true);
        } else {
            setIsNoUserPopupOpen(true);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const closeUserDetailsPopup = () => {
        setIsUserDetailsPopupOpen(false);
    };

    const closeNoUserPopup = () => {
        setIsNoUserPopupOpen(false);
    };

    const closeLogoutPopup = () => {
        setIsLogoutPopupOpen(false);
    };

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-primary font-bold tracking-wide text-2xl sm:text-3xl">
                            PAUmart
                        </Link>
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <Link
                                            to={data.link}
                                            className={`inline-block px-4 font-semibold ${activeTab === data.link ? 'text-primary border-b-2 border-primary' : 'text-gray-500'} hover:text-black dark:hover:text-white duration-200`}
                                        >
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <div className="relative flex items-center">
                            <button onClick={handleUserDetailsClick} className="flex items-center">
                                {userEmail ? <FaUserCheck className="text-xl text-gray-600 dark:text-gray-400" /> : <FaUserTimes className="text-xl text-gray-600 dark:text-gray-400" />}
                            </button>
                        </div>

                        <button className='relative p-3' onClick={handleCartClick}>
                            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                {getCartCount()}
                            </div>
                        </button>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                       <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold mb-4 text-center">Shopping Cart</h2>
                        {cart.length === 0 ? (
                            <p className="text-center text-gray-800 dark:text-gray-200">Your cart is empty.</p>
                        ) : (
                            <div>
                                {cart.map((item, index) => (
                                    <div key={index} className="flex items-center mb-4">
                                        <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            className="mt-4 w-full py-2 bg-primary text-white rounded hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light duration-300"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {isUserDetailsPopupOpen && (
                <UserDetailsPopup userEmail={userEmail} onClose={closeUserDetailsPopup} onLogout={handleLogout} />
            )}
            {isNoUserPopupOpen && (
                <NoUserPopup onClose={closeNoUserPopup} />
            )}
            {isLogoutPopupOpen && (
                <LogoutPopup onClose={closeLogoutPopup} />
            )}
        </div>
    );
};

export default Navbar;
