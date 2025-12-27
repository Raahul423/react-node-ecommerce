import React, { useEffect, useState } from 'react'
import Productdetails from '../Components/ProductIdDetails/Productdetails'
import ReviewSection from '../Components/ProductIdDetails/ReviewSection'
import ReuseableComponents from '../Components/ReuseComponent/ReuseableComponents'
import api from '../../Utils/api'
import { useParams } from 'react-router'


const ProductsId = () => {
  const { id } = useParams();
  const [singleproducts, setSingleproducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const res = await api.get(`/products/singlepro/${id}`);
        setSingleproducts(res?.data?.product);

      } catch (error) {
        console.error(error?.message)
      }
    }
    fetchedProducts();
  }, [id]);

  useEffect(() => {
    const categoryId = singleproducts?.category?.name?.toLowerCase();
    if (!categoryId) return;

    const beautyProducts = async () => {
      const res = await api.get(`products/filter-products?cat=${categoryId}`);
      setRelatedProducts(res?.data?.filterProduct);
      setRelatedProducts((prev)=>[...prev].sort(()=>Math.random()-0.56))
    }
    beautyProducts();
  }, [singleproducts]);


  return (
    <section className='my-container'>
      <Productdetails singleproducts={singleproducts} />
      <ReviewSection />
      <ReuseableComponents title={"Related Products"} products={relatedProducts} />
    </section>
  )
}

export default ProductsId
