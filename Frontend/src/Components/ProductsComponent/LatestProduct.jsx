import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { SwiperSlide,Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const LatestProduct = () => {
  return (
    <section className='my-container '>
        <div className='flex justify-between py-6'>
            <h1 className='text-gray-900/90 text-2xl font-medium'>Latest Products</h1>
            <button className='py-2 px-4 text-gray-900/90 items-center flex gap-2 bg-gray-500/20 rounded-md cursor-pointer hover:bg-gray-500/50 transition-all'>Veiw All <MdArrowRightAlt /></button>
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

export default LatestProduct
