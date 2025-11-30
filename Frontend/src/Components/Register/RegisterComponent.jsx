import React from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router';

const RegisterComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [field, setField] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setField(() => {
            return {
                ...field,
                [name]: value
            }
        })
    }

    console.log(field);
    

    

    
    return (
        <section className='w-[32%] px-8 py-10 border border-gray-500/50 rounded-md m-auto gap-4 flex flex-col shadow-gray-950/30 shadow-xl bg-white'>
            <h1 className='text-center'>Register To New Account</h1>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    className="!w-full"
                    id="outlined-basic"
                    name="name"
                    onChange={onChangeInput}
                    label="Full Name"
                    variant="outlined" />
            </Box>

            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    className="!w-full"
                    id="outlined-basic"
                    label="E-mail"
                    name="email"
                    onChange={onChangeInput}
                    variant="outlined" />
            </Box>

            <Box
                component="form"
                noValidate
                autoComplete="off"

            >

                <FormControl variant="outlined">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        name='password'
                        onChange={onChangeInput}
                    />
                </FormControl>

            </Box>

            <Button className='w-full !bg-primary !text-white !py-2.5'>
                <p className=''>Register</p>
            </Button>

            <div className='flex justify-center gap-1'>
                <div>
                    <p>You have an Account?</p>
                </div>
                <Link to={'/login'}>
                    <div>
                        <p className='text-primary'>Login</p>
                    </div>
                </Link>
            </div>

            <div className='text-center'>
                <p>Or Continue With Google</p>
            </div>

            <Button className='w-full !bg-gray-700/20 !text-black !py-2.5 flex gap-4'>
                <FcGoogle className='text-2xl' />
                <p className=''>SIGNUP WITH GOOGLE</p>
            </Button>
        </section>
    )
}

export default RegisterComponent
