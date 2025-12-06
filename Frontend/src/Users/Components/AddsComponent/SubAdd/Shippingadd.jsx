import React from 'react'
import { FaShippingFast } from "react-icons/fa";

const Shippingadd = () => {
    return (
        <div className='py-15 px-25'>
            <div className='border-2 border-orange-600 rounded-md flex justify-between p-4 items-center'>
                <div className='flex items-center gap-4'>
                    <FaShippingFast className='text-6xl text-gray-800/90' />
                    <h2 className='text-3xl uppercase text-gray-800/90'>Free Shipping</h2>
                </div>

                <div>
                    <p className='text-gray-800/90 '>Free Delivery Now On Your First Order and over $200</p>
                </div>

                <div>
                    <p className='!text-3xl font-semibold text-gray-800/90'>- Only $200*</p>
                </div>
            </div>
        </div>
    )
}

export default Shippingadd
