import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Collapse } from 'react-collapse';
const Sidebar = () => {

    const [isopen, setIsopen] = useState(null)
    
    const click = (index) =>{
        setIsopen(isopen === index ? null : index)
    }



    return (
        <section className='w-[20%] fixed top-0 left-0 bg-white border border-gray-500/60 shadow-md shadow-black z-[20] h-full flex flex-col gap-8 p-4'>
            <div className='part-1'>
                <img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" alt="Logoo" />
            </div>

            <div className='part-2 flex flex-col gap-2'>
                <ul className='cursor-pointer gap-1 flex flex-col'>
                    <li className='hover:bg-[#f1f1f1]'>
                        <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                            <MdOutlineDashboard className='!text-xl' />
                            <span className='!text-md normal-case font-semibold'>Dashboard</span>
                        </Button>
                    </li>

                    <li  onClick={()=>click(0)} className=''>
                        <Button className='hover:bg-[#f1f1f1] !text-gray-900 w-full !justify-between flex  !py-3 !rounded-md'>
                            <span className='flex items-center gap-3'>
                                <MdOutlineDashboard className='!text-xl' />
                                <span className='!text-md normal-case font-semibold'>Home Slides</span>
                            </span>

                            {isopen == true ? <IoIosArrowUp className='text-xl' /> : <IoIosArrowDown className='text-xl' />}

                        </Button>

                        <Collapse isOpened={isopen === 0}>
                            <div className='pl-6'>
                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill /> Home Banner List</p>
                                </Button>

                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Add Home Banner Slide</p>
                                </Button>

                            </div>

                        </Collapse>
                    </li>

                    <li onClick={()=>click(1)} className=''>
                        <Button className='hover:bg-[#f1f1f1] !text-gray-900 w-full !justify-between flex  !py-3 !rounded-md'>
                            <span className='flex items-center gap-3'>
                                <MdOutlineDashboard className='!text-xl' />
                                <span className='!text-md normal-case font-semibold'>Category</span>
                            </span>

                            {isopen == true ? <IoIosArrowUp className='text-xl' /> : <IoIosArrowDown className='text-xl' />}

                        </Button>

                        <Collapse isOpened={isopen === 1}>
                            <div className='pl-6 '>
                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill /> Category List</p>
                                </Button>

                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Add A Category</p>
                                </Button>

                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Sub Category List</p>
                                </Button>

                            </div>

                        </Collapse>
                    </li>

                    <li onClick={()=>click(2)} className=''>
                        <Button className='hover:bg-[#f1f1f1] !text-gray-900 w-full !justify-between flex  !py-3 !rounded-md'>
                            <span className='flex items-center gap-3'>
                                <MdOutlineDashboard className='!text-xl' />
                                <span className='!text-md normal-case font-semibold'>Product</span>
                            </span>

                            {isopen == true ? <IoIosArrowUp className='text-xl' /> : <IoIosArrowDown className='text-xl' />}

                        </Button>

                        <Collapse isOpened={isopen === 2}>
                            <div className='pl-6 '>
                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Product List</p>
                                </Button>

                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Product Upload</p>
                                </Button>

                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Add Product RAMS</p>
                                </Button>
                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Add Product WEIGHT</p>
                                </Button>
                                <Button className='w-full !justify-start hover:!bg-slate-800/10'>
                                    <p className='flex items-center gap-1 text-slate-800/90 normal-case'><GoDotFill />Add Product SIZE</p>
                                </Button>



                            </div>

                        </Collapse>
                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                            <MdOutlineDashboard className='!text-xl' />
                            <span className='font-semibold !text-md normal-case'>Users</span>
                        </Button>
                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                            <MdOutlineDashboard className='!text-xl' />
                            <span className='font-semibold !text-md normal-case'>Orders</span>
                        </Button>
                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                            <MdOutlineDashboard className='!text-xl' />
                            <span className='font-semibold !text-md normal-case'>Manage Logo</span>
                        </Button>
                    </li>

                    <li className='hover:bg-[#f1f1f1]'>
                        <Button className='!text-gray-900 w-full !justify-start flex gap-3 !py-3 !rounded-md'>
                            <MdOutlineDashboard className='!text-xl' />
                            <span className='font-semibold !text-md normal-case'>Logout</span>
                        </Button>
                    </li>
                </ul>

            </div>

        </section>
    )
}

export default Sidebar