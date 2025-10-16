import React from 'react'
import HomeSlider from '../Components/HomeComponent/HomeSlider'
import HomeItems from '../Components/HomeComponent/HomeItems'

import FirstAdd from '../Components/AddsComponent/FirstAdd'
import ProductItem from '../Components/ProductsComponent/ProductItem'
import LatestProduct from '../Components/ProductsComponent/LatestProduct'
import FeatureProduct from '../Components/ProductsComponent/FeatureProduct'
import SecondAdd from '../Components/AddsComponent/SecondAdd'
import BeautyProducts from '../Components/ProductsComponent/BeautyProducts'

const Home = () => {
  return (
    <div>
      <div className='bg-[#f5f0f0] py-6'>
        <HomeSlider />
        <HomeItems />
      </div>
      <ProductItem />
      <FirstAdd />
      <LatestProduct />
      <FeatureProduct />
      <SecondAdd />
      <BeautyProducts />
    </div>
  )
}

export default Home
