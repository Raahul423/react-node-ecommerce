import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { MyContext } from '../../../Provider';
import api from '../../../Utils/api';
import LoadingCategory from '../LoadingSection/LoadingCategory';


const HomeItems = () => {
  const { toastMessage } = useContext(MyContext)
  const [rootcategory, setRootcategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const Category = async () => {
      setLoading(true);
      try {
        const res = await api.get("/categories/category/root");
        setRootcategory(res?.data?.rootcategory);
        setLoading(false);
      } catch (error) {
        console.error(error?.message);
      }
    }
    Category();
  }, [toastMessage]);


  return (
    <div className='my-container md:flex gap-2 justify-between md:!my-8 !my-4 grid grid-cols-4'>
      {loading ?
      (Array.from({length : 8}).map((_,i)=> <LoadingCategory key={i}/>))
        :
        <> {rootcategory.map((data, idx) => (
          <Link key={idx} to={`/category/${data?.name.toLowerCase()}`}>
            <div className='bg-white flex flex-col justify-center items-center gap-2 md:px-6 md:py-4 border-1 border-gray-500/20 overflow-hidden ' >
              <div className='h-20 w-20'>
                <img className='h-full w-full  object-cover hover:scale-105 transition-all ' src={data.images[0].url} alt="Error" />
              </div>

              <span>
                <h2 className='text-md max-md:text-xs  font-mono'>{data.name}</h2>
              </span>

            </div>
          </Link>
        ))}</>}

    </div>

  )
}

export default HomeItems
