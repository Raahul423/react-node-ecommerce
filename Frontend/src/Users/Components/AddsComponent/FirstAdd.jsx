import React from 'react'
import Addone from './SubAdd/Addone'
import Shippingadd from './SubAdd/Shippingadd';


const FirstAdd = () => {
    return (
        <section className='my-container max-md:pt-10'>
                <Addone />
                <Shippingadd/>
        </section>
    )
}

export default FirstAdd
