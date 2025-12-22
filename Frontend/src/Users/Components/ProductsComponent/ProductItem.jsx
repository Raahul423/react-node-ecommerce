import React, { useContext, useEffect, useState } from 'react'
import { Button, Rating, Stack, Tab, Tabs } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import { DialogContext } from '../../../Context/DialogComponent';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MyContext } from '../../../Provider';
import api from '../../../Utils/api';


const ProductItem = () => {
    const {toastMessage} = useContext(MyContext)
    const { setIsopendialogbox } = useContext(DialogContext)
    const [value, setValue] = useState(0);
    const [catname, setCatname] = useState([]);
    const [featureProducts, setFeatureProducts] = useState([]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        const Productshowdata = async()=>{
            try {
                const [categoryname, isfeature] = await Promise.all([
                    api.get("/categories/category/root"),
                    api.get("/products/featured-product")
                ]);

                setCatname(categoryname?.data?.rootcategory);
                console.log(categoryname);
                
                setFeatureProducts(isfeature?.data?.isFeatureProduct);
                console.log(isfeature);
                

            } catch (error) {
                if(error?.response){
                    toastMessage("error",error?.response?.data?.message);
                }else{
                    toastMessage("error","Server Error");
                }
            }
        }

        Productshowdata();
    },[toastMessage])

    return (
        <section className='my-container !mb-25'>
            <div className='flex w-full py-10 items-center'>
                <div className='col1 w-[40%] '>
                    <h1 className='text-2xl font-medium'>Popular Products</h1>
                    <p className='text-gray-900 '>Do not miss the current offers until the end of March.</p>
                </div>

                <div className='col2 w-[60%]  flex items-center px-4 overflow-hidden'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                    >
                        {catname.map((cat,idx) => (
                            <Tab key={idx} label={cat?.name} />
                        ))}
                    </Tabs>
                </div>

            </div>

            <div>
                <Swiper
                    navigation={true}
                    slidesPerGroup={3}
                    slidesPerView={6}
                    spaceBetween={20}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <div className=''>
                        {featureProducts.map((product,idx) => (
                            <SwiperSlide key={idx} className='!gap-4'>
                                <div className='h-full w-52 rounded-md  shadow shadow-gray-500'>
                                    <div className='relative overflow-hidden group h-60'>

                                        <Link to={'/product/786987'}>
                                            <img className='h-60 w-full object-cover object-top rounded-md' src={product.images[0]?.url} alt="error" />

                                            <img className='h-60 w-full rounded-md group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover object-top' src={product.images[1]?.url} alt="error" />

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
                                        <p className='!text-md text-gray-900/80'>{product?.brand}</p>
                                        <p className='!text-[1.1em] font-medium two-line-ellipsis'>{product?.name}</p>
                                        <Stack>
                                            <Rating name="half-rating-read"  precision={product?.rating} readOnly />
                                        </Stack>

                                        <div className='flex justify-between'>
                                            <p className='text-gray-900/80 line-through'>₹{product?.oldprice}</p>
                                            <p className='text-primary'>₹{product?.price}</p>
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
            </div>
        </section>
    )
}

export default ProductItem
