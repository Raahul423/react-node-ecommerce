import { Rating } from '@mui/material'
import React from 'react'
import { RxCross2 } from "react-icons/rx";

const CartComponent = () => {
    return (
        <section className='my-container flex px-12 py-4 border-2'>
            <div className='col1 w-[65%] border-2'>
                <div className='p-4'>
                    <h1>Your Cart</h1>
                    <p>There are <span className='text-red-600'>4</span> products in your cart</p>
                </div>

                <div>
                    {Array.from({ length: 4 }).map((idx) => (
                        <div key={idx} className='flex justify-between border-t-1 border-gray-800/40 border-b-1 p-4'>
                            <div className='flex gap-4'>
                                <div className='w-25 rounded-md overflow-hidden '>
                                    <img className='rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer' src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" alt="Error" />
                                </div>

                                <div>
                                    <p className='!text-sm'>Campus Sutra</p>
                                    <h1 className='!text-xl'>Men Comfort Cuban Collar Solid Polycotton Casual Shirt...</h1>
                                    <Rating name="half-rating-read" defaultValue={4} precision={1} />
                                </div>
                            </div>

                            <div>
                                <RxCross2 className='text-2xl cursor-pointer'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='col1 w-[35%] bg-yellow-500'>
                jhkjh
            </div>
        </section>
    )
}

export default CartComponent
