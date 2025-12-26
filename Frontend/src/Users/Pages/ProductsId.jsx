import React, { useEffect, useState } from 'react'
import Productdetails from '../Components/ProductIdDetails/Productdetails'
import ReviewSection from '../Components/ProductIdDetails/ReviewSection'
import ReuseableComponents from '../Components/ReuseComponent/ReuseableComponents'


const ProductsId = () => {
  const [singleproducts, setSingleproducts] = useState([])

  useEffect(()=>{

  },[]);
  return (
    <section className='my-container'>
      <Productdetails/>
      <ReviewSection/>
      <ReuseableComponents title={"Related Products"} />
    </section>
  )
}

export default ProductsId
