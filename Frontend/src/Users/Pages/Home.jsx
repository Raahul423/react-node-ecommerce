import HomeSlider from '../Components/HomeComponent/HomeSlider'
import HomeItems from '../Components/HomeComponent/HomeItems'
import FirstAdd from '../Components/AddsComponent/FirstAdd'
import ProductItem from '../Components/ProductsComponent/ProductItem'
import LatestProduct from '../Components/ProductsComponent/LatestProduct'
import FeatureProduct from '../Components/ProductsComponent/FeatureProduct'
import SecondAdd from '../Components/AddsComponent/SecondAdd'
import BeautyProducts from '../Components/ProductsComponent/BeautyProducts'
import Popupmessage from '../Components/Popupmessage'
import ElectronicProducts from '../Components/ProductsComponent/ElectronicProducts'

const Home = () => {

  return (
    <section className='md:mb-16 mb-8'>
      <Popupmessage/>
      <div className='bg-[#f5f0f0] md:py-6 py-3'>
        <HomeSlider />
        <HomeItems />
      </div>
      <ProductItem />
      <FirstAdd />
      <LatestProduct />
      <FeatureProduct />
      <SecondAdd />
      <BeautyProducts />
      <ElectronicProducts/>
    </section>
  )
}

export default Home
