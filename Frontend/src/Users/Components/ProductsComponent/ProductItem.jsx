import { useContext, useEffect, useState } from 'react'
import { Button, Rating, Stack, Tab, Tabs } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
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
        <section className='my-container md:!mb-15 overflow-hidden'>
            <div className="flex flex-col md:flex-row w-full md:py-10 py-4 md:gap-4  items-start md:items-center">

                <div className="w-full md:w-[40%]">
                    <h1 className="text-xl md:text-2xl font-medium">Popular Products</h1>
                    <p className="text-gray-900 text-sm md:text-base">
                        Do not miss the current offers until the end of March.
                    </p>
                </div>

                <div className="w-full md:w-[60%] flex items-center md:justify-end overflow-x-auto max-md:py-2">
                    {loading ?
                        (Array.from({ length: 8 }).map((_, i) =>
                            <div key={i} className='md:h-10 h-5 md:w-20 w-10 bg-gray-400 rounded-md animate-pulse mx-1'>
                            </div>
                        ))
                        :
                        <Tabs
                            value={tabs}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            {categories.map((cat, idx) => (
                                <Tab key={idx} label={cat?.name} className="max-md:!normal-case max-md:!min-w-fit " />
                            ))}
                        </Tabs>}

                </div>

            </div>


            <Swiper
                navigation
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
                {loading ?
                    <LoadingProduct />
                    :
                    <>
                        {products.map((product, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='md:w-60 w-40 rounded-md shadow shadow-gray-500'>
                                    <div className='relative overflow-hidden group md:h-70 h-40'>

                                        <Link to={`/product/${product?._id}`}>
                                            <img className='md:h-70 md:w-70 object-cover object-top rounded-md p-2' src={product.images[0]?.url} alt="error" />

                                            <img className='max-md:hidden h-70 w-70 p-2 group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover object-top rounded-md' src={product.images[1]?.url} alt="error" />

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

                                        <Button className='flex md:gap-4 gap-2 items-center w-full !border-1 !border-primary group hover:!border-black hover:!bg-black'>
                                            <AiOutlineShoppingCart className='text-primary md:text-xl group-hover:text-white ' />
                                            <p className='text-primary group-hover:text-white text-sm max-md:!text-[10px]'>Add to Cart</p>
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
