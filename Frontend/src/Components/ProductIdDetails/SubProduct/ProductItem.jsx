import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import { Box, Button, Tab, Tabs } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const ProductItem = () => {

    const [isactive,setIsactive] = useState(null)
    return (
        <section className='w-full h-[550px] cursor-pointer  flex flex-col justify-center gap-5 px-10'>
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

                <div className='flex gap-2'>
                   {["S","M","L","XL"].map((size,idx)=>(
                    <div onClick={()=>setIsactive(idx)} className={`px-2 border border-black rounded-sm ${isactive === idx ? 'boxactive':''}`} key={idx}>{size}</div>
                   ))}
                </div>
            </div>

            <div>
                <p>Free Shipping (Est. Delivery Time 2-3 Days)</p>
            </div>

            <div className='flex gap-6 items-center'>
                <div className='rounded-md border border-b flex items-center p-1'>
                    <div className='px-4'>
                        <p>1</p>
                    </div>
                    <div className='flex flex-col count'>
                        <Button className='btn'>
                            <MdOutlineKeyboardArrowUp />
                        </Button>

                        <Button className='btn'>
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
        </section>
    )
}

export default ProductItem
