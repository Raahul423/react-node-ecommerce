import { Button, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FiLogIn } from 'react-icons/fi'
import { IoEye, IoEyeOff } from 'react-icons/io5'

export const RegisterAdmin = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [field, setField] = useState({
        fullName: "",
        email: "",
        password: ""
    });


    const handlechange = (e) => {
        const { name, value } = e.target;
        setField((prev) => ({ ...prev, [name]: value }))
    }

    
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

            <main className='flex justify-center  h-screen'>
                <form onSubmit={handlechange} className='flex flex-col  gap-5 max-w-md'>
                    <div className='flex justify-center'>
                        <img className='h-20 w-20' src="https://ecommerce-admin-view.netlify.app/icon.svg" alt="" />
                    </div>

                    <div className='flex flex-col items-center'>
                        <h1 className='!text-4xl font-semibold tracking-wide'>Join us today! Get special </h1 >
                        <h1 className='!text-4xl font-semibold whitespace-nowrap tracking-wide'> benefits and stay up-to-date.</h1>
                    </div>

                    <Button className='!px-5 !py-2 !border !border-blue-400 flex gap-2 w-fit !mx-auto' >
                        <p className='normal-case text-gray-900/80 font-sans !font-semibold'>SignIn With Google</p>
                        <FcGoogle className='text-xl' />
                    </Button>


                    <p className='flex justify-center gap-4 overflow-hidden'>
                        <span className='whitespace-nowrap'>Or, Sign Up with your email</span>
                    </p>

                    <div className='w-full'>
                        <label>Full Name</label>
                        <input
                            type="text"
                            onChange={handlechange}
                            value={field.fullName}
                            name='fullName'
                            className='py-2  outline-none !w-full border-1 px-2 rounded-md' />
                    </div>

                    <div className='w-full'>
                        <label>E-mail</label>
                        <input
                            ype="mail"
                            value={field.email}
                            name='email'
                            onChange={handlechange}
                            className='py-2  outline-none !w-full border-1 px-2 rounded-md' />
                    </div>

                    <div className='w-full'>
                        <label>Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? "password" : "text"}
                                value={field.password}
                                name='password'
                                onChange={handlechange}
                                className='py-2  outline-none !w-full border-1 px-2 rounded-md' />


                            <Button onClick={() => setShowPassword(!showPassword)} className='!absolute top-1/2 -translate-y-1/2 right-3 hover:!bg-gray-600/20 !rounded-full !p-1'>

                                {showPassword ? <IoEye className='text-2xl text-gray-600' /> : <IoEyeOff className='text-2xl text-gray-600' />}

                            </Button>

                        </div>
                    </div>

                    <span>
                        <p className='hover:!text-primary cursor-pointer'>Already Have an Account ?</p>
                    </span>

                    <Button className='!bg-blue-600 !px-6 !py-2 !w-full !text-white'>
                        SIGN UP
                    </Button>
                </form>
            </main>
        </section>
    )
}
