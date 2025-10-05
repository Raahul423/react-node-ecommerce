import React from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide, Swiper } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import { AiOutlineShoppingCart } from "react-icons/ai";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';


const ReuseableComponents = () => {

    return (
        <section className='my-container'>
            <div className='flex justify-between py-6'>
                <h1 className='text-gray-900/90 text-2xl font-medium'>Latest Products</h1>
            </div>

            <div>
                <Swiper
                    navigation={true}
                    slidesPerGroup={3}
                    slidesPerView={6}
                    spaceBetween={10}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <div className=''>
                        {Array.from({ length: 15 }).map((_, i) => (
                            <SwiperSlide key={i} className=''>
                                <div className='rounded-md  shadow shadow-gray-500 '>
                                    <div className=''>
                                        <img className='h-50 w-full object-cover' src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg" alt="error" />
                                    </div>

                                    <div className='p-4 flex flex-col gap-1'>
                                        <p className='!text-md text-gray-900/80'>Flying Machine</p>
                                        <p className='!text-[1.1em] font-medium'>women-wide leg high-rise...</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                        </Stack>

                                        <div className='flex justify-between'>
                                            <p className='text-gray-900/80 line-through'>₹1,299</p>
                                            <p className='text-primary'>₹999</p>
                                        </div>

                                        <Button className='flex gap-4 items-center w-full !border-1 !border-primary group hover:!border-black hover:!bg-black'>
                                            <AiOutlineShoppingCart className='text-primary text-xl group-hover:text-white ' />
                                            <p className='text-primary group-hover:text-white text-sm'>Add to Cart</p>
                                        </Button>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>

        </section>
    )
}

export default ReuseableComponents
