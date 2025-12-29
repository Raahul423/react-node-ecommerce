import { useEffect, useState } from 'react'
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';
import { LoadingProduct } from '../LoadingSection/LoadingProduct';


const BeautyProducts = () => {
    const [beauty, setBeauty] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const beautyProducts = async () => {
            const res = await api.get(`products/filter-products?cat=beauty`);
            setBeauty(res?.data?.filterProduct);
            setLoading(true)
        }
        beautyProducts();
    }, [])
    return (
        <section className='my-container'>
            {loading ? <LoadingProduct title={"Beauty Products"} /> : <ReuseableComponents title={"Beauty Products"} products={beauty} />}


        </section>
    )
}

export default BeautyProducts
