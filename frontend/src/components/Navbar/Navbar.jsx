import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Sign Up",
        link: "/register",
    },
    {
        id: 3,
        name: "Shop",
        link: "/businesses",
    },
    {
        id: 4,
        name: "Add Business",
        link: "/add"
    }
]

const Popup = ({ message, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <p className="text-gray-800 dark:text-gray-200 text-center">{message}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600" onClick={onClose}>
                Close
            </button>
        </div>
    </div>
);

const Navbar = ({ handleOrderPopup }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCartClick = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 realtive z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/*Logo and Links section */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-primary font-bold tracking-wide test-2xl togglecase sm:text-3xl"

                        >
                            PAUmart
                        </a>
                        {/* Menu Items */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data, index) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                        >
                                            {" "}
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/*Navbar Right section */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar section
                        <div className='relative group hidden sm:block'>
                            <input
                                type="text"
                                placeholder='Search'
                                className='search-bar'
                            />
                            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div> */}

                        {/* Cart section */}
                        <button className='relative p-3' onClick={handleCartClick}>
                            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                4
                            </div>
                        </button>
                        {/* Dark Mode section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Notif */}
            {isPopupOpen && <Popup message="Coming Soon!" onClose={closePopup} />}
        </div>
    );
};

export default Navbar