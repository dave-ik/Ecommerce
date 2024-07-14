import React from 'react';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import Button from './components/Shared/Button';
// Images import 
import Img1 from "./assets/suya/suya.jpg";
import Img2 from "./assets/tekk/tekk.jpg";
import Img3 from "./assets/glowcity/glow.jpg";
import Img4 from "./assets/100/100perscent.jpg";
import Img5 from "./assets/aashami/aashami.jpg";
import Img6 from "./assets/book runner/book runner.jpg";
import Img7 from "./assets/cakeclock/cake.jpg";
import Img8 from "./assets/chicsynx/chic.jpg";
import Img9 from "./assets/cho/cho.jpg";
import Img10 from "./assets/dlux/dlux.jpg";
import Img11 from "./assets/decorinn/decor.jpg";
import Img12 from "./assets/loicette beads/loicette.jpg";
import Img13 from "./assets/runner/runner.jpg";
import Img14 from "./assets/sunset/sunset.jpg";
import Img15 from "./assets/thatonedesigner/tod.jpg";
import Img16 from "./assets/anastasia/anastasia.jpg";
import Image1 from "./assets/tekk/7200.jpg";
import Image2 from "./assets/tekk/p1.jpg";
import Image3 from "./assets/tekk/p2.jpg";
import Image4 from "./assets/aashami/p1.jpg";
import Image5 from "./assets/aashami/p4.jpg";
import Image6 from "./assets/aashami/p6.jpg";
import Image7 from "./assets/glowcity/13,500.jpg";
import Image8 from "./assets/glowcity/3000.jpg";
import Image9 from "./assets/glowcity/p2.jpg";
import Image10 from "./assets/glowcity/p3.jpg";
import Image11 from "./assets/glowcity/p4.jpg";
import Image12 from "./assets/glowcity/p5.jpg";
import Image13 from "./assets/100/p1.jpg";
import Image14 from "./assets/100/p2.jpg";
import Image15 from "./assets/100/p3.jpg";
import Image16 from "./assets/100/p4.jpg";
import Image17 from "./assets/100/p5.jpg";
import Image18 from "./assets/100/p6.jpg";
import Image19 from "./assets/book runner/p2.jpg";
import Image20 from "./assets/book runner/p3.jpg";
import Image21 from "./assets/book runner/p4.jpg";
import Image22 from "./assets/cakeclock/p1.jpg";
import Image23 from "./assets/cakeclock/p3.jpg";
import Image24 from "./assets/cakeclock/p4.jpg";
import { Link } from 'react-router-dom';

