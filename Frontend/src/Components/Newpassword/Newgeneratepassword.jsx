import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Newgeneratepassword = () => {
    const [showPassword, setShowPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();
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

                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    

                >
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm-Password</InputLabel>
                        <OutlinedInput
                            name='password'
                            id="outlined-adornment-password"
                            type={ConfirmPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton className='!text-xl'
                                        onClick={() => setConfirmPassword(!ConfirmPassword)}
                                        edge="end"
                                    >
                                        {ConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                </Box>
            </div>


        </section>
    )
}

export default Newgeneratepassword
