import { Button } from '@mui/material'
import { useState } from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router'
import Navdrawer from './Navdrawer'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const togglebutton = () => {
        setIsOpen(!isOpen);
    }



    return (
        <div className='my-container py-3  flex justify-end gap-20 '>
            <div className='col1 w-[25%]  rounded-md'>
                <Button onClick={togglebutton} className='!text-black !text-[15px] w-full gap-3 items-center !p-3'><AiOutlineMenuUnfold className='w-6 h-6' />SHOP BY CATOGORIES<IoIosArrowDown className='h-6 w-6 ml-auto' />
                </Button>
            </div>


            <div className='col1 w-[75%] flex items-center'>
                <ul className='flex gap-5 items-center w-[120%] justify-between'>
                    <li className='relative'>
                        <Button  className='!text-black  '>
                            <Link to={'/'} className='hover:text-primary '>Home</Link>
                        </Button>
                    </li>

                    <li className='relative nav'>
                        <Button className='!text-black button '>
                            <Link to={'/products'} className='hover:text-primary '>Fastion</Link>
                        </Button>

                        <div  className='submenunav absolute top-[120%] left-0 bg-white shadow-md'>
                                <ul className='min-w-[200px]'>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Mens
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Women
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Kids
                                            </Button>
                                        </Link>
                                    </li>

                                </ul>
                        </div>
                    </li>

                    <li className='relative nav'>
                        <Button  className='!text-black  '>
                            <Link to={'/products'} className='hover:text-primary '>Electronics</Link>
                        </Button>

                        <div  className='submenunav absolute top-[120%] left-0 bg-white shadow-md '>
                                <ul className='min-w-[200px]'>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Mobile
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Laptops
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Smart-Watch
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Chargers
                                            </Button>
                                        </Link>
                                    </li>

                                </ul>
                         
                        </div>
                    </li>

                    <li className='relative nav'>
                        <Button  className='!text-black  '>
                            <Link to={'/products'} className='hover:text-primary '>Bags</Link>
                        </Button>

                        <div className='submenunav absolute top-[120%] left-0 bg-white shadow-md 
                        '>
                            
                                <ul className='min-w-[200px]'>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Mens-Bages
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Women-Bages
                                            </Button>
                                        </Link>
                                    </li>
                            

                                </ul>
                        
                        </div>
                    </li>

                    <li className='relative nav'>
                        <Button  className='!text-black  '>
                            <Link to={'/products'}  className='hover:text-primary '>Footwear</Link>
                        </Button>

                        <div className='submenunav absolute top-[120%] left-0 bg-white shadow-md 
                        '>
                            
                                <ul className='min-w-[200px]'>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Mens-Footwear
                                            </Button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <Button className='w-full !text-black !justify-start !normal-case' >
                                                Women-Footwear
                                            </Button>
                                        </Link>
                                    </li>
                                   

                                </ul>
                        </div>
                    </li>

                    <li className='relative'>
                        <Button className='!text-black  '>
                            <Link to={'/products'}  className='hover:text-primary '>Beauty</Link>
                        </Button>

                    </li>

                    <li className='relative'>
                        <Button  className='!text-black  '>
                            <Link to={'/products'}  className='hover:text-primary '>WELLNESS</Link>
                        </Button>

                    </li>

                    <li className='relative'>
                        <Button className='!text-black  '>
                            <Link to={'/products'}  className='hover:text-primary '>JEWELLERY</Link>
                        </Button>
                    </li>

                </ul>
            </div>

            <Navdrawer IsOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Navbar
