import { useEffect, useState } from 'react'
import api from '../../../Utils/api';
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import { LoadingProduct } from '../LoadingSection/LoadingProduct';

const ElectronicProducts = () => {
    const [electronic, setElectronic] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const electronicitem = async () => {
            try {
                setLoading(true)
                const res = await api.get(`/products/filter-products?cat=electronic`)
                setElectronic(res?.data?.filterProduct);
                setLoading(false)
            } catch (error) {
                console.error(error?.message);
            }
        }
        electronicitem();
    }, [])

    return (
        <section className='my-container scroll'>
            {loading ? <LoadingProduct title={"Electronic Products"} /> : <ReuseableComponents title={"Electronic Products"} products={electronic} />}
        </section>
    )
}
export default ElectronicProducts