export const BusinessData = [
    {
        id: 1,
        img: Img1,
        title: "Suya Plug",
        description: (
            <>
                Let SuyaPlug bring the flavours and vibes with our mouthwatering suya, spice-rubbed beef hot off the grill.
                Our suya is seasoned to perfection with our signature blend of Nigeria's finest spices- taking your tastebuds on a trip to Flavor Town! Whether you need a study break or want to fuel up before a night out, our hearty suya is sure to satisfy your cravings. And with such an affordable price, you can order plenty to share with all your friends too. We'll always have it ready for quick pick-up. <br />
                <br />
                PAU mail: <span className="email-text" data-email="suyaplug.biz@pau.edu.ng">suyaplug.biz@pau.edu.ng</span><br />
                <br />
                Whatsapp: <a href="https://wa.me/message/QASMGISPVULGE1" className="text-blue-500 underline">https://wa.me/message/QASMGISPVULGE1 </a><br />
            </>
        ),
        aosDelay: "0",
    },

    {
        id: 2,
        img: Img2,
        title: "Tekk Business",
        description: (
            <>
                We are a student business designed to provide all students of sst with their required kits. We provide various engineering gears like goggles, graphs, Labcoat, Rotring sets and many more. <br />
                <br />
                PAU mail: <span className="email-text" data-email="tekk.biz@pau.edu.ng">tekk.biz@pau.edu.ng</span><br />
                <br />
                Phone Number: 09121673275, 08060626152<br />
                <br />
            </>
        ),
        aosDelay: "200",
        products: [
            {
                img: Image1,
                title: "",
                description: ""
            },
            {
                img: Image2,
                title: "",
                description: ""
            },
            {
                img: Image3,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 3,
        img: Img3,
        title: "Glow City",
        description: (
            <>
                Your go-to skin care spots <br />
                <br />
                PAU mail: <span className="email-text" data-email="glowcitybymoe@pau.edu.ng">glowcitybymoe@pau.edu.ng</span><br />
                <br />
                WhatsApp: <a href="https://wa.link/3aga2m" className="text-blue-500 underline">https://wa.link/3aga2m</a><br />
                <br />
                {/* Instagram: <span className="text-blue-500">@_shop.aashami</span> */}
                Phone Number: 09083836776
            </>
        ),
        aosDelay: "400",
        products: [
            {
                img: Image7,
                title: "",
                description: ""
            },
            {
                img: Image8,
                title: "",
                description: ""
            },
            {
                img: Image9,
                title: "",
                description: ""
            },
            {
                img: Image10,
                title: "",
                description: ""
            },
            {
                img: Image11,
                title: "",
                description: ""
            },
            {
                img: Image12,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 4,
        img: Img4,
        title: "100Perscent",
        description: (
            <>
                Your go-to scents, Beauty, cosmetic & peronsal care plug. <br />
                We offer inexpensive and unique scents that suit your personality and trademarks you everywhere you go.
                Shop affordable scents today.<br />
                <br />
                PAU mail: <span className="email-text" data-email="100perscent.biz@pau.edu.ng">100perscent.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <span className="text-blue-500">@100perscent</span><br />
                <br />
                Phone Number: 08062003504
                <br />
                Personal mail: 14fdurodoye@gmail.com
            </>
        ),
        aosDelay: "600",
        products: [
            {
                img: Image13,
                title: "",
                description: ""
            },
            {
                img: Image14,
                title: "",
                description: ""
            },
            {
                img: Image15,
                title: "",
                description: ""
            },
            {
                img: Image16,
                title: "",
                description: ""
            },
            {
                img: Image17,
                title: "",
                description: ""
            },
            {
                img: Image18,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 5,
        img: Img5,
        title: "Aashami",
        description: (
            <>
                PAU mail: <span className="email-text" data-email="aashami.biz@pau.edu.ng">aashami.biz@pau.edu.ng</span><br />
                <br />
                WhatsApp: <a href="https://wa.link/rpe207" className="text-blue-500 underline">https://wa.link/rpe207</a><br />
                <br />
                Instagram: <span className="text-blue-500">@_shop.aashami</span>
            </>
        ),
        aosDelay: "800",
        products: [
            {
                img: Image4,
                title: "",
                description: ""
            },
            {
                img: Image5,
                title: "",
                description: ""
            },
            {
                img: Image6,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 6,
        img: Img6,
        title: "Book Runner",
        description: (
            <>
                Are you tired of paying a fortune for your novels, story books, research books, inspirational books, and textbooks each semester? <br />
                Do you struggle to find the right books on time for your classes? Look no further! <br />
                We are excited to introduce Book Runner, our new business that sells the books you need at a fraction of the cost and delivers them right to your doorstep. <br />
                Don't waste your time and money searching for your books elsewhere. Trust us to provide you with the best service and prices for all your book's needs. Give us a try and see for yourself! <br />
                Thank you for considering us as your trusted books supplier. We look forward to serving you. <br />
                <br />
                PAU mail: <span className="email-text" data-email="bookrunner.biz@pau.edu.ng">bookrunner.biz@pau.edu.ng</span><br />
                <br />
                Phone Number: 07044668540
            </>
        ),
        aosDelay: "1000",
        products: [
            {
                img: Image19,
                title: "",
                description: ""
            },
            {
                img: Image20,
                title: "",
                description: ""
            },
            {
                img: Image21,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 7,
        img: Img7,
        title: "It's Cake o'Clock",
        description: (
            <>
                <br />
                PAU mail: <span className="email-text" data-email="cakeoclock.biz@pau.edu.ng">cakeoclock.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <span className="text-blue-500">@julies_cakeshop</span>
                <br />
                <br />
                WhatsApp: <a href="https://snapchat.com/t/F2P4JGKs" className="text-blue-500 underline">https://snapchat.com/t/F2P4JGKs</a><br />
                <br />
                Website: https://cakeoclock.bumpa.shop/
            </>
        ),
        aosDelay: "1200",
        products: [
            {
                img: Image22,
                title: "",
                description: ""
            },
            {
                img: Image23,
                title: "",
                description: ""
            },
            {
                img: Image24,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 8,
        img: Img8,
        title: "It's Cake o'Clock",
        description: "Description for product 8",
        aosDelay: "1400",
    },
    {
        id: 9,
        img: Img9,
        title: "Chicsynx",
        description: "Description for product 9",
        aosDelay: "1600",
    },
    {
        id: 10,
        img: Img10,
        title: "CHO Enterprise",
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
        title: "Loicette Beads",
        description: "Description for product 16",
        aosDelay: "3000",
    },
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
                                        alt={data.title}
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
                                    {/* <p className='font-bold'>{data.description}</p> */}
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
