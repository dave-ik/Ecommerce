import React from 'react';
import { FaMobile, FaHeadphonesAlt, FaWallet, FaRegThumbsUp } from "react-icons/fa";

const ServiceData = [
    {
        id:1,
        icon: <FaRegThumbsUp className='text-4xl md:text-5xl text-primary' />,
        title: "Ease of Use",
        description: "An easy to use website",
    },
    {
        id: 2,
        icon: <FaMobile className='text-4xl md:text-5xl text-primary' />,
        title: "Mobile Responsive",
        description: "Usable on mobile devices as well",
    },
    {
        id: 3,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title: "Available 24/7",
        description: "24/7 Availability",
    },
    {
        id: 4,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: "Secure Payment",
        description: "COMING SOON!!!!!",
    },
]

const Services = () => {
  return (
    <div>
        <div className='container my-14 md:my-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {ServiceData.map((data) => (
                    <div key = {data.id} className='flex flex-col items-start sm:flex:row gap-4 '>
                        {data.icon}
                        <div>
                        <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                        <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Services