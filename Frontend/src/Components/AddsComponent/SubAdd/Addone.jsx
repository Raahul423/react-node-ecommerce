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
    <div className='w-full flex gap-6 h-111 overflow-hidden'>
      <div className='col1 w-[70%]'>


        <Swiper
          spaceBetween={30}
          autoplay={true}
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
              <img className='rounded-md ' src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" />

              <div className='move absolute top-0 flex flex-col p-20 gap-8 -right-200 opacity-0 duration-700 transition-all '>
                <p className='!text-xl'>Big Saving Days Sale</p>
                <h1 className='!text-4xl font-semibold text-gray-900/80'>Buy New Trend <br />Women Black Cloth</h1>
                <div className='flex gap-2 items-center'>
                  <p>Starting At Only</p>
                  <h2 className='text-3xl text-primary'>₹ 1,550.00</h2>
                </div>

                <Button className='!w-30 !bg-primary !text-white !font-medium !p-2'>SHOP NOW</Button>
              </div>
            </div>
          </SwiperSlide>





          <SwiperSlide>
            <div className='relative overflow-hidden'>
              <img className='rounded-md' src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />

              <div className='move absolute top-0 -right-200 flex flex-col p-25 gap-8 transition-all duration-700'>
                <p className='!text-xl'>Big Saving Days Sale</p>
                <h1 className='!text-4xl text-gray-900/80 font-semibold'>Apple Iphone 13<br /> 128GB , Pink</h1>
                <div className='flex gap-2 items-center'>
                  <p>Starting At Only</p>
                  <h2 className='text-3xl text-primary'>₹ 35,500.00</h2>
                </div>

                <Button className='!w-30 !bg-primary !text-white !font-medium !p-2'>SHOP NOW</Button>


              </div>
            </div>




          </SwiperSlide>

        </Swiper>
      </div>




      <div className='col2 w-[30%] flex flex-col gap-4 overflow-hidden '>

        <div className=' relative overflow-hidden rounded-xl'>
          <img className='w-full rounded-xl hover:scale-105' src="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" alt="error" />
          <div className='p-6 absolute top-0 flex flex-col gap-2 right-0'>
            <p className='!text-xl'>Buy Men's <br />
              Footwear with <br />
              low price</p>
            <p className='text-primary !text-xl'>₹1500</p>
            <Button className='!bg-primary !text-white'>SHOP NOW</Button>

          </div>

        </div>

        <div className='overflow-hidden rounded-xl relative'>
          <img className='w-full hover:scale-105 rounded-xl' src="https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg" alt="" />

          <div className='py-12 px-6 absolute top-0 flex flex-col gap-2 left-0'>
            <p className='!text-xl'>Buy Apple Iphone
            </p>
            <p className='text-primary !text-xl'>₹35000</p>
            <Button className='!bg-primary !text-white'>SHOP NOW</Button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Addone
