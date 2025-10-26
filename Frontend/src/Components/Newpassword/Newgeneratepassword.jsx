import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

const Newgeneratepassword = () => {
    const [showPassword, setShowPassword] = useState("");
    const [ShowConfirmPassword, setShowConfirmPassword] = useState("");

    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);




    const check = () => {
        if (!showPassword || !ShowConfirmPassword) {
            toast.error("Please Fill Both Of Them.")
            return;
        }


        if (showPassword.length < 8) {
            toast.error("password Should be 8 Character")
            return;
        }


        if (showPassword === ShowConfirmPassword) {
            toast.success("Password Sucessfully Updated")
        }
        else {
            toast.error("Confirm Password not Match")
        }
    }

    return (
        <section className='w-[30%] m-auto py-8'>
            <div className='p-8 gap-6 flex flex-col border-1 border-gray-700/30 shadow-md rounded-md  bg-white my-container'>
                <h1>Forget Your Password</h1>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"


                >
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">New-Password</InputLabel>
                        <OutlinedInput
                            value={showPassword}
                            onChange={(e) => setShowPassword(e.target.value)}
                            name='password'
                            id="outlined-adornment-password"
                            type={password ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton className='!text-xl'
                                        onClick={() => setPassword(!password)}
                                        edge="end"
                                    >
                                        {password ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="New-Password"
                        />
                    </FormControl>

                </Box>

                <Box
                    component="form"
                    noValidate
                    autoComplete="off"


                >
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm-Password</InputLabel>
                        <OutlinedInput
                            value={ShowConfirmPassword}
                            onChange={(e) => setShowConfirmPassword(e.target.value)}
                            name='password'
                            id="outlined-adornment-password"
                            type={confirmPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton className='!text-xl'
                                        onClick={() => setConfirmPassword(!confirmPassword)}
                                        edge="end"
                                    >
                                        {confirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                </Box>


                <Button
                    onClick={check}
                    variant="contained"
                    color="primary"
                    className="w-full !py-3 !bg-primary hover:!bg-black !my-3"
                >
                    Change Password
                </Button>
            </div>

            <ToastContainer />
        </section>
    )
}

export default Newgeneratepassword
