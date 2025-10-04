import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Footer = () => {
    return (
        <section className='bg-[#f5f0f0]'>
            <div className='my-container py-10'>

            {/* column 1 footer section */}

                <div className='col1 flex items-center justify-between px-24'>
                    <div className='p-4 justify-center flex flex-col items-center gap-2 group'>
                        <LiaShippingFastSolid className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>Free Shipping</h1>
                        <p className='text-sm'>For all Orders Over $100</p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center gap-2 group'>
                        <PiKeyReturnLight className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>Free Shipping</h1>
                        <p className='text-sm'>For all Orders Over $100</p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center gap-2 group'>
                        <IoWalletOutline className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>Free Shipping</h1>
                        <p className='text-sm'>For all Orders Over $100</p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center gap-2 group'>
                        <BiSupport className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>Free Shipping</h1>
                        <p className='text-sm'>For all Orders Over $100</p>
                    </div>
                </div>
                <span></span>


        {/* column 2 for footer section */}

                <div className='col2 w-full'>
                    <div className='w-[30%]'>

                    </div>

                    <div className='w-[15%]'>

                    </div>

                    <div className='w-[15%]'>

                    </div>

                    <div className='w-[40%]'>

                    </div>
                </div>

                <div className='col3'>

                </div>
            </div>
        </section>

    )
}

export default Footer
