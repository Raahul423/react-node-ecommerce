import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useContext, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp, IoLogoBuffer, IoMdLogOut } from "react-icons/io";
import { Collapse } from 'react-collapse';
import { FaRegImage } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { RiProductHuntLine } from 'react-icons/ri';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AdminContext } from '../../AdminAuthProvider';

const Sidebar = () => {
    const {logout} = useContext(AdminContext)
    const [isopen, setIsopen] = useState(null)
    const click = (index) => {
        setIsopen(isopen === index ? null : index)
    }


    return (
        <section className='flex flex-col gap-8 p-4 sticky top-0'>
            <div className='part-1'>
                <img src="/Logo.jpg" alt="Logoo" />
            </div>

            <div className='part-2 flex flex-col gap-2'>
                <ul className='cursor-pointer gap-1 flex flex-col'>
                    <li className='hover:bg-[#f1f1f1]'>
                        <Link to='/admin'>
                            <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                                <MdOutlineDashboard className='!text-xl' />
                                <span className='!text-md normal-case font-semibold'>Dashboard</span>
                            </Button>
                        </Link>
                    </li>

                    <li onClick={() => click(0)} className=''>
                        <Button className='hover:bg-[#f1f1f1] !text-gray-900 w-full !justify-between flex  !py-3 !rounded-md'>
                            <span className='flex items-center gap-3'>
                                <FaRegImage className='!text-xl' />
                                <span className='!text-md normal-case font-semibold'>Home Slides</span>
                            </span>

                            {isopen === 0 ? <IoIosArrowUp className='text-xl' /> : <IoIosArrowDown className='text-xl' />}

                        </Button>

                        <Collapse isOpened={isopen === 0}>
                            <div className='pl-6'>
                                <Link to="/homeslide">
                                    <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill /> Home Banner List</p>
                                    </Button>
                                </Link>
                            </div>

                        </Collapse>
                    </li>

                    <li onClick={() => click(1)} className=''>
                        <Button className='hover:bg-[#f1f1f1] !text-gray-900 w-full !justify-between flex  !py-3 !rounded-md'>
                            <span className='flex items-center gap-3'>
                                <BiCategory className='!text-xl' />
                                <span className='!text-md normal-case font-semibold'>Category</span>
                            </span>

                            {isopen === 1 ? <IoIosArrowUp className='text-xl' /> : <IoIosArrowDown className='text-xl' />}

                        </Button>

                        <Collapse isOpened={isopen === 1}>
                            <div className='pl-6 '>
                                <Link to="/category">
                                    <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill /> Category List</p>
                                    </Button>
                                </Link>


                                <Link to="/subCatergory/list">
                                    <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Sub Category List</p>
                                    </Button>
                                </Link>

                            </div>

                        </Collapse>
                    </li>

                    <li onClick={() => click(2)} className=''>
                        <Button className='hover:bg-[#f1f1f1] !text-gray-900 w-full !justify-between flex  !py-3 !rounded-md'>
                            <span className='flex items-center gap-3'>
                                <RiProductHuntLine className='!text-xl' />
                                <span className='!text-md normal-case font-semibold'>Product</span>
                            </span>

                            {isopen === 2 ? <IoIosArrowUp className='text-xl' /> : <IoIosArrowDown className='text-xl' />}

                        </Button>

                        <Collapse isOpened={isopen === 2}>
                            <div className='pl-6 '>
                                <Link to="/addProducts">

                                    <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Product List</p>
                                    </Button>
                                </Link>

                                
                            </div>

                        </Collapse>
                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Link to="/users">
                            <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                                <FiUsers className='!text-xl' />
                                <span className='font-semibold !text-md normal-case'>Users</span>
                            </Button>
                        </Link>

                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Link to="orders">
                            <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                                <BsCart2 className='!text-xl' />
                                <span className='font-semibold !text-md normal-case'>Orders</span>
                            </Button>
                        </Link>
                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Link to="/managelogo">
                        <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                            <IoLogoBuffer className='!text-xl' />
                            <span className='font-semibold !text-md normal-case'>Manage Logo</span>
                        </Button>
                        </Link>
                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Button onClick={logout} className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                            <IoMdLogOut className='!text-xl' />
                            <span className='font-semibold !text-md normal-case'>Logout</span>
                        </Button>
                    </li>
                </ul>

            </div>

        </section>
    )
}

export default Sidebar