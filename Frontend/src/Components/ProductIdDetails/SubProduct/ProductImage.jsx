import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Productidimage } from '../../../assets/Assests';
import ReactImageMagnify from 'react-image-magnify';

import "swiper/css/navigation";
import "swiper/css/pagination";
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

            <div className="part-2  w-[80%] rounded-md overflow-visible">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    centeredSlides={true}
                    className="w-full"
                >
                    {Productidimage.map((img, idx) => (
                        <SwiperSlide key={idx} className="w-full max-w-md h-96">
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: 'product',
                                        isFluidWidth: true,
                                        src: img.Image,
                                    },
                                    largeImage: {
                                        src: img,Image,
                                        width: 1500,
                                        height: 1800,
                                    },
                                    lensStyle: { backgroundColor: 'rgba(0,0,0,0.2)' },
                                    isHintEnabled: true,
                                    enlargedImageContainerDimensions: {
                                        width: '150%',
                                        height: '150%',
                                    },
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default ProductImage



//  <img className='rounded-md' src={img.Image} alt="error" />
