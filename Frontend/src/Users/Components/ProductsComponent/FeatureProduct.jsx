import { useEffect, useState } from 'react';
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';
import { LoadingProduct } from '../LoadingSection/LoadingProduct';



const FeatureProduct = () => {
    const [feature, setFeature] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const featureproducts = async () => {
            const res = await api.get("/products/featured");
            setFeature(res?.data?.featured);
            setFeature((prev) => [...prev].sort(() => Math.random() - 0.5));
            setLoading(false)
        }
        featureproducts();
    }, [])

    return (
        <section className='my-container'>
            {loading ? <LoadingProduct title={"Feature Products"} /> : <ReuseableComponents title={"Feature Products"} products={feature} />}


        </section>
    )
}

export default FeatureProduct
