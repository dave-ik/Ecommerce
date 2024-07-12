import React from 'react';
import Heading from "../Shared/Heading";

// import images 
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
    {
        title: "MODEL UN CONFERENCE IN PAU!!!!",
        subtitle: "Pan-Atlantic University is hosting its first-ever MODEL UN conference and YOU are invited. For 3 incredible days, you will get to experience the workings of the actual United Nations. This is your chance to make friends, form alliances, engage in diplomatic betrayals and just have fun all while coming up with solutions to real-world problems with future leaders like you.",
        published: "July 12, 2024 by Model UN Club PAU",
        image: Img1,
        aosDelay: "0",
    },
    {
        title: "Building Your Brand: How to stand out in a crowded marketplace",
        subtitle: "Your brand is a story unfolding across all customer touchpoints-Jonah Sachs. We would like to invite you to join us for the next edition of PAU Insight Podcast where we dive into the world of personal branding with Peace Itimi- Founder & Chief Storyteller at Founder's Connect to discuss: Building your Brand. How to Stand out in a Crowded Marketplace.",
        published: "July 12, 2024 by PAU Communication Office",
        image: Img2,
        aosDelay: "200",
    },
    {
        title: "Fireside Chat",
        subtitle: "Lagos Business School is extending an invitation to members of the PAU community to attend a fireside chat with Patrick Njoroge, the former Governor of the Central Bank of Kenya. The conversation is themed ,Leadership in Financial Innovation: Driving Africa's Economic Transformation. This is a unique opportunity to gain insights from one of Africa's most influential economic leaders.",
        published: "July 11, 2024 by PAU Communication Office",
        image: Img3,
        aosDelay: "400",
    },
]
const Blogs = () => {
    return (
        <div className='my-12'>
            <div className="container">
                {/* Header section */}
                <Heading title="Recent News" subtitle={"Explore Recent News"} />

                {/* Blog section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Blog card */}
                    {BlogData.map((data) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.title}
                            className='bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md'
                        >
                            {/* Image section */}
                            <div className='overflow-hidden rounded-lg mb-2'>
                                <img
                                    src={data.image}
                                    alt=""
                                    className='w-full h-[180px] object-cover rounded-lg hover:scale-105 duration-500'
                                />
                            </div>
                            {/* Content section */}
                            <div className='space-y-1'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-semibold text-sm'>{data.title}</p>
                                <p className='text-xs text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs
