import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { DialogContext } from '../../../Context/DialogComponent';
import { useContext, useEffect, useState } from 'react';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';

const ReuseableComponents = ({ title, products = [] }) => {
    const { isAuth, toastMessage } = useContext(MyContext);
    const navigate = useNavigate();
    const { setIsopendialogbox } = useContext(DialogContext);
    const [wishlist, setWishlist] = useState({});

    useEffect(() => {
        const exist = async () => {
            const res = await api.get("/wishlist/wishlist-products");

            const map = {}
            res?.data?.wishlistItems.forEach(item => {
                map[item?.productId?._id] = true;
            });
            setWishlist(map);
        }
        exist();
    }, []);

    const Handleclick = async (productid) => {
        console.log(productid);
        
        if (!isAuth) {
            toastMessage("error", "Login to Proceed...")
            navigate("/login")
            return;
        }

        const iswishlisted = wishlist[productid];

        setWishlist((prev) => ({
            ...prev,
            [productid]: !iswishlisted
        }));

        try {
            if (!iswishlisted) {
                const res = await api.post("/wishlist/add-items", { productId: productid });
                toastMessage("success", res?.data?.message);
            } else {
                const res = await api.delete("/wishlist/remove-products", { productId: productid });
                toastMessage("success", res?.data?.message);
            }
        } catch (error) {
            setWishlist((prev) => ({
                ...prev,
                [productid]: iswishlisted
            }));
            console.error(error?.message);
        }
    }

    const handlecart = async(productId)=>{
        if(!isAuth){
            toastMessage("error","Login to proceed...")
            navigate("/login");
            return;
        }
        try {
            const res = await api.post("/cartitems/add-items",{productId,quantity:1});
            toastMessage("success",res?.data?.message);
        } catch (error) {
            console.error(error?.message);
        }
    }


    return (
        <section>
            <div className='flex justify-between md:py-8 py-4'>
                <h1 className='text-gray-900/90 text-2xl font-medium'>{title}</h1>
            </div>


            <Swiper
                navigation={true}
                spaceBetween={16}
                loop={false}
                freeMode={false}
                resistanceRatio={0}
                watchOverflow={true}
                modules={[Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                    },
                    1280: {
                        slidesPerView: 5,
                        slidesPerGroup: 2,
                    },
                }}
                className="mySwiper !overflow-hidden !p-2"
            >
                <div className='w-fit overflow-hidden'>
                    {products.slice(0, 10).map((items, idx) => (
                        <SwiperSlide key={idx} className=''>
                            <div className='rounded-md shadow shadow-gray-500 md:w-60 w-40'>

                                <div className='relative overflow-hidden group md:h-70 h-40'>
                                    <Link to={`/product/${items?._id}`}>
                                        <img className='md:h-70 md:w-70 object-cover rounded-md p-2 object-top' src={items.images[0].url} alt="error" />

                                        <img className='max-md:hidden h-70 w-70 rounded-md group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover p-2 object-top' src={items.images[1]?.url} alt="error" />

                                    </Link>

                                    <div className='flex flex-col  justify-center items-center gap-1 absolute -top-50 transition-all duration-500 opacity-0 group-hover:opacity-100 right-3 group-hover:top-3'>
                                        <div onClick={() => setIsopendialogbox(true)} className='info'>
                                            <MdOutlineZoomOutMap className='text-xl hover:!stroke-white hover:!fill-white' />
                                        </div>


                                        <div className="info">
                                            {wishlist[items?._id] ? (
                                                <FaHeart
                                                    onClick={() => Handleclick(items?._id)}
                                                    className="text-xl text-primary cursor-pointer"
                                                />
                                            ) : (
                                                <FaRegHeart
                                                    onClick={() => Handleclick(items?._id)}
                                                    className="text-xl cursor-pointer"
                                                />
                                            )}
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
                                        <p className='text-gray-900/80 line-through'>₹{items?.oldprice}</p>
                                        <p className='text-primary'>₹{items?.price}</p>
                                    </div>

                                    <Button onClick={()=>handlecart(items?._id)} className='flex md:gap-4 gap-2 items-center w-full !border-1 !border-primary group hover:!border-black hover:!bg-black'>
                                        <AiOutlineShoppingCart className='text-primary md:text-xl group-hover:text-white ' />
                                        <p className='text-primary group-hover:text-white text-sm max-md:!text-[10px]'>Add to Cart</p>
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
