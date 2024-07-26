import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Trending Business",
    link: "/tp",
  },
  {
    title: "Best selling",
    link: "/bs",
  },
  {
    title: "Top Rated",
    link: "/tr",
  },
  {
    title: "Most Consistent",
    link: "/mc",
  },
]

const FooterLinks2 = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Sign Up",
    link: "/register",
  },
  {
    title: "Shop",
    link: "/businesses",
  }
]

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


const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLinkClick = (event) => {
    event.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* <company details> */}
          <div className='py-8 px-4'>
            <a
              href="#"
              className="text-primary font-bold tracking-wide test-2xl togglecase sm:text-3xl"

            >
              DAVANNA
            </a>
            <div>
              <h3 className="widgettitle">Contact Us</h3>
              <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                Lines are open:
                <br></br>
                Monday - Friday
                <br></br>
                8.30am - 5.00pm
              </p>
              <a
                href="https://pau.edu.ng/"
                target='_blank'
                className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full ml-[-17px]'>
                Official School Website
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {FooterLinks.map(
                  (data, index) => (
                    <li key={index}>
                      <a
                        href={data.link} 
                        onClick={handleLinkClick}
                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                      >
                        {data.title}
                      </a>
                    </li>
                  )
                )
                }
              </ul>
            </div>
            {/* second col links */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {FooterLinks2.map(
                  (data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                      >
                        {data.title}
                      </a>
                    </li>
                  )
                )
                }
              </ul>
            </div>

            {/* Company Address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Reach Out</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Km 52, Ibeju-Lekki, PO Box 73688, Lagos</p>
                </div>
                <div className='flex items-center gap-3 mt-6'>
                  <FaMobileAlt />
                  <p>+234 816 482 0228</p>
                </div>
                <div className='flex items-center gap-3'>
                  <FaMobileAlt />
                  <p>+234 708 864 1465</p>
                </div>

                {/* social links */}
                <div className='flex items-center gap-3 mt-6'>
                <a href="https://www.instagram.com/pau_nigeria/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                  </a>
                  <a href="https://www.facebook.com/PanAtlanticUniversityNG/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                  </a>
                  <a href="https://www.linkedin.com/school/pan-atlantic-university/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && <Popup message="Coming Soon!" onClose={closePopup} />}
    </div>
  )
}

export default Footer