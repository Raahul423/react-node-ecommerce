import { useEffect, useState } from 'react'
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';


const LatestProduct = () => {
  const [latestproduct, setLatestproduct] = useState([]);

  useEffect(() => {
    const fetchlatestProduct = async () => {
      const res = await api.get("/products/allproducts");
      setLatestproduct(res?.data?.product);
      setLatestproduct((prev) => [...prev].sort(() => Math.random() - 0.5));
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
