import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { BiCircleThreeQuarter } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa'
import { GoGift } from 'react-icons/go'
import { IoStatsChartSharp } from "react-icons/io5";
import { RiBarChart2Fill, RiChatQuoteLine, RiProductHuntLine } from 'react-icons/ri'
import { AdminContext } from '../../../AdminAuthProvider'

export const DashboardHeader = () => {
    const {admin} = useContext(AdminContext)
    return (
        <section>
            <div className='header-1 w-full flex border border-gray-600/20 items-center justify-between bg-[#f2fbff] px-5 rounded-md py-4'>
                <div className='flex flex-col gap-4'>
                    <h1 className='!text-5xl font-bold'>Welcome,</h1>
                    <h2 className='text-4xl font-semibold !text-blue-700/80'>{admin?.fullName}</h2>
                    <p className='!text-xl '>Here’s What happening on your store today. See the statistics at once.</p>
                    <Button className='w-35 !bg-blue-700/80 hover:!bg-blue-700 flex gap-2'>
                        <FaPlus className='text-white' />
                        <p className='normal-case text-white'>Add Product</p>
                    </Button>
                </div>

                <div className=''>
                    <img className='h-80 w-80' src="/adminheaderimage.webp" alt="error" />
                </div>
            </div>

            <div className='header-2 justify-between flex py-4'>
                <div className="border cursor-pointer hover:bg-green-700/90 h-27 w-65 border-gray-600/20 rounded-md  items-center flex justify-between py-8 px-4 gap-3 bg-green-700/80 ">
                    <BiCircleThreeQuarter className='text-5xl text-white' />
                    <div className='flex flex-col'>
                        <p className='text-md text-white'>Total User</p>
                        <p className='text-md font-semibold text-white   '>3932</p>
                    </div>

                    <IoStatsChartSharp className='text-5xl text-white' />
                </div>

                <div className="py-8 h-27 cursor-pointer hover:bg-blue-500/90 w-65 px-4 gap-4 border border-gray-600/20  rounded-md  items-center flex justify-between  bg-blue-500/80">
                    
                        <GoGift className='text-5xl text-white' />
                        <div className='flex flex-col'>
                            <p className='text-md text-white whitespace-nowrap'>Total Orders</p>
                            <p className='text-md font-semibold text-white   '>3932</p>
                        </div>
                    

                    <IoStatsChartSharp className='text-5xl text-white' />
                </div>

                <div className="py-8 px-4 h-27 w-65 cursor-pointer hover:bg-blue-900/90 gap-3 border border-gray-600/20 rounded-md  items-center flex justify-between  bg-blue-900">
                    
                        <RiProductHuntLine className='text-5xl text-white' />
                        <div className='flex flex-col'>
                            <p className='text-md text-white whitespace-nowrap'>Total Products</p>
                            <p className='text-md font-semibold text-white   '>3932</p>
                        </div>

                    <IoStatsChartSharp className='text-5xl text-white' />
                </div>

                <div className="py-8 px-4 cursor-pointer hover:bg-[#f22c61]/90 h-27 w-65 gap-3 border border-gray-600/20 rounded-md  items-center flex justify-between  bg-[#f22c61]">        
                        <RiChatQuoteLine className='text-5xl text-white' />
                        <div className='flex flex-col'>
                            <p className='text-md text-white whitespace-nowrap'>Total Categories</p>
                            <p className='text-md font-semibold text-white   '>3932</p>
                        </div>
                    
                    <IoStatsChartSharp  className='text-5xl text-white' />
                </div>
            </div>
        </section>
    )
}
