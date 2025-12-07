import { Button } from '@mui/material'
import React from 'react'
import { BiCircleThreeQuarter } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa'
import { GoGift } from 'react-icons/go'
import { RiBarChart2Fill, RiChatQuoteLine, RiProductHuntLine } from 'react-icons/ri'

export const DashboardHeader = () => {
    return (
        <section>
            <div className='header-1 w-full flex border border-gray-600/20 items-center justify-start bg-[#f2fbff] px-5 rounded-md py-4'>
                <div className='w-[70%] flex flex-col gap-4'>
                    <h1 className='!text-5xl font-bold'>Welcome,</h1>
                    <h2 className='text-4xl font-semibold !text-blue-700/80'>Rahul</h2>
                    <p className='!text-xl '>Here’s What happening on your store today. See the statistics at once.</p>
                    <Button className='w-35 !bg-blue-700/80 hover:!bg-blue-700 flex gap-2'>
                        <FaPlus className='text-white' />
                        <p className='normal-case text-white'>Add Product</p>
                    </Button>
                </div>

                <div className='w-[30%]'>
                    <img className='h-80 w-80' src="https://ecommerce-admin-view.netlify.app/shop-illustration.webp" alt="" />
                </div>
            </div>

            <div className='header-2 flex justify-between py-4'>
                <box className="border border-gray-600/20 rounded-md  items-center flex justify-between py-8 px-6 gap-3 bg-green-700/80 ">
                    <div className='flex gap-4 items-center'>
                        <BiCircleThreeQuarter className='text-5sxl text-white' />
                        <div className='flex flex-col'>
                            <span className='text-md text-white'>Total User</span>
                            <span className='text-md font-semibold text-white   '>3932</span>
                        </div>
                    </div>

                    <RiBarChart2Fill className='text-5xl text-white' />
                </box>

                  <box className="py-8  px-6 gap-4 border border-gray-600/20  rounded-md  items-center flex justify-between  bg-blue-500/80">
                    <div className='flex gap-3 items-center'>
                        <GoGift  className='text-5xl text-white' />
                        <div className='flex flex-col'>
                            <p className='text-md text-white whitespace-nowrap'>Total Orders</p>
                            <p className='text-md font-semibold text-white   '>3932</p>
                        </div>
                    </div>

                    <RiBarChart2Fill className='text-5xl text-white' />
                </box>

                  <box className="py-8 px-6  gap-3 border border-gray-600/20 rounded-md  items-center flex justify-between  bg-blue-900">
                    <div className='flex gap-4 items-center'>
                        <RiProductHuntLine  className='text-5xl text-white' />
                        <div className='flex flex-col'>
                            <span className='text-md text-white whitespace-nowrap'>Total Products</span>
                            <span className='text-md font-semibold text-white   '>3932</span>
                        </div>
                    </div>

                    <RiBarChart2Fill className='text-5xl text-white' />
                </box>

                  <box className="py-8 px-6  gap-3 border border-gray-600/20 rounded-md  items-center flex justify-between  bg-[#f22c61]">
                    <div className='flex gap-4 items-center'>
                        <RiChatQuoteLine className='text-5xl text-white' />
                        <div className='flex flex-col'>
                            <span className='text-md text-white whitespace-nowrap'>Total Categories</span>
                            <span className='text-md font-semibold text-white   '>3932</span>
                        </div>
                    </div>

                    <RiBarChart2Fill className='text-5xl text-white' />
                </box>
            </div>
        </section>
    )
}
