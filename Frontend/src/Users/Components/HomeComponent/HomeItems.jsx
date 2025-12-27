import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router'
import { MyContext } from '../../../Provider';
import api from '../../../Utils/api';


const HomeItems = () => {
  const {toastMessage} = useContext(MyContext)
  const [rootcategory, setRootcategory] = useState([])

  useEffect(() => {
    const Category = async () => {
      try {
        const res = await api.get("/categories/category/root");
        setRootcategory(res?.data?.rootcategory)
      } catch (error) {
        console.error(error?.message);
      }
    }
    Category();
  }, [toastMessage]);
  return (
    <div className='my-container flex gap-2 justify-between !my-8'>
      {rootcategory.map((data, idx) => (
        <Link key={idx}>
          <div className='bg-white flex flex-col justify-center items-center gap-2 px-6 py-4 border-1 border-gray-500/20 ' >
            <div className='overflow-hidden  p-1'>
              <img className='object-cover hover:scale-105 transition-all h-25 w-25' src={data.images[0].url} alt="Error" />
            </div>

            <span>
              <h2 className='text-md font-mono'>{data.name}</h2>
            </span>

          </div>
        </Link>


      ))}
    </div>

  )
}

export default HomeItems
