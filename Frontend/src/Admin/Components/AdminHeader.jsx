import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'

const AdminHeader = () => {
    return (
        <section> <div className='h-15  w-full flex justify-between items-center px-6'>
            <div>
                <img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" alt="admin header" />
            </div>

            <div className='flex'>
                <p className='flex items-center gap-1 px-6 bg-gray-600/40 rounded-full py-2 cursor-pointer'>
                    <FiLogIn />
                    <span>LOGIN</span>
                </p>

                <p className='flex items-center gap-1 hover:bg-gray-600/20 px-6 py-2 rounded-full cursor-pointer'>
                    <FaUser />
                    <span>SIGN UP</span>
                </p>
            </div>
        </div></section>
    )
}

export default AdminHeader
