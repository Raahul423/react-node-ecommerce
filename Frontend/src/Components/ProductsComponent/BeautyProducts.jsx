import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ReuseableComponents from '../ReuseableComponents';

const BeautyProducts = () => {
    return (
        <section className='my-container'>
           <ReuseableComponents title={"Beauty Products"}/>
        </section>
    )
}

export default BeautyProducts
