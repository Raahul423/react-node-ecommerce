import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Images } from '../../../assets/Assests';

const HomeSlider = () => {
  return (
      <div className='my-container'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          {Images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img className='w-full rounded-2xl' src={img.Image} alt="" />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>

  )
}

export default HomeSlider
