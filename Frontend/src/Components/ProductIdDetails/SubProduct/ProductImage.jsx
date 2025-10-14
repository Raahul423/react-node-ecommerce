import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Productidimage } from '../../../assets/Assests';

const ProductImage = () => {
    return (
        <section className='w-full flex gap-2 '>

            <div className='part-1 w-[20%] h-full flex flex-col gap-4 items-center '>
                {Productidimage.map((img, idx) => (
                    <div key={idx}>
                        <img className='h-20 w-20 object-cover rounded-md' src={img.Image} alt="error" />
                    </div>
                ))}
            </div>

            <div className='part-2 w-[80%] overflow-hidden rounded-md'>
                <Swiper className="mySwiper">
                    {Productidimage.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img className='rounded-md' src={img.Image} alt="error" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default ProductImage
