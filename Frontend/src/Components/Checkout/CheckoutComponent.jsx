import React from 'react'
import Checklogin from './SubCheckout/Checklogin'
import Delivery from './SubCheckout/Delivery'
import Paymentsection from './SubCheckout/Paymentsection'

const CheckoutComponent = () => {
    return (
        <section className='bg-red my-container flex w-full py-6 gap-6'>
            <div className='col1 w-[75%] flex flex-col gap-6'>
                <Checklogin/>
                <Delivery/>
            </div>

            <div className='col2 w-[35%] bg-white rounded-md shadow-md border border-gray-700/30 sticky top-58 h-fit'>
                <Paymentsection/>
            </div>
        </section>
    )
}

export default CheckoutComponent
