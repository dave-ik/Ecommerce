import React from 'react';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import Button from './components/Shared/Button';
// Images import 
import Img1 from "./assets/suya/suya.jpg";
import Img2 from "./assets/tekk/tekk.jpg";
import Img3 from "./assets/glowcity/glow.jpg";
import Img4 from "C:/Users/2122/Desktop/Ecommerce/frontend/src/assets/100/100perscent.jpg";
import Img5 from "./assets/aashami/aashami.jpg";
import Img6 from "./assets/beautiful/beautiful.jpg";
import Img7 from "./assets/book runner/book runner.jpg";
import Img8 from "./assets/cake o'clock/cake.jpg";
import Img9 from "./assets/chicsynx/chic.jpg";
import Img10 from "./assets/cho/cho.jpg";
import Img11 from "./assets/dlux/dlux.jpg";
import Img12 from "./assets/decorinn/decor.jpg";
import Img13 from "./assets/egobeauty/p1.jpg";
import Img14 from "./assets/glam/p1.jpg";
import Img15 from "./assets/glowcity/glow.jpg";
import Img16 from "./assets/loicette beads/loicette.jpg";
import Img17 from "./assets/runner/runner.jpg";
import Img18 from "./assets/sunset/sunset.jpg";
import Img19 from "./assets/shop4me/shop.jpg";
import Img20 from "./assets/thatonedesigner/tod.jpg"
import Image1 from "C:/Users/2122/Desktop/Ecommerce/frontend/src/assets/aashami/p4.jpg";
import Image2 from "C:/Users/2122/Desktop/Ecommerce/frontend/src/assets/aashami/p5.jpg";
import { Link } from 'react-router-dom';

export const BusinessData = [
    {
        id: 1,
        img: Img1,
        title: "Suya Plug",
        description: "Get your best suya",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Tekk Business",
        description: "Provides for SST",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Glow City",
        description: "Your go-to skin care spot",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "100Perscent",
        description: "Your go-to scents",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Product 5",
        description: "Description for product 5",
        aosDelay: "800",
        products: [
            {
              img: Image1,
              title: 'Product 1',
              description: 'Description for Product 1'
            },
            {
              img: Image2,
              title: 'Product 2',
              description: 'Description for Product 2'
            }
            // Add more products as needed
          ]
    },
    {
        id: 6,
        img: Img6,
        title: "Product 6",
        description: "Description for product 6",
        aosDelay: "1000",
    },
    {
        id: 7,
        img: Img7,
        title: "Product 7",
        description: "Description for product 7",
        aosDelay: "1200",
    },
    {
        id: 8,
        img: Img8,
        title: "Product 8",
        description: "Description for product 8",
        aosDelay: "1400",
    },
    {
        id: 9,
        img: Img9,
        title: "Product 9",
        description: "Description for product 9",
        aosDelay: "1600",
    },
    {
        id: 10,
        img: Img10,
        title: "Product 10",
        description: "Description for product 10",
        aosDelay: "1800",
    },
    {
        id: 11,
        img: Img11,
        title: "Product 11",
        description: "Description for product 11",
        aosDelay: "2000",
    },
    {
        id: 12,
        img: Img12,
        title: "Product 12",
        description: "Description for product 12",
        aosDelay: "2200",
    },
    {
        id: 13,
        img: Img13,
        title: "Product 13",
        description: "Description for product 13",
        aosDelay: "2400",
    },
    {
        id: 14,
        img: Img14,
        title: "Product 14",
        description: "Description for product 14",
        aosDelay: "2600",
    },
    {
        id: 15,
        img: Img15,
        title: "Product 15",
        description: "Description for product 15",
        aosDelay: "2800",
    },
    {
        id: 16,
        img: Img16,
        title: "Product 16",
        description: "Description for product 16",
        aosDelay: "3000",
    },
    {
        id: 17,
        img: Img17,
        title: "Product 17",
        description: "Description for product 17",
        aosDelay: "3200",
    },
    {
        id: 18,
        img: Img18,
        title: "Product 18",
        description: "Description for product 18",
        aosDelay: "3400",
    },
    {
        id: 19,
        img: Img19,
        title: "Product 19",
        description: "Description for product 19",
        aosDelay: "3600",
    },
    {
        id: 20,
        img: Img20,
        title: "Product 19",
        description: "Description for product 19",
        aosDelay: "3800",
    }
];

const Shop = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
            <h1 className='text-center text-2xl font-bold my-4'>
                Approved Businesses
            </h1>
            <div className='container mx-auto mb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
                    {/* card section */}
                    {BusinessData.map((data) => (
                        <Link to={`/business/${data.id}`} key={data.id}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className='group flex flex-col items-center'
                                key={data.id}>
                                <div className='relative'>
                                    <img
                                        src={data.img}
                                        alt=""
                                        className='h-180px w-[260px] object-cover rounded-md'
                                    />
                                    {/* hover blur */}
                                    <div className='hidden group-hover:flex absolute top-0 left-0 h-full w-full group-hover:backdrop-blur-sm duration-200'></div>
                                    {/* hover button */}
                                    <div className='hidden group-hover:flex absolute bottom-10 left-1/2 transform -translate-x-1/2'>
                                        <Button
                                            text={"Shop"}
                                            bgColor={"bg-primary"}
                                            textColor={"text-white"}
                                        />
                                    </div>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-semibold'>{data.title}</h2>
                                    <p className='font-bold'>{data.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Partners />
            <Footer />
        </div>
    );
}

export default Shop;
