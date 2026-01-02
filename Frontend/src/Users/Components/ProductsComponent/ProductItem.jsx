import { useContext, useEffect, useState } from 'react'
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
import api from '../../../Utils/api';
import { LoadingProduct } from '../LoadingSection/LoadingProduct';


const ProductItem = () => {
    const { setIsopendialogbox } = useContext(DialogContext)
    const [tabs, setTabs] = useState(0);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(false)

    // fetch for all root category
    useEffect(() => {
        const loadcategories = async () => {
            setloading(true);
            try {
                const res = await api.get("/categories/category/root");
                setCategories(res?.data?.rootcategory);
                setActiveCategory(res?.data?.rootcategory[0]?._id);
                setloading(false)
            } catch (error) {
                console.error(error?.message);
            }
        };

        loadcategories();
    }, []);



    useEffect(() => {
        const loadFeatureProducts = async () => {
            setloading(true);
            try {
                if (!activeCategory) return;

                const res = await api.get(`/products/featured-product?category=${activeCategory}`);
                setProducts(res?.data?.isFeatureProduct);
                setProducts(prev => [...prev].sort(() => Math.random() - 0.56));
                setloading(false)
            } catch (error) {
                console.error("ERR: ", error?.message);

            }
        };

        loadFeatureProducts();
    }, [activeCategory]);



    const handleChange = (event, newValue) => {
        setTabs(newValue);
        setActiveCategory(categories[newValue]._id)
    };

    return (
        <section className='my-container !mb-25 scroll'>
            <div className='flex w-full py-10 items-center'>
                <div className='col1 w-[40%] '>
                    <h1 className='text-2xl font-medium'>Popular Products</h1>
                    <p className='text-gray-900 '>Do not miss the current offers until the end of March.</p>
                </div>

                <div className='col2 w-[60%]  flex items-center px-4 overflow-hidden'>
                    <Tabs
                        value={tabs}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                    >
                        {categories.map((cat, idx) => (
                            <Tab key={idx} label={cat?.name} />
                        ))}
                    </Tabs>
                </div>

            </div>


            <Swiper
                navigation={true}
                slidesPerGroup={2}
                slidesPerView={5}
                spaceBetween={20}
                modules={[Navigation]}
                className="mySwiper"
            >
                {loading ?
                    <LoadingProduct />
                    :
                    <>
                        {products.map((product, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='w-60 rounded-md shadow shadow-gray-500'>
                                    <div className='relative overflow-hidden group h-70'>

                                        <Link to={`/product/${product?._id}`}>
                                            <img className='h-70 w-70 object-cover object-top rounded-md p-2' src={product.images[0]?.url} alt="error" />

                                            <img className='h-70 w-70 p-2 group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover object-top rounded-md' src={product.images[1]?.url} alt="error" />

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
                                            <Rating name="half-rating-read" precision={product?.rating}
                                                defaultValue={product?.rating}
                                                readOnly />
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
                    </>
                }

            </Swiper>

        </section>
    )
}

export default ProductItem
