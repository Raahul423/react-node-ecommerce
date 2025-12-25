import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { DialogContext } from '../../../../Context/DialogComponent';



const SelectedItems = ({ fetchProducts, loading }) => {
    const { setIsopendialogbox } = useContext(DialogContext)

    return (
        <section className='grid'>
            {loading ?
                <>Loading...</>
                :
                <>
                    {fetchProducts.length > 0 ?
                        <div className='grid grid-cols-5 gap-4'>
                            {fetchProducts.map((products, idx) => (
                                <div key={idx} className='rounded-md shadow shadow-gray-500 w-47 mx-auto'>
                                    <div className='relative overflow-hidden group '>
                                        <Link to={`/product/${products?._id}`}>
                                            <img className='p-2 h-60 w-full rounded-md object-cover' src={products?.images[0]?.url} alt="error" />

                                            <img className=' p-2 h-60 w-full group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover' src={products?.images[1]?.url} alt='error' />

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
                                        <p className='!text-md text-gray-900/80'>{products.brand}</p>
                                        <p className='!text-[1.1em] font-medium two-line-ellipsis '>{products.name}</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={products.rating} precision={products.rating} readOnly />
                                        </Stack>

                                        <div className='flex justify-between'>
                                            <p className='text-gray-900/80 line-through'>₹{products.price}</p>
                                            <p className='text-primary'>₹{products.oldprice}</p>
                                        </div>

                                        <Button className='flex gap-4 items-center w-full !border-1 !border-primary group hover:!border-black hover:!bg-black'>
                                            <AiOutlineShoppingCart className='text-primary text-xl group-hover:text-white ' />
                                            <p className='text-primary group-hover:text-white text-sm'>Add to Cart</p>
                                        </Button>

                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className='flex items-center'>
                            <img src="/noproduct.png" alt="error" />
                            <h1>No product found....</h1>
                        </div>
                    }
                </>}


        </section>
    )
}

export default SelectedItems
