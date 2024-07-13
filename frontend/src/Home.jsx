import React from 'react';
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
// import Banner from './components/Banner/Banner';
import Partners from "./components/Partners/Partners.jsx";
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import headphone from "./assets/hero/headphone.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ipsum, dolor sit amet sonsectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
}

const Home = ({ orderPopup, handleOrderPopup }) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      {/* <Banner data={BannerData}/> */}
      <Products/>
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  );
}

export default Home;
