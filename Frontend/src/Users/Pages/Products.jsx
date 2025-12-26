import React, { useEffect, useState } from 'react'
import ProductSlider from '../Components/ProductLists/ProductSlider'
import ProductItem from '../Components/ProductLists/ProductItem'
import api from '../../Utils/api';
import { useParams, useSearchParams } from 'react-router';



const Products = () => {
  const { cat, subcategory } = useParams();
  
  const [fetchProducts, setFetchProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const rating = searchParams.get("rating");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        let url = `/products/filter-products?cat=${cat}`;
        if (subcategory) {
          url += `&subcatname=${subcategory}`;
        }
        if(rating){
          url += `&rating=${rating}`
        }

        const res = await api.get(url);
        const shuffled = [...res.data.filterProduct].sort(() => Math.random() - 0.56);
        setFetchProducts(shuffled);

      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false)
      }
    }
    fetchProducts();
  }, [cat, subcategory,rating]);




  return (
    <div className='my-container flex w-full  gap-6 py-6 pb-0'>
      <ProductSlider />
      <ProductItem loading={loading} fetchProducts={fetchProducts} />
    </div>
  )
}

export default Products
