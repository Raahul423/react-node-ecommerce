import React from 'react'
import ProductImage from './SubProduct/ProductImage'
import ProductItem from './SubProduct/ProductItem'

const Productdetails = () => {
  return (
    <section className='w-full flex gap-4 h-[550px] overflow-hidden items-center my-6'>
      <div className='col1 w-[40%]'>
        <ProductImage />
      </div>

      <div className='col2 w-[60%]'>
        <ProductItem />
      </div>
    </section>
  )
}

export default Productdetails
