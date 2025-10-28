import React from 'react'
import Checklogin from './SubCheckout/Checklogin'
import Delivery from './SubCheckout/Delivery'

const CheckoutComponent = () => {
    return (
        <section className='bg-red my-container flex w-full py-6 gap-6'>
            <div className='col1 w-[75%] flex flex-col gap-6'>
                <Checklogin/>
                <Delivery/>
            </div>

            <div className='col2 w-[35%] bg-yellow-300'>
                guys
            </div>
        </section>
    )
}

export default CheckoutComponent
