import { useEffect, useState } from 'react'
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';
import { LoadingProduct } from '../../Pages/LoadingProduct';
import { Flashlight } from 'lucide-react';


const LatestProduct = () => {
  const [latestproduct, setLatestproduct] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchlatestProduct = async () => {
      const res = await api.get("/products/allproducts");
      setLatestproduct(res?.data?.product);
      setLatestproduct((prev) => [...prev].sort(() => Math.random() - 0.5));
    }
    fetchlatestProduct();
    setLoading(false)
  }, []);

  return (
    <section className='my-container'>
      {loading ? <LoadingProduct title={"Latest Products"} /> : <ReuseableComponents title={"Latest Products"} products={latestproduct} />}


    </section>
  )
}

export default LatestProduct
