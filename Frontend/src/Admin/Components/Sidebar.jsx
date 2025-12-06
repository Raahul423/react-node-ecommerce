import React from 'react'
import { CiGrid41 } from "react-icons/ci";
import { IoGridOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <section className='w-[20%] fixed top-0 left-0 bg-white border border-gray-500/60 shadow-md shadow-black z-[20] h-full flex flex-col gap-8 p-4'>
        <div className='part-1'>
            <img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" alt="Logoo" />
        </div>

        <div className='part-2 flex flex-col gap-2'>
            <ul className='hover:bg-gray-600/20 transition-all cursor-pointer'>
                <li className='flex gap-2 p-2 items-center'>
                    <IoGridOutline />
                    <p>Dashboard</p>
                </li>
            </ul>

             <ul className='hover:bg-gray-600/20 transition-all cursor-pointer'>
                <li className='flex gap-2 p-2 items-center'>
                   <IoGridOutline />
                    <p>Dashboard</p>
                </li>
            </ul>

             <ul className='hover:bg-gray-600/20 transition-all cursor-pointer'>
                <li className='flex gap-2 p-2 items-center'>
                    <IoGridOutline />
                    <p>Dashboard</p>
                </li>
            </ul>

             <ul className='hover:bg-gray-600/20 transition-all cursor-pointer'>
                <li className='flex gap-2 p-2 items-center'>
                     <IoGridOutline />
                    <p>Dashboard</p>
                </li>
            </ul>

             <ul className='hover:bg-gray-600/20 transition-all cursor-pointer'>
                <li className='flex gap-2 p-2 items-center'>
                   <IoGridOutline />
                    <p>Dashboard</p>
                </li>
            </ul>
           
        </div>

    </section>
  )
}

export default Sidebar