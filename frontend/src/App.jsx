import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import headphone from "./assets/hero/headphone.png";    
import AOS from "aos";
import Register from './Register';
import Home from './Home'; 
import Login from './Login';
import Shop from './Shop';
import AddBusiness from './AddBusiness';
import "aos/dist/aos.css";
import BusinessDetail from './BusinessDetail';
import { CartProvider } from './components/Navbar/CartContext';

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ipsum, dolor sit amet sonsectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

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
        <CartProvider>
          <Navbar handleOrderPopup={handleOrderPopup} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/businesses" element={<Shop />} />
            <Route path="/business/:id" element={<BusinessDetail />} />
            <Route path="/add" element={<AddBusiness />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
};

export default App;
