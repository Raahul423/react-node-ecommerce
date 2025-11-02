import { Avatar } from '@mui/material'
import React from 'react'
import Profile from '../Components/Profile/Profile'

const YourAccount = () => {
  return (
    <section className=''>
      <div className='my-container flex gap-6 '>
        <div className='w-[20%] border border-gray-700/40 shadow-gray-700/40 shadow-md rounded-md' >
          <Profile />
        </div>

        <div className='bg-yellow-400 w-[80%]'>
          heelo
        </div>
      </div>

    </section>
  )
}

export default YourAccount
