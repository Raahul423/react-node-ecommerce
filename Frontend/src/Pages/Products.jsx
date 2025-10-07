import React from 'react'
import ProductSlider from '../Components/ProductLists/ProductSlider'
import ProductItem from '../Components/ProductLists/ProductItem'


const Products = () => {
  return (
    <div className='my-container flex w-full bg-green-800 gap-8 '>
      <ProductSlider/>
      <ProductItem/>
    </div>
  )
}

export default Products
