import React from 'react'
import Address from './Address'
import Formaddress from './Formaddress'

const Delivery = () => {
    return (
        <section className='flex flex-col border border-gray-700/40 rounded-md shadow-md'>
            <section className='Address'>
                <div className='Heading flex items-center gap-4  p-4 w-full bg-primary rounded-tl-md rounded-tr-md'>
                    <p className='px-2  !bg-white rounded-sm !text-primary'>2</p>
                    <h1 className='!text-xl text-white'>Delivery Address</h1>
                </div>

                <Address />
            </section>

            <section className='Form-Address w-full'>
                <Formaddress />
            </section>
        </section>
    )
}

export default Delivery
