import { useEffect, useState } from 'react'
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';

const BeautyProducts = () => {
    const [beauty, setBeauty] = useState([]);

    useEffect(() => {
        const beautyProducts = async () => {
            const res = await api.get(`products/filter-products?cat=beauty`);
            setBeauty(res?.data?.filterProduct);
        }
        beautyProducts();
    }, [])
    return (
        <section className='my-container'>
            <ReuseableComponents title={"Beauty Products"} products={beauty} />
        </section>
    )
}

export default BeautyProducts
