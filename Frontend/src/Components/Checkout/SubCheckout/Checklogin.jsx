import { Button } from '@mui/material'
import { Check } from 'lucide-react'
import React from 'react'

const Checklogin = () => {
    return (
        <section className='border border-gray-700/50 rounded-md px-6 py-4 justify-between flex bg-white shadow-md'>
            <div className='flex gap-4'>
                <div>
                    <p className='px-2 bg-gray-700/20 rounded-sm text-primary !text-sm mt-1'>1</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <h1 className='!text-xl text-gray-700/70'>LOGIN</h1>
                        <Check className='text-primary' />
                    </div>

                    <div className='flex gap-4'>
                        <p>Rahul Pal</p>
                        <p>+91 7458015120</p>
                    </div>
                </div>
            </div>

            <div>
                <Button className=' !px-6 !text-white !bg-primary hover:!bg-black'>
                    LOGOUT
                </Button>
            </div>
        </section>
    )
}

export default Checklogin
