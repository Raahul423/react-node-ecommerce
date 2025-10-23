import { Button, Rating } from '@mui/material'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router';

const CartComponent = () => {
    return (
        <section className='my-container flex px-12 py-10 gap-6'>
            <div className='col1 w-[70%] border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white'>
                <div className='p-4'>
                    <h1>Your Cart</h1>
                    <p>There are <span className='text-red-600'>4</span> products in your cart</p>
                </div>

                <div className='py-1'>
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
                                    <div className='flex gap-4'>
                                        <p>₹1350</p>
                                        <p className='line-through text-gray-600/70'>₹1450</p>
                                        <p className='text-red-600'>
                                            19% OFF
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <RxCross2 className='text-2xl cursor-pointer' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className='col1 w-[30%]  px-6 border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white h-fit sticky top-60'>
                <div className='border-gray-700/60 border-b-1 py-3 '>
                    <h1>Cart Totals
                    </h1>
                </div>

                <div>
                    <div className='flex justify-between py-3'>
                        <p>Subtotal</p>
                        <p>₹5,450.00</p>
                    </div>
                    <div className='flex justify-between py-3'>
                        <p>Shipping</p>
                        <p>₹Free</p>
                    </div>
                    <div className='flex justify-between py-3'>
                        <p>Total Amount</p>
                        <p>₹5,450.00</p>
                    </div>
                </div>
                <div className='py-6'>
                    <Link>
                        <Button className='flex gap-4 items-center w-full !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3'>
                            <p className='text-white text-sm'>Checkout</p>
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default CartComponent
