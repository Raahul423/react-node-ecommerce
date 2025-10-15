import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Productidimage } from '../../../assets/Assests';
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'


import "swiper/css/navigation";
import "swiper/css/pagination";
const ProductImage = () => {
    return (
        <section className='w-full flex gap-2 '>

            <div className='part-1 w-[20%] h-full flex flex-col gap-4 items-center '>
                {Productidimage.map((img, idx) => (
                    <div key={idx} className='cursor-pointer h-23 w-20 overflow-hidden rounded-md'>
                        <img className='object-cover' src={img.Image} alt="error" />
                    </div>
                ))}
            </div>

            <div className="part-2  w-[80%] rounded-md overflow-visible">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    className="w-full"
                    
                >
                    {Productidimage.map((img, idx) => (
                        <SwiperSlide key={idx} className="w-full rounded-md !h-[550px] bg-amber-800">
                            <InnerImageZoom className='rounded-md h-[550px]' src={img.Image} zoomType='hover'/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default ProductImage

