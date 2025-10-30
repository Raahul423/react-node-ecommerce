import { Button } from '@mui/material'
import React from 'react'

const Paymentsection = () => {
    return (
        <section className='my-container rounded-md'>
            <div className='py-3 border-b border-gray-700/30'>
                <h1>Your Order</h1>
            </div>

            <div className='flex justify-between py-3 border-gray-700/30 border-b'>
                <p>Product</p>
                <p>Subtotal</p>
            </div>


            <div className='scroll max-h-[250px]'>
                {Array.from({ length: 6 }).map((idx) => (
                    <div key={idx} className='flex justify-between my-2'>
                        <div className='flex gap-2'>
                            <img className='h-15 w-15 object-cover object-top rounded-md' src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg" alt="" />

                            <div className='flex flex-col'>
                                <p>mandarin collar prin...</p>
                                <p>Qty: <span>1</span></p>
                            </div>
                        </div>

                        <div>
                            <p>₹785.00</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className='flex flex-col gap-4 py-4'>
                <Button className='!bg-primary !text-white hover:!bg-black !py-2'>Razor Pay</Button>

                <Button className='!bg-yellow-300 hover:!bg-amber-400 !text-white !py-2'>PayPal</Button>

                <Button className='!bg-gray-800/90 !text-white hover:!bg-black !py-2'>Cash on Delivery</Button>


            </div>
        </section>
    )
}

export default Paymentsection
