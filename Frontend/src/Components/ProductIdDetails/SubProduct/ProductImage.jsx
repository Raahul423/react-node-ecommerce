import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Productidimage } from '../../../assets/Assests';
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'
import { Pagination } from 'swiper/modules';


import "swiper/css/pagination";
const ProductImage = () => {

    const [isclick, setIsclick] = useState(0)
    const swiperref = useRef(null)

    const goto = (idx) => {
        setIsclick(idx)
        swiperref.current?.slideToLoop(idx)
    }

    return (
        <section className='w-full flex gap-2 '>

            <div className='part-1 w-[20%] h-full flex flex-col gap-4 items-center '>
                {Productidimage.map((img, idx) => (
                    <div key={idx} onClick={() => goto(idx)} className={`cursor-pointer h-23 w-20 overflow-hidden rounded-md opacity-50 ${isclick === idx ? 'opacity-100' : ''} `}>
                        <img className='object-cover' src={img.Image} alt="error" />
                    </div>
                ))}
            </div>



            <div className="part-2  w-[80%] rounded-md overflow-visible">
                <Swiper
                    onSwiper={(swiper) => (swiperref.current = swiper)}
                    onSlideChange={(swiper) => {
                        setIsclick(swiper.realIndex);
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    className="w-full"
                    modules={[Pagination]}

                >
                    {Productidimage.map((img, idx) => (
                        <SwiperSlide key={idx} className="w-full rounded-md">
                            <InnerImageZoom className='rounded-md h-[500px]' src={img.Image} zoomType='hover' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default ProductImage

