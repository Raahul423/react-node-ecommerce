import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { assest, Lists } from '../../../assets/Assests';
import { Link } from 'react-router';
import { SquareMinus, SquarePlus, X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';

const Navdrawer = ({setIsOpen, IsOpen}) => {
    const {toastMessage} = useContext(MyContext)
    const [isopeen , setIsOpeen] = useState(null);
    const [categorydata, setCategorydata] = useState([])

     useEffect(() => {
        const Category = async () => {
            try {
                const res = await api.get("/categories/allcategories");
                setCategorydata(res?.data?.rootcategories)
            } catch (error) {
                if (error?.response) {
                    toastMessage("error", error?.response?.data?.message);
                } else {
                    toastMessage("error", "server not responding... please try again")
                }
            }
        }
        Category();
    }, [toastMessage]);
    
   const toggle = (index) =>{
    setIsOpeen(isopeen === index ? null : index);
   };


    const toggleDrawer = () => {
        setIsOpen();
    };

    const DrawerList = (
        <Box sx={{ width: 300 }} role="presentation" >
            <div className='flex flex-col gap-5 p-2'>
                <div className='w-full mb-2'>
                    <img className='' src={assest.logo} alt="error" />
                </div>

                <div className='justify-between  flex items-center '>
                    <h1  className='text-xl'>SHOP BY CATEGORIES</h1>
                    <X className='h-5 w-5 cursor-pointer' onClick={toggleDrawer} />
                </div>

                <div>
                    {categorydata.map((data,idx) => (
                        <div key={idx} className=''>
                            <ul className='list-none'>
                                <Link className='flex relative justify-between text-xl w-full my-2 px-2' to={'/'} >{data.name} <SquarePlus className={`${isopeen === idx ? '!hidden':''}`} onClick={()=>toggle(idx)}/>
                                 <SquareMinus className={`${isopeen === idx ? '':'!hidden'}`} onClick={()=>toggle(idx)} />
                                </Link>

                                <Link className={`w-full ${isopeen === idx ? 'open ':'submenu'}`} to={'/'} >{data.children?.map((Item, idx) => (
                                    <div key={idx} className='px-2'>
                                        <ul className=''>
                                            <Button className='!w-full !text-black !text-md !justify-start'>
                                                <Link to={'/'} className='!normal-case'>
                                                    {Item.name}
                                                </Link>
                                            </Button>
                                        </ul>
                                    </div>
                                ))}</Link>


                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </Box>
    );


    return (
        <div>
            <Drawer open={IsOpen} onClose={toggleDrawer}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default Navdrawer
