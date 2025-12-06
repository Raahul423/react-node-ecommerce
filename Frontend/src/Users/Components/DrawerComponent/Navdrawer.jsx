import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { assest, Lists } from '../../../assets/Assests';
import { Link } from 'react-router';
import { SquareMinus, SquarePlus, X } from 'lucide-react';
import { useState } from 'react';

const Navdrawer = (props) => {

    const [isopeen , setIsOpeen] = useState(null);

   const toggle = (index) =>{
    setIsOpeen(isopeen === index ? null : index);
   };


    const toggleDrawer = () => {
        props.setIsOpen();
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

                <div className=''>
                    {Lists.map((data, idx) => (
                        <div key={idx} className=''>
                            <ul className='list-none'>

                                <Link className='flex relative justify-between text-xl w-full my-2 px-2' to={'/'} >{data.Items} <SquarePlus className={`${isopeen === idx ? '!hidden':''}`} onClick={()=>toggle(idx)}/>
                                 <SquareMinus className={`${isopeen === idx ? '':'!hidden'}`} onClick={()=>toggle(idx)} />
                                </Link>

                                <Link className={`w-full ${isopeen === idx ? 'open ':'submenu'}`} to={'/'} >{data.Child.map((Item, idx) => (
                                    <div key={idx} className='px-2'>
                                        <ul className=''>
                                            <Button className='!w-full !text-black !text-md !justify-start'>
                                                <Link to={'/'} className='!normal-case'>
                                                    {Item.Item}
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
            <Drawer open={props.IsOpen} onClose={toggleDrawer}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default Navdrawer
