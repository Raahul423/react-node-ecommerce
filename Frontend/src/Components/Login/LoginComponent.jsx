import { Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { MyContext } from '../../Provider';
import api from '../../Utils/api'

const LoginComponent = () => {
    const { toastMessage, setUser, setIsLogin } = useContext(MyContext)
    const navigate = useNavigate();

    const [loading, setLoding] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [verifyaccount, setVerifyaccount] = useState({
        email: '',
        password: ''
    });

    const emailRegex = /^\S+@\S+\.\S+$/;

    const ForgotPassword = () => {
        if (verifyaccount.email.trim() === '') {
            toastMessage("error", "Please Enter E-mail");
            return;
        }
        if (!emailRegex.test(verifyaccount.email)) {
            toastMessage("error", "Please Enter Valid E-mail");
            return;
        }

        toastMessage("success", "Redirecting to password reset page...")
        setTimeout(() => {
            navigate("/forgot-password")
        }, 2000);

    }

    const login = async (event) => {
        event.preventDefault()
        if (verifyaccount.email.trim() === '') {
            toastMessage("error", "Please Enter E-mail");
            return;
        }
        if (!emailRegex.test(verifyaccount.email)) {
            toastMessage("error", "Please Enter Valid E-mail");
            return;
        }
        if (verifyaccount.password.trim() === '') {
            toastMessage("error", "Please Enter Password");
            return;
        }

        try {
            setLoding(true);
            const response = await api.post('/users/login', verifyaccount);
            console.log(response.data);

            const { createdUser, token, message } = response.data

            setUser(createdUser)
            setIsLogin(true)

            setVerifyaccount({
                fullName: "",
                email: "",
                password: ""
            });

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(createdUser));
            console.log(
                localStorage.getItem("token", token));
            console.log(
                localStorage.getItem("user", (createdUser)));



            toastMessage("success", message || "Login Successfully")

            setTimeout(() => {
                navigate('/')
            }, 1000)

        } catch (error) {
            if (error.response) {
                toastMessage("error", error.response?.data?.message)
            } else {
                toastMessage("error", "Something Wrong Please try again...");
            }
        } finally {
            setLoding(false)
        }
    }



    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999]" >
                    <div className="flex flex-col items-center gap-3">
                        <CircularProgress />
                        <p className="text-white text-sm">Processing your Login deatils please wait...</p>
                    </div>
                </div >
            )}
            <section className='w-[28%] px-8 py-8 border border-gray-500/50 rounded-md m-auto gap-4 flex flex-col shadow-gray-950/30 shadow-xl bg-white'>
                <div>
                    <h1 className='text-center'>Login to your account</h1>
                </div>

                <Box
                    onSubmit={login}
                    component="form"
                    noValidate
                    autoComplete="off"
                    className='flex flex-col gap-4'
                >
                    <TextField
                        type='email'
                        className="!w-full"
                        label="E-mail"
                        variant="outlined"
                        name='email'
                        value={verifyaccount.email}
                        onChange={(e) => setVerifyaccount({ ...verifyaccount, email: e.target.value })}
                    />


                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            value={verifyaccount.password}
                            onChange={(e) => setVerifyaccount({ ...verifyaccount, password: e.target.value })}
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



                    <div onClick={ForgotPassword} >
                        <p className='hover:text-primary cursor-pointer'>Forget Password?</p>
                    </div>

                    <Button type='submit' className='w-full !bg-primary !text-white !py-2.5'>
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

                </Box>
            </section >
        </>
    )
}

export default LoginComponent
