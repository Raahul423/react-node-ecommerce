import React from 'react'
import Addone from './SubAdd/Addone'
import Shippingadd from './SubAdd/Shippingadd';
import Addtwo from './SubAdd/Addtwo';


const FirstAdd = () => {
    return (
        <section className='my-container !py-6'>
                <Addone />
                <Shippingadd/>
                <Addtwo/>
        </section>
    )
}

export default FirstAdd
