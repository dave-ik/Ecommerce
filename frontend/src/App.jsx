import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import headphone from "./assets/hero/headphone.png";    
import AOS from "aos";
import Register from './Register';
import Home from './Home'; // just added
import Login from './Login';
import Shop from './Shop';
import "aos/dist/aos.css";
import BusinessDetail from './BusinessDetail';

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

// const BannerData2={
//   discount: "30% OFF",
//   title: "Happy Hours",
//   date: "14 Jan to 28 Jan",
//   image:  smartwatch2,
//   title2: "Smart Solo",
//   title3: "Winter Sale",
//   title4: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
//   bgColor: "#2dcc6f",
// }

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Router>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/A-Z Businesses" element={<Shop />} />
          <Route path="/business/:id" element={<BusinessDetail/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App
