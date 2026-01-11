import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Button } from '@mui/material';

const Addone = () => {
  return (
    <section className='w-full md:flex gap-6 md:h-111 overflow-hidden grid'>
      <div className='w-full md:w-[70%]'>

        <Swiper
          spaceBetween={30}
          autoplay={{
            delay:2500,
            disableOnInteraction:false
          }}
          effect={'fade'}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='relative overflow-hidden'>
              <img className='rounded-md max-md:h-50 w-full object-cover' src="addimage.jpg" />

              <div className='move absolute top-0 flex flex-col md:p-20 md:gap-8 -right-200 opacity-0 duration-700 transition-all max-md:py-10'>
                <p className='md:!text-xl !text-xs'>Big Saving Days Sale</p>
                <h1 className='md:!text-4xl !text-[15px] font-semibold text-gray-900/80'>Buy New Trend <br />Women Black Cloth</h1>
                <div className='flex gap-2 items-center'>
                  <p className='max-md:!text-xs'>Starting At Only</p>
                  <h2 className='md:text-3xl !text-md text-primary'>₹ 1,550.00</h2>
                </div>

                <Button className='md:!w-30 !w-20 !bg-primary !text-white !font-medium md:!p-2 !p-1  !text-[10px]'>SHOP NOW</Button>
              </div>
            </div>
          </SwiperSlide>





          <SwiperSlide>
            <div className='relative overflow-hidden'>
              <img className='rounded-md max-md:h-50 object-cover' src="/addimage2.jpg" />

              <div className='move absolute top-0 flex flex-col md:p-20 md:gap-8 -right-200 opacity-0 duration-700 transition-all max-md:py-10'>
                <p className='md:!text-xl !text-xs'>Big Saving Days Sale</p>
                <h1 className='md:!text-4xl !text-[15px] font-semibold text-gray-900/80'>Apple Iphone 13<br /> 128GB , Pink</h1>
                <div className='flex gap-2 items-center'>
                  <p className='max-md:!text-xs'>Starting At Only</p>
                  <h2 className='md:text-3xl !text-md text-primary'>₹ 35,500.00</h2>
                </div>

                <Button className='md:!w-30 !w-20 !bg-primary !text-white !font-medium md:!p-2 !p-1  !text-[10px]'>SHOP NOW</Button>

              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>




      <div className='w-full md:w-[30%] md:flex md:flex-col grid grid-cols-2 gap-4 overflow-hidden '>

        <div className='max-md:h-30 relative overflow-hidden md:rounded-xl rounded-md'>
          <img className='h-full w-full object-cover hover:scale-105' src="/addimage3.jpg" alt="error" />
          <div className='md:p-6 p-2 absolute top-0 flex flex-col md:gap-2 gap-1 right-0'>
            <p className='md:!text-xl !text-xs'>Buy Men's <br />
              Footwear with <br />
              low price</p>
            <p className='text-primary md:!text-xl !text-xs'>₹1500</p>
            <Button className='!bg-primary !text-white max-md:!text-xs'>SHOP NOW</Button>
          </div>
        </div>

        <div className='overflow-hidden md:rounded-xl rounded-md relative'>
          <img className='h-full w-full object-cover hover:scale-105' src="/addimage4.jpg" alt="error" />

          <div className='md:py-12 md:px-6 py-6 px-2 absolute top-0 flex flex-col gap-2 left-0'>
            <p className='md:!text-xl !text-xs'>Buy Apple Iphone
            </p>
            <p className='text-primary md:!text-xl !text-xs'>₹35000</p>
            <Button className='!bg-primary !text-white !text-xs'>SHOP NOW</Button>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Addone
