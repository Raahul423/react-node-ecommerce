import React from 'react'
import HomeSlider from '../Components/HomeComponent/HomeSlider'
import HomeItems from '../Components/HomeComponent/HomeItems'

import FirstAdd from '../Components/AddsComponent/FirstAdd'
import ProductItem from '../Components/ProductsComponent/ProductItem'

const Home = () => {
  return (
    <div className='bg-white'>
      <div className='bg-[#f5f0f0] py-6'>
        <HomeSlider />
      <HomeItems />
      </div>
      <ProductItem/>
      <FirstAdd/>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
