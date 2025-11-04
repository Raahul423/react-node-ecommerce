import React, { useState } from 'react'
import {Collapse} from 'react-collapse';
import { Box, Button, TextField } from '@mui/material';
import Changepassword from './Childrens/Changepassword';

const YourInfo = () => {
  const [number, setNumber] = useState("");
  const [isOpen , setIsOpen]= useState(false)

  const handlechnage = (e) => {
    const change = e.target.value;
    if (change.length <= 10) {
      setNumber(change)
    }
  }
  return (
    <section className='flex flex-col gap-10'>
      <div className='w-[70%] px-8 border border-gray-700/50 shadow shadow-gray-700/50 rounded-md bg-white py-2 '>
        <div className='flex justify-between border-b border-gray-700/45 py-4'>
          <h1>My Profile</h1>
          <Button onClick={()=>setIsOpen(!isOpen)}>CHANGE PASSWORD</Button>
        </div>

        <div className='flex flex-col gap-6 py-6'>
          <Box className='grid gap-6 grid-cols-2'>
            <TextField
              id="outlined-required"
              label="Name"
              defaultValue="Rahul"
            />

            <TextField
              disabled
              id="outlined-disabled"
              label="E-Mail"
              defaultValue="rp3726@gmail.com"

            />
            <div className='flex items-center border border-gray-700/50 w-fit'>
              <span className='p-3 border-r border-gray-700/50'>
                +91
              </span>
              <input type="number"
                className='outline-none px-4'
                placeholder='Phone Number'
                value={number}
                onChange={handlechnage}
              />
            </div>
          </Box>

          <Button className='!bg-primary !text-white !px-4 !w-fit'>Update Profile</Button>
        </div>
      </div>

      <Collapse isOpened={isOpen}>
        <Changepassword />
      </Collapse>

    </section>

  )
}

export default YourInfo
