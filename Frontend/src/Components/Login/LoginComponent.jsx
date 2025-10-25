import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const LoginComponent = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [verifyaccount, setVerifyaccount] = useState({
        email: '',
        password: ''
    });

    const ForgotPassword = () => {
        if (verifyaccount.email.trim() === '') {
            toast.error("Please enter e-mail");
        } else {
            toast.success("Redirecting to password reset page...")
           setTimeout(() => {
              navigate("/forgot-password")
           }, 2000);
        }

    }



    return (
        <section className='w-[28%] px-8 py-10 border border-gray-500/50 rounded-md m-auto gap-4 flex flex-col shadow-gray-950/30 shadow-xl bg-white'>

            <h1 className='text-center'>Login to your account</h1>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    type='email'
                    className="!w-full"
                    label="E-mail"
                    variant="outlined"
                    name='email'
                    value={verifyaccount.email}
                    onChange={(e)=>setVerifyaccount({...verifyaccount,email:e.target.value})} />
                    
            </Box>

            <Box
                component="form"
                noValidate
                autoComplete="off"

            >

                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        name='password'
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton className='!text-xl'
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

            </Box>

            <div onClick={ForgotPassword} >
                <p className='hover:text-primary cursor-pointer'>Forget Password?</p>
            </div>

            <Button className='w-full !bg-primary !text-white !py-2.5'>
                <p className=''>Login</p>
            </Button>

            <div className='flex justify-center gap-1'>
                <div>
                    <p>Not Registered?</p>
                </div>
                <Link to={'/register'}>
                    <div>
                        <p className='text-primary'>Signup</p>
                    </div>
                </Link>
            </div>

            <div className='text-center'>
                <p>Or Continue With Google</p>
            </div>

            <Button type='submit' className='w-full !bg-gray-700/20 !text-black !py-2.5 flex gap-4'>
                <FcGoogle className='text-2xl' />
                <p className=''>LOGIN WITH GOOGLE</p>
            </Button>

            <ToastContainer />
        </section>
    )
}

export default LoginComponent
