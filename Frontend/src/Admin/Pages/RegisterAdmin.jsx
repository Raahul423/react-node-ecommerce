import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FiLogIn } from 'react-icons/fi'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

export const RegisterAdmin = () => {
    const [showPassword, setShowPassword] = useState(true);
    // const [field, setField] = useState({
    //     fullName: "",
    //     email: "",
    //     password: ""
    // });


    // const handlechange = (e) => {
    //     const { name, value } = e.target;
    //     setField((prev) => ({ ...prev, [name]: value }))
    // }
    return (
        <section>
            <div className='h-15  w-full flex justify-between items-center px-6'>
                <span>
                    <img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" alt="admin header" />
                </span>

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
            </div>

            <div className='flex justify-center  h-screen'>
                <div className='flex flex-col items-center gap-5'>
                    <span>
                        <img className='h-20 w-20' src="https://ecommerce-admin-view.netlify.app/icon.svg" alt="" />
                    </span>

                    <span className='text-center'>
                        <h1 className='!text-4xl font-semibold'>Join us today! Get special </h1 >
                        <h1 className='!text-4xl font-semibold'> benefits and stay up-to-date.</h1>
                    </span>

                    <span>
                        <Button className='!px-5 !py-2 !border !border-blue-400 flex gap-2' >
                            <p className='normal-case text-gray-900/80 font-sans !font-semibold'>SignIn With Google</p>
                            <FcGoogle className='text-xl' />
                        </Button>
                    </span>

                    <span>
                        <p>Or, Sign Up with your email</p>
                    </span>

                    <span className='w-full'>
                        <p>Full Name</p>
                        <input type="text" className='py-2  outline-none !w-full border-1 px-2 rounded-md' />
                    </span>

                    <span className='w-full'>
                        <p>E-mail</p>
                        <input type="mail" className='py-2  outline-none !w-full border-1 px-2 rounded-md' />
                    </span>

                    <span className='w-full'>
                        <p>Password</p>
                        <div className='relative'>
                            <input type={showPassword ? "password" : "text"} className='py-2  outline-none !w-full border-1 px-2 rounded-md' />


                            {showPassword ? <IoEye onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-3 h-10 w-10 rounded-full cursor-pointer p-2 hover:bg-gray-600/30' /> : <IoEyeOff onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-3 h-10 w-10 rounded-full cursor-pointer p-2 hover:bg-gray-600/30' />}

                        </div>
                    </span>

                    <span>
                        <p className='hover:!text-primary cursor-pointer'>Already Have an Account ?</p>
                    </span>

                    <Button className='!bg-blue-600 !px-6 !py-2 !w-full !text-white'>
                        SIGN UP
                    </Button>
                </div>
            </div>
        </section>
    )
}
