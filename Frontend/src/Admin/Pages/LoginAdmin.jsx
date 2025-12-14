import { Button } from '@mui/material'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FiLogIn } from 'react-icons/fi'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { useNavigate } from 'react-router'
import AdminHeader from '../Components/AdminHeader'


export const LoginAdmin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true);
    const [field, setField] = useState({
        email: "",
        password: ""
    });


    const handlechange = (e) => {
        const { name, value } = e.target;
        setField((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <section>
           <AdminHeader/> 
            <main className='flex justify-center  h-screen'>
                <form onSubmit={handlechange} className='flex flex-col  gap-5 max-w-md'>
                    <div className='flex justify-center'>
                        <img className='h-20 w-20' src="https://ecommerce-admin-view.netlify.app/icon.svg" alt="" />
                    </div>

                    <div className='flex flex-col items-center'>
                        <h1 className='!text-4xl font-semibold tracking-wide'>Welcome Back! </h1 >
                        <h1 className='!text-4xl font-semibold whitespace-nowrap tracking-wide'> Sign in with your credentials.</h1>
                    </div>

                    <Button className='!px-5 !py-2 !border !border-blue-400 flex gap-2 w-fit !mx-auto' >
                        <p className='normal-case text-gray-900/80 font-sans !font-semibold'>SignIn With Google</p>
                        <FcGoogle className='text-xl' />
                    </Button>


                    <p className='flex justify-center gap-4 items-center'>
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className='whitespace-nowrap'>Or, Sign In with your email</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </p>


                    <div className='w-full'>
                        <label>E-mail</label>
                        <input
                            ype="mail"
                            value={field.email}
                            name='email'
                            onChange={handlechange}
                            className='py-3  outline-none !w-full border-1 px-2 rounded-md' />
                    </div>

                    <div className='w-full'>
                        <label>Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? "password" : "text"}
                                value={field.password}
                                name='password'
                                onChange={handlechange}
                                className='py-3  outline-none !w-full border-1 px-2 rounded-md' />


                            <Button onClick={() => setShowPassword(!showPassword)} className='!absolute top-1/2 -translate-y-1/2 right-3 hover:!bg-gray-600/20 !rounded-full !p-1'>

                                {showPassword ? <IoEye className='text-2xl text-gray-600' /> : <IoEyeOff className='text-2xl text-gray-600' />}

                            </Button>

                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <p className='hover:!text-primary cursor-pointer underline'>Forgot Password ?</p>
                    </div>


        <div className='flex justify-between'>
            <span>Don't have an Account</span>
            <span onClick={()=>navigate('/admin/register')} className='hover:!text-primary cursor-pointer underline'>Sign Up</span>
        </div>

                    <Button className='!bg-blue-600 !px-6 !py-2 !w-full !text-white'>
                        SIGN IN
                    </Button>
                </form>
            </main>
        </section>
    )
}
