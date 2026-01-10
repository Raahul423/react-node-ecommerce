import { useEffect, useState } from 'react'
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';
import { LoadingProduct } from '../LoadingSection/LoadingProduct';




const LatestProduct = () => {
  const [latestproduct, setLatestproduct] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchlatestProduct = async () => {
      const res = await api.get(`/products/filter-products?cat=bags`);
      setLatestproduct(res?.data?.filterProduct);
      setLatestproduct((prev) => [...prev].sort(() => Math.random() - 0.5));
      setLoading(false)
    }
    fetchlatestProduct();
  }, []);

  return (
    <section className='my-container'>
      {loading ? <LoadingProduct title={"Bags "} /> : <ReuseableComponents title={"Bags"} products={latestproduct} />}


    </section>
  )
}

export default LatestProduct
