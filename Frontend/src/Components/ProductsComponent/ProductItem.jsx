import React, { useState } from 'react'
import { Button, Tab, Tabs } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import Box from '@mui/material/Box';
import { data } from '../../assets/Assests';


const ProductItem = () => {

     const [value, setValue] = useState(0);

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
    return (
        <section className='my-container !mb-25'>
            <div className='flex w-full py-10 items-center'>
                <div className='col1 w-[40%] '>
                    <h1 className='text-2xl font-medium'>Popular Products</h1>
                    <p className='text-gray-900 '>Do not miss the current offers until the end of March.</p>
                </div>

                <div className='col2 w-[60%]  flex items-center px-4 overflow-hidden'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                    >
                        {data.map((items,idx)=>(
                            <Tab key={idx} label={items} />
                        ))}
                    </Tabs>
                </div>

            </div>

            <div>
                <Swiper
                    navigation={true}
                    slidesPerGroup={3}
                    slidesPerView={6}
                    spaceBetween={20}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <div className=''>
                        {Array.from({ length: 15 }).map((_, i) => (
                            <SwiperSlide key={i} className='!gap-4'>
                                <div className='min-h-80 w-52 rounded-md  shadow shadow-gray-500'>
                                    hi
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default ProductItem
