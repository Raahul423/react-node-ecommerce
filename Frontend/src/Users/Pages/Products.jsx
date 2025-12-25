import React, { useEffect, useState } from 'react'
import ProductSlider from '../Components/ProductLists/ProductSlider'
import ProductItem from '../Components/ProductLists/ProductItem'
import api from '../../Utils/api';
import { useParams } from 'react-router';



const Products = () => {
  const {category} = useParams();
  const [fetchProducts, setFetchProducts] = useState([]);
    const [loading, setLoading] = useState(false);
   useEffect(()=>{
      const fetchProducts = async()=>{
        try {
          setLoading(true)
          const res = await api.get(`/products/filter-products?cat=${category}`);
          setFetchProducts(res?.data?.filterProduct);
          setFetchProducts((prev)=>[...prev].sort(()=>Math.random()- 0.56));
        } catch (error) {
          console.error(error.message);
        }finally{
          setLoading(false)
        }
      }
      fetchProducts();
    },[category]);


  return (
    <div className='my-container flex w-full  gap-6 py-6 pb-0'>
      <ProductSlider/>
      <ProductItem loading={loading} fetchProducts={fetchProducts}/>
    </div>
  )
}

export default Products
