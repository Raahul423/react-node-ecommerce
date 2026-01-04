import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { assest, Lists } from '../../../assets/Assests';
import { Link } from 'react-router-dom';
import { SquareMinus, SquarePlus, X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';
import { Collapse } from 'react-collapse';
import { TbCircleDotted } from "react-icons/tb";


const Navdrawer = ({ setIsOpen, IsOpen }) => {
    const { toastMessage } = useContext(MyContext)
    const [isopeen, setIsOpeen] = useState(null);
    const [categorydata, setCategorydata] = useState([])
    console.log(isopeen);


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

    const toggle = (index) => {
        setIsOpeen(isopeen === index ? null : index);
    };

    const toggleDrawer = () => {
        setIsOpen(false);
    };

    const DrawerList = (
        <Box sx={{
            width: {
                xs: 250,   
                sm: 300,
                md: 350,       
            },
        }}
            role="presentation" >
            <div className='flex flex-col gap-5 p-2'>
                <div className='w-full my-4'>
                    <img className='' src={assest.logo} alt="error" />
                </div>

                <div className='justify-between  flex items-center '>
                    <h1 className='md:!text-xl !text-[20px]'>SHOP BY CATEGORIES</h1>
                    <X className='h-5 w-5 cursor-pointer' onClick={toggleDrawer} />
                </div>

                <div>
                    {categorydata.map((data, idx) => (
                        <div key={idx}>
                            <ul className='list-none'>
                                <div className='flex relative justify-between md:text-xl w-full my-2 px-2'>
                                    <Link to={`/category/${data?.name}`}>
                                        <p onClick={toggleDrawer} className='cursor-pointer'>{data.name}</p>
                                    </Link>

                                    {isopeen === idx ? <SquareMinus onClick={() => toggle(null)} /> : <SquarePlus onClick={() => toggle(idx)} />}
                                </div>

                                <Collapse isOpened={isopeen === idx}>
                                    {data.children?.map((Item, idx) => (
                                        <div key={idx} className='px-2 bg-gray-500/20 '>
                                            <ul>
                                                <Link to={`/category/${data?.name}/${Item?.name}`}>
                                                    <Button onClick={toggleDrawer} className='!w-full !text-black !text-md !justify-start'>
                                                        <div className='!normal-case flex items-center gap-3'>
                                                            <TbCircleDotted />
                                                            {Item.name}
                                                        </div>
                                                    </Button>
                                                </Link>

                                            </ul>
                                        </div>
                                    ))}</Collapse>


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
