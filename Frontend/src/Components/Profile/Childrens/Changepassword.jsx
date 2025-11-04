import { Box, Button, TextField } from '@mui/material'

import React from 'react'

const Changepassword = () => {
    return (
        <section className='w-[70%] px-8 border border-gray-700/50 shadow shadow-gray-700/50 rounded-md bg-white py-2'>
            <div className='border-b border-gray-700/45 py-4'>
                <h1>Change Password</h1>
            </div>

            <div className='flex flex-col gap-6 py-6'>
                <Box className='grid gap-6 grid-cols-2'>
                    <TextField
                        id="outlined-required"
                        label="Old Password"
                        
                    />

                    <TextField
                        id="outlined-disabled"
                        label="New Password"
                    />

                    <TextField
                        id="outlined-disabled"
                        label="Confirm Password"
                    />
                    
                </Box>

                <Button className='!bg-primary !text-white !px-4 !w-fit'>Update Password</Button>
            </div>
        </section>
    )
}

export default Changepassword
