import React, { useEffect, useState } from 'react'
import Productdetails from '../Components/ProductIdDetails/Productdetails'
import ReviewSection from '../Components/ProductIdDetails/ReviewSection'
import ReuseableComponents from '../Components/ReuseComponent/ReuseableComponents'
import api from '../../Utils/api'
import { useParams } from 'react-router'


const ProductsId = () => {
  const { id } = useParams();
  const [singleproducts, setSingleproducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const res = await api.get(`/products/singlepro/${id}`);
        console.log(res);
        setSingleproducts(res?.data?.product);
        
      } catch (error) {
        console.error(error?.message)
      }
    }
    fetchedProducts();
  }, [id]);
  return (
    <section className='my-container'>
      <Productdetails singleproducts={singleproducts}/>
      <ReviewSection />
      <ReuseableComponents title={"Related Products"} />
    </section>
  )
}

export default ProductsId
