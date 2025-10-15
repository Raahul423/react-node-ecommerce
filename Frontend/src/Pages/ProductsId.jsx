import React from 'react'
import Productdetails from '../Components/ProductIdDetails/Productdetails'
import ReviewSection from '../Components/ProductIdDetails/ReviewSection'
import ReuseableComponents from '../Components/ReuseableComponents'

const ProductsId = () => {
  return (
    <section className='my-container'>
      <Productdetails/>
      <ReviewSection/>
      <ReuseableComponents title={"Related Products"}/>
    </section>
  )
}

export default ProductsId
