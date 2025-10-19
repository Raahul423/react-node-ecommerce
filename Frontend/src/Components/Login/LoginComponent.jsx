import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';

import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router';

const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <section className='w-[28%] px-8 py-10 border border-gray-500/50 rounded-md m-auto gap-4 flex flex-col shadow-gray-950/30 shadow-xl bg-white'>
      <h1 className='text-center'>Login to your account</h1>
                      <Box
                          component="form"
                          noValidate
                          autoComplete="off"
                      >
                          <TextField
                              className="!w-full"
                              id="outlined-basic"
                              label="Outlined"
                              variant="outlined" />
                      </Box>
      
                      <Box
                          component="form"
                          noValidate
                          autoComplete="off"
      
                      >
      
                          <FormControl variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                              <OutlinedInput
                                  id="outlined-adornment-password"
                                  type={showPassword ? 'text' : 'password'}
                                  endAdornment={
                                      <InputAdornment position="end">
                                          <IconButton
                                              aria-label={
                                                  showPassword ? 'hide the password' : 'display the password'
                                              }
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
      
                      <div>
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
      
                      <Button className='w-full !bg-gray-700/20 !text-black !py-2.5'>
                          <p className=''>LOGIN WITH GOOGLE</p>
                      </Button>
    </section>
  )
}

export default LoginComponent
