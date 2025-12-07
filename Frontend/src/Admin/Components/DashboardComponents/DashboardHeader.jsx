import { Button } from '@mui/material'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const DashboardHeader = () => {
    return (
        <section>
            <div className='header-1 w-full flex border border-gray-600/20 items-center justify-start bg-[#f2fbff] px-5 rounded-md'>
                <div className='w-[70%] flex flex-col gap-4'>
                    <h1 className='!text-5xl font-bold'>Welcome,</h1>
                    <h2 className='text-4xl font-semibold !text-blue-700/80'>Rahul</h2>
                    <p className='!text-xl '>Here’s What happening on your store today. See the statistics at once.</p>
                    <Button className='w-35 !bg-blue-700/80 hover:!bg-blue-700 flex gap-2'>
                        <FaPlus className='text-white'/>
                        <p className='normal-case text-white'>Add Product</p>
                    </Button>
                </div>

                <div className='w-[30%]'>
                    <img className='h-80 w-80' src="https://ecommerce-admin-view.netlify.app/shop-illustration.webp" alt="" />
                </div>
            </div>

            <div className='header-2'>

            </div>
        </section>
    )
}
