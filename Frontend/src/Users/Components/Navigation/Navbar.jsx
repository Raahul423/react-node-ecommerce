import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Navdrawer from '../DrawerComponent/Navdrawer'
import { MyContext } from '../../../Provider'
import api from '../../../Utils/api'


const Navbar = () => {
    const { toastMessage } = useContext(MyContext)
    const [isOpen, setIsOpen] = useState(false)
    const [categorydata, setCategorydata] = useState([]);

    const togglebutton = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const Category = async () => {
            try {
                const res = await api.get("/categories/allcategories");
                setCategorydata(res?.data?.rootcategories)
            } catch (error) {
               console.error(error?.message)
            }
        }
        Category();
    }, [toastMessage]);

  

    return (
        <div className='my-container py-3  flex justify-end gap-20 '>
            <div className='col1 w-[25%]  rounded-md'>
                <Button onClick={togglebutton} className='!text-black !text-[15px] w-full gap-3 items-center !p-3'><AiOutlineMenuUnfold className='w-6 h-6' />SHOP BY CATOGORIES<IoIosArrowDown className='h-6 w-6 ml-auto' />
                </Button>
            </div>


            <div className='col1 w-[75%] flex items-center'>
                <ul className='flex gap-5 items-center w-[120%] justify-between'>
                    {categorydata.map((data) => (
                        <li key={data?._id} className='relative nav'>
                            <Link to={`/category/${data?.name}`} className='hover:text-primary '>
                                <Button
                                    className='!text-black button '>{data.name}</Button>
                            </Link>

                            <div className='submenunav absolute top-[120%] left-0 bg-white shadow-md'>
                                <ul className='min-w-[200px]'>
                                    {data.children?.map((child) => (
                                        <li key={child?._id}>
                                            <Link to={`/category/${data?.name}/${child?.name}`}>
                                                <Button className='w-full !text-black !justify-start !normal-case' >
                                                    {child.name}
                                                </Button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}





                </ul>
            </div>

            <Navdrawer IsOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Navbar
