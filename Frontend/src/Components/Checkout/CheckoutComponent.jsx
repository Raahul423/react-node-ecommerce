import React from 'react'
import Checklogin from './SubCheckout/Checklogin'
import Delivery from './SubCheckout/Delivery'

const CheckoutComponent = () => {
    return (
        <section className='bg-red my-container h-80 flex w-full'>
            <div className='col1 w-[75%]'>
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
