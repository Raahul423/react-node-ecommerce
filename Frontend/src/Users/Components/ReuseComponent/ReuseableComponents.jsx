import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { DialogContext } from '../../../Context/DialogComponent';
import { useContext } from 'react';

const ReuseableComponents = ({ title, products = [] }) => {
    const { setIsopendialogbox } = useContext(DialogContext);

    return (
        <section>
            <div className='flex justify-between py-10'>
                <h1 className='text-gray-900/90 text-2xl font-medium'>{title}</h1>
            </div>


            <Swiper
                navigation={true}
                slidesPerGroup={2}
                slidesPerView={6}
                spaceBetween={12}
                modules={[Navigation]}
                className="mySwiper"
            >
                <div className='w-fit overflow-hidden'>
                    {products.slice(0, 15).map((items, idx) => (
                        <SwiperSlide key={idx} className=''>
                            <div className='rounded-md shadow shadow-gray-500 w-60'>

                                <div className='relative overflow-hidden group h-70'>
                                    <Link to={`/product/${items?._id}`}>
                                        <img className='h-70 w-70 object-cover rounded-md p-2 object-top' src={items.images[0].url} alt="error" />

                                        <img className='h-70 w-70 rounded-md group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover p-2 object-top' src={items.images[1]?.url} alt="error" />

                                    </Link>

                                    <div className='flex flex-col  justify-center items-center gap-1 absolute -top-50 transition-all duration-500 opacity-0 group-hover:opacity-100 right-3 group-hover:top-3'>
                                        <div onClick={() => setIsopendialogbox(true)} className='info'>
                                            <MdOutlineZoomOutMap className='text-xl hover:!stroke-white hover:!fill-white' />
                                        </div>


                                        <div className='info'>
                                            <FaRegHeart className='text-xl hover:!stroke-white hover:!fill-white' />
                                        </div>
                                    </div>
                                </div>

                                <div className='p-4 flex flex-col gap-1'>
                                    <p className='!text-md text-gray-900/80'>{items.brand}</p>
                                    <p className='!text-[1.1em] font-medium two-line-ellipsis'>{items.name}</p>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={items?.rating} precision={items?.rating} readOnly />
                                    </Stack>

                                    <div className='flex justify-between'>
                                        <p className='text-gray-900/80 line-through'>₹{items?.price}</p>
                                        <p className='text-primary'>₹{items?.oldprice}</p>
                                    </div>

                                    <Button className='flex gap-4 items-center w-full !border-1 !border-primary group hover:!border-black hover:!bg-black'>
                                        <AiOutlineShoppingCart className='text-primary text-xl group-hover:text-white ' />
                                        <p className='text-primary group-hover:text-white text-sm'>Add to Cart</p>
                                    </Button>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    )
}

export default ReuseableComponents
