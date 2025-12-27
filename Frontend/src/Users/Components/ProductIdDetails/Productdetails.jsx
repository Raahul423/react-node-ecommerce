import { useRef, useState } from 'react'
import { Button, Pagination, Rating } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import api from '../../../Utils/api'

const Productdetails = ({ singleproducts }) => {

  const [isclick, setIsclick] = useState(0)
  const [count, setCount] = useState(1)
  const [isactive, setIsactive] = useState(null)
  const swiperref = useRef(null)
  const [wishlist, setWishlist] = useState(false)

  const Addcart = async () => {
    try {
      const productId = singleproducts?._id

      const res = await api.post("/cartitems/add-items",{
        productId,
        quantity:count
      });
      console.log(res);
    } catch (error) {
      console.error(error?.message);
    }
  }


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
    <section className='grid grid-cols-[40%_60%] gap-12  my-8 h-[500px] py-4'>


      <div className='grid grid-cols-[20%_80%] items-center gap-2'>
        <div className='part-1 h-full flex flex-col gap-4 items-center '>
          {singleproducts?.images?.map((img, idx) => (
            <div key={idx} onClick={() => goto(idx)} className={`cursor-pointer h-20 w-20 p-1 shadow-md shadow-black overflow-hidden rounded-md opacity-50 ${isclick === idx ? 'opacity-100' : ''} `}>
              <img className='object-cover h-full w-full object-top' src={img?.url} alt="error" />
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
            className='h-full '
          >
            {singleproducts?.images?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <InnerImageZoom className='rounded-md h-120 w-full' src={img?.url} zoomType='hover' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>




      <div className='col-2 grid justify-center gap-5'>
        <h1>{singleproducts?.name}</h1>
        <div className='flex items-center gap-6'>
          <div className='flex items-center'>
            <p className='text-gray-800/80'>Brands:</p>
            <p>{singleproducts?.brand}</p>
          </div>

          <Rating value={Number(singleproducts?.rating)} readOnly />

          <p>Review(23)</p>
        </div>

        <div className='flex gap-4 items-center'>
          <div className='flex gap-4'>
            <p className='line-through text-gray-800/80 !text-2xl'>₹{singleproducts?.oldprice}</p>
            <p className='!text-2xl text-primary'>₹{singleproducts?.price}</p>
          </div>

          <div className='flex'>
            <p>Available In Stock:</p>
            <p className='!text-green-700/80'>{singleproducts?.countInstock} Items</p>
          </div>

        </div>



        <div>
          <p>{singleproducts?.desc}</p>
        </div>

        <div className='flex items-center gap-2'>
          <p className="font-semibold">Options:</p>

          <div className="flex gap-2 cursor-pointer">
            {/* ELECTRONICS -> RAM */}
            {singleproducts?.category?.name?.toLowerCase() === "electronic" &&
              singleproducts?.productRam.map((ram, idx) => (
                <div
                  key={idx}
                  onClick={() => setIsactive(idx)}
                  className={`px-2 border border-black rounded-sm ${isactive === idx ? 'boxactive' : 'boxhover'}`}
                >
                  {ram} GB
                </div>
              ))
            }

            {/* FASHION -> SIZE */}
            {singleproducts?.category?.name?.toLowerCase() === "fastion" &&
              singleproducts?.size?.map((size, idx) => (
                <div
                  key={idx}
                  onClick={() => setIsactive(idx)}
                  className={`px-2 border border-black rounded-sm ${isactive === idx ? 'boxactive' : 'boxhover'}`}
                >
                  {size}
                </div>
              ))
            }

            {/* GROCERIES -> WEIGHT */}
            {singleproducts?.category?.name?.toLowerCase() === "groceries" &&
              singleproducts?.productWeight?.map((weight, idx) => (
                <div
                  key={idx}
                  onClick={() => setIsactive(idx)}
                  className={`px-2 border border-black rounded-sm ${isactive === idx ? 'boxactive' : 'boxhover'}`}
                >
                  {weight} g
                </div>
              ))
            }
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


          <Button onClick={Addcart} className='flex gap-4 items-center w-fit !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-4'>
            <AiOutlineShoppingCart className='text-white text-xl' />
            <p className='text-white text-sm'>Add to Cart</p>
          </Button>
        </div>

        <div className='flex items-center gap-2'>
          <div onClick={() => setWishlist(!wishlist)}>
            {wishlist ? <FaHeart className='text-2xl cursor-pointer text-primary' /> : <FaRegHeart className='text-2xl cursor-pointer' />}
          </div>

          <p className='hover:text-primary'>Add to Wishlist</p>
        </div>
      </div>
    </section>
  )
}

export default Productdetails
