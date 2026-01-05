import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Images } from '../../../assets/Assests';

const HomeSlider = () => {
  return (
      <Swiper
        centeredSlides={true}
        loop={true}
        spaceBetween={25}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true, 
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className='!px-2'
      >
        {Images.map((img, idx) => (
          <SwiperSlide key={idx} className='!w-[100%]'>
            <img
              src={img.Image}
              alt="slider"
              className="
    w-full
    h-[180px]
    sm:h-[240px]
    md:h-[320px]
    lg:h-[420px]
    object-cover
    rounded-md
  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default HomeSlider
