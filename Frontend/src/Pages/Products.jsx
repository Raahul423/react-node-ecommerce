import React from 'react'
import ProductSlider from '../Components/ProductLists/ProductSlider'
import ProductItem from '../Components/ProductLists/ProductItem'


const Products = () => {
  return (
    <div className='my-container flex w-full  gap-10'>
      <ProductSlider/>
      <ProductItem/>
    </div>
  )
}

export default Products
