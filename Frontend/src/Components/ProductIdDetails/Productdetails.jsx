import React from 'react'
import ProductImage from './SubProduct/ProductImage'

const Productdetails = () => {
  return (
    <section className='w-full flex gap-4 '>
      <div className='col1 w-[40%]'>
        <ProductImage />
      </div>

      <div className='col2 w-[60%] bg-yellow-700'>
        rahul
      </div>
    </section>
  )
}

export default Productdetails
