import React, { useContext } from 'react'
import { Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';

const RegisterComponent = () => {
    const navigate = useNavigate();
    const { toastMessage } = useContext(MyContext);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const [field, setField] = useState({
        fullName: "",
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

    const handleClick = async (event) => {
        event.preventDefault();
        const emailRegex = /^\S+@\S+\.\S+$/; // for check Valid emailId

        if (!field.fullName || !field.email || !field.password) {
            toastMessage("error", "Please fill all required field")
            return;
        }
        if (!emailRegex.test(field.email)) {
            toastMessage("error", "Please enter valid email-Id")
            return;
        }

        try {
            setLoading(true)
            const response = await api.post('/users/register', field)
            toastMessage("success", response.data.message || "You can Login now...")
            setField({
                fullName: "",
                email: "",
                password: ""
            });
            setLoading(false)
            navigate("/login")
            
            // console.log("response", response.data);
        } catch (error) {
            if (error.response) {
                toastMessage("error", error.response.data.message);
            } else {
                toastMessage("error", "Server is currently not responding. Please try again later.")
            }
        }

    }


    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999]" >
                    <div className="flex flex-col items-center gap-3">
                        <CircularProgress />
                        <p className="text-white text-sm">Processing your registration...</p>
                    </div>
                </div >
            )}
            <section className='md:w-[32%] w-full md:px-8 px-6 md:py-10 py-6 border border-gray-500/50 rounded-md m-auto gap-4 flex flex-col shadow-gray-950/30 shadow-xl bg-white'>
                <h1 className='text-center'>Register To New Account</h1>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        className="!w-full"
                        id="outlined-basic"
                        name="fullName"
                        onChange={onChangeInput}
                        value={field.fullName}
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
                        value={field.email}
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
                            value={field.password}
                        />
                    </FormControl>

                </Box>

                <Button onClick={handleClick} className='w-full !bg-primary !text-white !py-2.5'>
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
        </>
    )
}

export default RegisterComponent
