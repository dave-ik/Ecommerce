import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/s1.png";
import Image2 from "../../assets/category/s2.png";
import Image3 from "../../assets/category/s3.png";
import Button from "../../components/Shared/Button";
import { useNavigate } from 'react-router-dom';


const HeroData = [
    {
        id: 4,
        img: Image1,
        subtitle: "Your go-to scents",
        title: "100",
        title2: "Perscenttt",
    },
    {
        id: 7,
        img: Image2,
        subtitle: "Delicious Treats",
        title: "With Its.....",
        title2: "Cake O'Clock",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Glow up with...",
        title: "Your favorite plug",
        title2: "Glow City",
    }
]

const Hero = ({ handleOrderPopup }) => {
    const navigate = useNavigate();

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }

    const handleShopNavigation = (id) => {
        navigate(`/business/${id}`); // Navigate to the details page of the business
    }

    return (
        <div className='container'>
            <div
                className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'
            >
                <div className='container pb-8 sm:pb-0'>
                    {/* Hero Section */}
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text content section */}
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                                            {data.subtitle}
                                        </h1>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-5xl sm:text-6xl lg:text-7xl font-bold '>
                                            {data.title}
                                        </h1>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>
                                            {data.title2}
                                        </h1>
                                        <div
                                            data-aos="fade-up"
                                            data-aos-offset="0"
                                            data-aos-duration="500"
                                            data-aos-delay="300"
                                        >
                                            <Button
                                                text="Shop"
                                                bgColor="bg-primary"
                                                textColor="text-white"
                                                handler={() => handleShopNavigation(data.id)} 
                                            />
                                        </div>
                                    </div>
                                    {/* Img Section */}
                                    <div className='order-1 sm:order-2'>
                                        <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative z-10'
                                        >
                                            <img
                                                src={data.img}
                                                alt=""
                                                // className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative  z-40'
                                                 className='w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero