import React, { useContext, useState } from 'react'
import { Button, Rating, Stack, Tab, Tabs } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import { data } from '../../../assets/Assests';
import { DialogContext } from '../../../Context/DialogComponent';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const ProductItem = () => {

     const { setIsopendialogbox } = useContext(DialogContext)

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
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
                        {data.map((items, idx) => (
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
                                    <div className='relative overflow-hidden group h-60'>

                                        <Link to={'/product/786987'}>
                                            <img className='h-60 w-full object-cover rounded-md' src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="error" />

                                            <img className='h-60 w-full rounded-md group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover' src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" alt="error" />

                                        </Link>

                                        <div className='flex flex-col  justify-center items-center gap-1 absolute -top-50 transition-all duration-500 opacity-0 group-hover:opacity-100 right-3 group-hover:top-3'>
                                            <div onClick={() => setIsopendialogbox(true)} className='info'>
                                                <MdOutlineZoomOutMap className='text-xl hover:!stroke-white hover:!fill-white' />
                                            </div>


                                            <div className='info'>
                                                <FaRegHeart className='text-xl hover:!stroke-white hover:!fill-white' />
                                            </div>
                                        </div>
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

export default ProductItem
