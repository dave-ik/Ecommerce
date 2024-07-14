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
import Image25 from "./assets/chicsynx/p1.jpg";
import Image26 from "./assets/chicsynx/p2.jpg";
import Image27 from "./assets/chicsynx/p4.jpg";
import Image28 from "./assets/cho/4600.jpg";
import Image29 from "./assets/cho/p2.jpg";
import Image30 from "./assets/cho/p3.jpg";
import Image31 from "./assets/dlux/4,200.jpg"
import Image32 from "./assets/dlux/6k.jpg"
import Image33 from "./assets/dlux/8,300.jpg"
import Image34 from "./assets/decorinn/p1.jpg"
import Image35 from "./assets/decorinn/p2.jpg"
import Image36 from "./assets/decorinn/p3.jpg"
import Image37 from "./assets/loicette beads/p1.jpg"
import Image38 from "./assets/loicette beads/p3.jpg"
import Image39 from "./assets/loicette beads/p4.jpg"
import Image40 from "./assets/sunset/4500.jpg"
import Image41 from "./assets/sunset/5000.jpg"
import Image42 from "./assets/sunset/p1.jpg"
import Image43 from "./assets/anastasia/p1.jpg"
import Image44 from "./assets/anastasia/p2.jpg"
import Image45 from "./assets/anastasia/p3.jpg"
import Image46 from "./assets/anastasia/p4.jpg"
import Image47 from "./assets/anastasia/p5.jpg"
import Image48 from "./assets/anastasia/p6.jpg"
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
                Instagram: <a href="https://www.instagram.com/100perscenttt?igsh=a3NraGlsNzBjbXVl">@100perscenttt</a><br />
                <br />
                Phone Number: 08062003504
                <br />
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
                Instagram: <a href="https://www.instagram.com/_shop.aashami?igsh=MWF6c3J0bTIwbjcxdg==">@_shop.aashami</a><br />
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
                Instagram: <a href="https://www.instagram.com/julies_cakeshop?igsh=MWhyNG1ybnR6bDY2Nw==">@julies_cakeshop</a><br />
                <br />
                Snapchat: <a href="https://snapchat.com/t/F2P4JGKs" className="text-blue-500 underline">https://snapchat.com/t/F2P4JGKs</a><br />
                <br />
                Website: <a href="https://cakeoclock.bumpa.shop/" className="text-blue-500 underline">https://cakeoclock.bumpa.shop/</a><br />
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
        title: "Chic Synx",
        description: (
            <>
                Yes, you read it correctly. It's time to treat your beauty routine with urgency! After all, it's the first thing people notice when you walk into a room. And let's be real, Gen Z already knows this.
                Without further ado, allow us to introduce Chic_Synx! Your one stop for beautiful & care products.
                Follow us on our Instagram page to start shopping now! Don’t get left behind 🙂<br />
                <br />
                PAU mail: <span className="email-text" data-email="chicsynx.biz@pau.edu.ng">chicsynx.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <a href="https://www.instagram.com/chic_synx?igsh=bXdrMmdxMzdkcm1i">@chic_synx</a><br />
                <br />
                WhatsApp: <a href="https://wa.link/zfy2lh" className="text-blue-500 underline">https://wa.link/zfy2lh</a><br />
                <br />
                Phone Number: 09012706690
            </>
        ),
        aosDelay: "1400",
        products: [
            {
                img: Image25,
                title: "",
                description: ""
            },
            {
                img: Image26,
                title: "",
                description: ""
            },
            {
                img: Image27,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 9,
        img: Img9,
        title: "CHO Enterprise",
        description: (
            <>
                <br />
                PAU mail: <span className="email-text" data-email="cho.biz@pau.edu.ng">cho.biz@pau.edu.ng</span><br />
                <br />
                Website: <a href="https://cho.myexpress.shop/" className="text-blue-500 underline">https://cho.myexpress.shop/</a><br />
                <br />
                WhatsApp: <a href="https://wa.me/message/N6HNCHVICUXWD1" className="text-blue-500 underline">https://wa.me/message/N6HNCHVICUXWD1</a><br />
                <br />
                Phone Number: 09067825200, 09076729319
            </>
        ),
        aosDelay: "1600",
        products: [
            {
                img: Image28,
                title: "",
                description: ""
            },
            {
                img: Image29,
                title: "",
                description: ""
            },
            {
                img: Image30,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 10,
        img: Img10,
        title: "D'Lux Body Essentials",
        description: (
            <>
                Hello everyone,
                At D’lux Body Essentials , we provide quality skincare products, hair care products, makeup products, intimate care products, lovely fragrances, wellness packs for men and women, even tone roll and many others. We have all in all, shop your beauty and cosmetic products from us. All products are nature based and made in Sweden (Oriflame). Bring your skin issues to us, we provide authentic solutions.<br />
                <br />
                PAU mail: <span className="email-text" data-email="dluxbodyessentials.biz@pau.edu.ng">dluxbodyessentials.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <a href="https://www.instagram.com/dlux_body?igsh=NWZqbHB1ZzRkdHdr">@dlux_body</a><br />
                <br />
                WhatsApp: <a href="https://wa.me/+2348165190698" className="text-blue-500 underline">https://wa.me/+2348165190698</a><br />
            </>
        ),
        aosDelay: "1800",
        products: [
            {
                img: Image31,
                title: "",
                description: ""
            },
            {
                img: Image32,
                title: "",
                description: ""
            },
            {
                img: Image33,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 11,
        img: Img11,
        title: "Decor Inn",
        description: (
            <>
                What do we offer?<br />
                - LEDs: to illuminate your space with vibrant and energy-efficient lights.<br />
                - Leaf Vines: to bring the beauty of nature into your space<br />
                - Fragrance Diffusers: to create a calming and alluring atmosphere<br />
                - Wall Posters: to add personality and style to your room<br />
                - Neon Signs: to make a statement and add a pop of color to your space.<br />
                - Neon Strips: to light up your space<br />
                <br />
                PAU mail: <span className="email-text" data-email="decorinn.biz@pau.edu.ng">decorinn.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <a href="https://www.instagram.com/dec0r.inn?igsh=MXdlNXdzMzI1dzlzZA==">@dec0r.inn</a><br />
                <br />
                Phone Number: 09059397131
            </>
        ),
        aosDelay: "2000",
        products: [
            {
                img: Image34,
                title: "",
                description: ""
            },
            {
                img: Image35,
                title: "",
                description: ""
            },
            {
                img: Image36,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 12,
        img: Img12,
        title: "Loicette Beads",
        description: (
            <>
                We are so excited to welcome you to the Loicette Beads family where elegant, handcrafted beaded jewelry pieces are produced and delivered.
                Loicette Beads is here to empower individuals to express their personal style and creativity, and to promote the value of relationships (between oneself and others) and bonds through our meticulously crafted pieces.
                The order window for you to place orders will be open every week from Monday to Thursday.
                All deliveries will be made on Saturday at Student Centre by 12 pm.
                So, if you want to revamp your style or even form a deeper connection with your creative self, message us on WhatsApp and be a part of the Bead Buddies family today!!<br />
                <br />
                PAU mail: <span className="email-text" data-email="loicettebeads.biz@pau.edu.ng">loicettebeads.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <a href="https://www.instagram.com/loicettebeads?igsh=NHl6eWVybXN6ZWV6">@loicettebeads</a><br />
                <br />
                WhatsApp: <a href="https://wa.me/message/ETMLU3VEEJHEP1" className="text-blue-500 underline">https://wa.me/message/ETMLU3VEEJHEP1</a><br />
                <br />
            </>
        ),
        aosDelay: "2200",
        products: [
            {
                img: Image37,
                title: "",
                description: ""
            },
            {
                img: Image38,
                title: "",
                description: ""
            },
            {
                img: Image39,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 13,
        img: Img13,
        title: "Runner",
        description: (
            <>
                We are thrilled to announce the launch of an innovative service designed to transform the way we manage our busy lives: RUNNER.
                As students and staff, we often find ourselves juggling multiple responsibilities, from attending classes to meeting deadlines, leaving little time for essential tasks like running market errands or grocery shopping. Now, that is where RUNNER comes in.
                Our mission is simple yet groundbreaking: to provide a seamless solution for all your errand-running needs, ensuring you never have to sacrifice precious time or energy again. With a team of dedicated and reliable runners at your service, you can delegate tasks with confidence, whether it's picking up groceries, buying foodstuffs or handling any other market and grocery related errand on your to-do list.
                Our operation method: we would take orders throughout the week however, deliveries are only done on Mondays and Thursdays.
                The most astounding part of RUNNER is that we deliver at very affordable rates!<br />
                <br />
                PAU mail: <span className="email-text" data-email="runner.biz@pau.edu.ng">runner.biz@pau.edu.ng</span><br />
                <br />
                WhatsApp: <a href="https://api.whatsapp.com/send?phone=%2B2347034192325&text&app_absent=0" className="text-blue-500 underline">https://api.whatsapp.com/send?phone=%2B2347034192325&text&app_absent=0</a><br />
            </>
        ),
        aosDelay: "2400",
    },
    {
        id: 14,
        img: Img14,
        title: "Sunset Dreams",
        description: (
            <>
                Hi Dreamers,Sunset dreams is finally active. We are a sunglasses business that's here to meet your unique taste and style. <br />
                <br />
                PAU mail: <span className="email-text" data-email="sunsetdreams.biz@pau.edu.ng">sunsetdreams.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <a href="https://www.instagram.com/__sunsetdreams?igsh=MTZvNDVyZmY1Njh6NQ==">@__sunsetdreams</a><br />
                <br />
                Phone Number: 09079018368
            </>
        ),
        aosDelay: "2600",
        products: [
            {
                img: Image40,
                title: "",
                description: ""
            },
            {
                img: Image41,
                title: "",
                description: ""
            },
            {
                img: Image42,
                title: "",
                description: ""
            }
        ]
    },
    {
        id: 15,
        img: Img15,
        title: "That One Designer",
        description: (
            <>
                That One Designer is a Graphics design brand that provides better and impactful visual solutions. The idea is to provide Staff and Students of this institution with access to professional designs, regardless of their budget or experience level.<br />
                From class presentation slides to club flyers, to events flyers and pretty much any ad material whatsoever, That One Designer is basically saying "you, worry about school work and other stuff. I'd worry about anything that has to do with design".
                Calm, right?<br />
                <br />
                Now how would this work? Simple! How is this different from any other design brand?<br />
                1. You shoot us a message <br />
                2. We talk, Ideas spark.<br />
                3. I'd do the magic on my end.<br />
                <br />
                PAU mail: <span className="email-text" data-email="sunsetdreams.biz@pau.edu.ng">sunsetdreams.biz@pau.edu.ng</span><br />

                <br />
                Phone Number: 08071312626
            </>
        ),
        aosDelay: "2800",
    },
    {
        id: 16,
        img: Img16,
        title: "Shop With Anastatsia",
        description: (
            <>
                <br />
                I’ll like to briefly introduce my brand shop with Anastasia to you all.<br />
                ‘Shop with Anastasia’ works strenuously to make available numerous aesthetic fashion wears and accessories. SA is popularly identified as a Gen-z and street-wear label and SA’s range of products are;<br />
                - Custom made Tee-shirts, to personalized crochet bags, tote bags , crochet accessories, press on nails, all forms of clothing wears, jewelries, hair accessories.<br />
                - Customized bottles, jotters, giftboxes, keychains/keyholders, customized necklaces, earrings, waist chains, anklets just to mention a few."<br />
                <br />
                PAU mail: <span className="email-text" data-email="shopwithanastasia.biz@pau.edu.ng">shopwithanastasia.biz@pau.edu.ng</span><br />
                <br />
                Instagram: <a href="https://instagram.com/shop.with_anastasia?igshid=YmMyMTA2M2Y= ">@shop.with_anastasia</a><br />
                <br />
                WhatsApp: <a href="http://wa.me/2348137981771" className="text-blue-500 underline">http://wa.me/2348137981771</a><br />
                <br />
            </>
        ),
        aosDelay: "3000",
        products: [
            {
                img: Image43,
                title: "",
                description: ""
            },
            {
                img: Image44,
                title: "",
                description: ""
            },
            {
                img: Image45,
                title: "",
                description: ""
            },
            {
                img: Image46,
                title: "",
                description: ""
            },
            {
                img: Image47,
                title: "",
                description: ""
            },
            {
                img: Image48,
                title: "",
                description: ""
            }
        ]
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
