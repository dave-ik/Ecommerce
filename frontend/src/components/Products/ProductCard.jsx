import React from 'react'
import Button from '../Shared/Button'

const ProductCard = ({ data }) => {
    return (
        <div className='mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
                {/* card section */}
                {data.map((data) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        className='group flex flex-col items-center'
                        key={data.id}>
                        <div
                            className='relative'
                        >
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
                            {/* <p className='font-bold'>{data.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard