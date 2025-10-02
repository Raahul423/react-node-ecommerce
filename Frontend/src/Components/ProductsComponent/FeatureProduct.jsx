import React from 'react'
import { SwiperSlide  , Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const FeatureProduct = () => {

    return (
        <section className='my-container'>
            <div className='flex justify-between py-8'>
                <h1 className='text-gray-900/90 text-2xl font-medium'>Featured Products</h1>
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

export default FeatureProduct
