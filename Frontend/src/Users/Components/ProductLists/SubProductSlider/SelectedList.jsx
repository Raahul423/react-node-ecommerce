import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { Link } from 'react-router'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { DialogContext } from '../../../../Context/DialogComponent';


const SelectedItems = ({ fetchProducts }) => {
    const { setIsopendialogbox } = useContext(DialogContext)

    return (
        <section className='grid'>
            <div className='flex flex-col items-center gap-8 '>
                {fetchProducts.map((products, idx) => (
                    <div key={idx} className='rounded-md shadow shadow-gray-500 w-full mx-auto flex gap-2 md:p-4 p-2 bg-gray-200/30'>
                        <div className='relative m-auto overflow-hidden group md:w-[25%]'>

                            <Link to={`/product/${products?._id}`}>
                                <img className='md:p-2 rounded-md object-cover' src={products.images[0]?.url} alt="error" />

                                <img className='max:md-hidden p-2 h-80 rounded-md group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover' src={products.images[1]?.url} alt="error" />

                            </Link>

                            <div className='flex flex-col justify-center items-center gap-1 absolute md:-top-50 top-0 transition-all duration-500 opacity-0 group-hover:opacity-100 right-3 group-hover:top-3'>
                                <div onClick={() => setIsopendialogbox(true)} className='info '>
                                    <MdOutlineZoomOutMap className='text-xl hover:!stroke-white hover:!fill-white max-md:hidden' />
                                </div>

                                <div className='info'>
                                    <FaRegHeart className='text-xl hover:!stroke-white hover:!fill-white' />
                                </div>
                            </div>
                        </div>

                        <div className='md:p-4 flex flex-col md:gap-2 w-[75%]'>
                            <p className='!text-md text-gray-900/80'>{products.brand}</p>

                            <p className='one-line-ellipsis !text-[1.1em] font-medium'>{products.name}</p>

                            <p className='two-line-ellipsis'>{products.desc}</p>

                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={products.rating} precision={products.rating} readOnly />
                            </Stack>

                            <div className='flex justify-between w-fit gap-10'>
                                <p className='text-gray-900/80 line-through'>₹{products?.price}</p>
                                <p className='text-primary'>₹{products?.oldprice}</p>
                            </div>

                            <Button className='flex md:gap-4 gap-2 items-center w-fit !p-2 !border-1 !border-primary group hover:!border-black hover:!bg-black'>
                                <AiOutlineShoppingCart className='text-primary text-xl group-hover:text-white ' />
                                <p className='text-primary group-hover:text-white md:text-sm max-md:!text-[10px]'>Add to Cart</p>
                            </Button>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SelectedItems
