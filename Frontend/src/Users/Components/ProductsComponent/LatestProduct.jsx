import React, { useEffect, useState } from 'react'
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';


const LatestProduct = () => {
  const [latestproduct, setLatestproduct] = useState([]);

  useEffect(() => {
    const fetchlatestProduct = async () => {
      const res = await api.get("/products/allproducts");
      console.log(res);
      setLatestproduct(res?.data?.product);
    }
    fetchlatestProduct();
  }, []);

  return (
    <section className='my-container'>
      <ReuseableComponents title={"Latest Products"} products ={latestproduct} />
    </section>
  )
}

export default LatestProduct
