import { useRef, useState } from 'react'
import { Button, Pagination, Rating } from '@mui/material'
import { Productidimage } from '../../../assets/Assests'
import { Swiper, SwiperSlide } from 'swiper/react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'

const Productdetails = () => {

  const [isclick, setIsclick] = useState(0)
  const [count, setCount] = useState(1)
  const [isactive, setIsactive] = useState(null)
  const swiperref = useRef(null)

  const goto = (idx) => {
    setIsclick(idx)
    swiperref.current?.slideToLoop(idx)
  }

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount((prev) => prev > 1 ? prev - 1 : 1);
  }

  return (
    <section className='grid grid-cols-[40%_60%] gap-12 items-center my-8'>


      <div className='grid grid-cols-[20%_80%]  gap-2'>
        <div className='part-1 h-full flex flex-col gap-4 items-center '>
          {Productidimage.map((img, idx) => (
            <div key={idx} onClick={() => goto(idx)} className={`cursor-pointer h-23 w-20 overflow-hidden rounded-md opacity-50 ${isclick === idx ? 'opacity-100' : ''} `}>
              <img className='object-cover' src={img.Image} alt="error" />
            </div>
          ))}
        </div>



        <div className="part-2">
          <Swiper
            onSwiper={(swiper) => (swiperref.current = swiper)}
            onSlideChange={(swiper) => {
              setIsclick(swiper.realIndex);
            }}
            pagination={{
              dynamicBullets: true,
            }}
            slidesPerView={1}
            spaceBetween={15}
            centeredSlides={true}
            modules={Pagination}

          >
            {Productidimage.map((img, idx) => (
              <SwiperSlide key={idx} className="w-full rounded-md">
                <InnerImageZoom className='rounded-md h-[500px]' src={img.Image} zoomType='hover' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='col-2 grid justify-center gap-5'>
        <h1>Men Opaque Casual Shirt</h1>
        <div className='flex items-center gap-6'>
          <div className='flex items-center'>
            <p className='text-gray-800/80'>Brands:</p>
            <p>CLAFOUTIS</p>
          </div>

          <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />

          <p>Review(23)</p>
        </div>

        <div className='flex gap-6'>
          <div className='flex w-40 justify-between '>
            <p className='line-through text-gray-800/80 !text-2xl'>₹1450</p>
            <p className='!text-2xl text-primary'>₹1650</p>
          </div>

          <div className='flex'>
            <p>Available In Stock:</p>
            <p className='!text-green-700/80'>4641 Items</p>
          </div>

        </div>



        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore quos, quis dolorem ex doloremque aspernatur sint distinctio quo at suscipit numquam cum. Doloremque consequatur delectus voluptatem incidunt quibusdam sint.</p>
        </div>

        <div className='flex items-center gap-2'>
          <div>
            <p>Size:</p>
          </div>

          <div
           className='flex gap-2 cursor-pointer'>
            {["S", "M", "L", "XL"].map((size, idx) => (
              <div onClick={() => setIsactive(idx)} className={`px-2 border border-black rounded-sm ${isactive === idx ? 'boxactive' : 'boxhover'}`} key={idx}>{size}</div>
            ))}
          </div>
        </div>

        <div>
          <p>Free Shipping (Est. Delivery Time 2-3 Days)</p>
        </div>

        <div className='flex gap-6 items-center'>
          <div className='rounded-md border border-b flex items-center p-1'>
            <div className='px-4'>
              <p>{count}</p>
            </div>
            <div className='flex flex-col count'>
              <Button onClick={increase} className='btn'>
                <MdOutlineKeyboardArrowUp />
              </Button>

              <Button onClick={decrease} className='btn'>
                <MdOutlineKeyboardArrowDown />
              </Button>
            </div>
          </div>


          <Button className='flex gap-4 items-center w-fit !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black'>
            <AiOutlineShoppingCart className='text-white text-xl' />
            <p className='text-white text-sm'>Add to Cart</p>
          </Button>
        </div>

        <div className='flex items-center gap-2'>
          <FaRegHeart className='text-xl' />
          <p className='hover:text-primary'>Add to Wishlist</p>
        </div>
      </div>
    </section>
  )
}

export default Productdetails
