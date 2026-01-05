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
    <section className="md:mb-16 mb-8">
      <Popupmessage />

      <div className="bg-[#f5f0f0] py-3 md:py-6">
        <div className="w-full px-4">
          <HomeSlider />
        </div>

        
        <div className="px-4">
          <HomeItems />
        </div>
      </div>

    
      <div>
        <ProductItem />
        <FirstAdd />
        <LatestProduct />
        <FeatureProduct />
        <SecondAdd />
        <BeautyProducts />
        <ElectronicProducts />
      </div>
    </section>
  );
};

export default Home;
