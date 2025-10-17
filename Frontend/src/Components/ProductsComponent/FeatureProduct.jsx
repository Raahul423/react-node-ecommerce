import React from 'react'
import { SwiperSlide  , Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';


const FeatureProduct = () => {

    return (
        <section className='my-container'>
           <ReuseableComponents title={"Feature Products"}/>
        </section>
    )
}

export default FeatureProduct
