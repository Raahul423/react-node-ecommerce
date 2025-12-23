import { useEffect, useState } from 'react';
import ReuseableComponents from '../ReuseComponent/ReuseableComponents';
import api from '../../../Utils/api';


const FeatureProduct = () => {
    const [feature, setFeature] = useState([]);

    useEffect(() => {
        const featureproducts = async () => {
            const res = await api.get("/products/featured");
            setFeature(res?.data?.featured);
            // setFeature((prev) => [...prev].sort(() => Math.random() - 0.5));
        }
        featureproducts();
    })

    return (
        <section className='my-container'>
            <ReuseableComponents title={"Feature Products"} products={feature} />
        </section>
    )
}

export default FeatureProduct
