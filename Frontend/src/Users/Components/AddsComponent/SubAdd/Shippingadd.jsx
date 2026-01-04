import React from 'react'
import { FaShippingFast } from "react-icons/fa";

const Shippingadd = () => {
    return (
        <section className='md:py-10 md:px-25 py-6'>
            <div className='border-2 border-orange-600 rounded-md flex justify-between md:p-4 p-1 items-center'>
                <div className='flex items-center md:gap-4 gap-2'>
                    <FaShippingFast className='md:text-6xl text-xl text-gray-800/90' />
                    <h2 className='md:text-3xl text-[12px] uppercase text-gray-800/90'>Free Shipping</h2>
                </div>

                <div>
                    <p className='text-gray-800/90 max-md:!text-[10px]'>Free Delivery Now On Your First Order and over $200</p>
                </div>

                <div>
                    <p className='md:!text-3xl !text-[15px] font-semibold text-gray-800/90'>- Only $200*</p>
                </div>
            </div>
        </section>
    )
}

export default Shippingadd
