import React from 'react'
import { Link, Outlet } from 'react-router'
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { MdOutlineLocationOn } from 'react-icons/md';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaRegHeart } from 'react-icons/fa';
import { LogOut } from 'lucide-react';
import { user } from '../assets/Assests';


const YourAccount = () => {
  return (
    <section className='bg-[#f5f0f0] py-8'>
      <div className='my-container flex gap-6 '>

        <div className='w-[20%] border border-gray-700/40 shadow-gray-700/40 shadow-md rounded-md bg-white h-fit sticky top-60' >

          <div className='flex flex-col justify-center items-center gap-1 py-5 '>
            <div className='p-4 h-30 w-30 bg-gray-400 rounded-full overflow-hidden'>
              <img className='h-27 w-27 object-cover' src={user.avatar} alt="Avatar" />
            </div>

            <h3>Rahul Pal</h3>
            <p>rp3976558@gmail.com</p>
          </div>

          <div className='bg-[#f2f2f2] flex flex-col gap-1 rounded-md py-2'>
            <Link to="info">
              <MenuItem>
                <ListItemIcon>
                  <HiOutlineUserCircle className='h-7 w-7' />
                </ListItemIcon>
                My Account
              </MenuItem>
            </Link>

            <Link to="address">
              <MenuItem>
                <ListItemIcon>
                  <MdOutlineLocationOn className='h-7 w-7' />
                </ListItemIcon>
                Address

              </MenuItem>
            </Link>

            <Link to="myorder">
              <MenuItem>

                <ListItemIcon>
                  <LiaShoppingBagSolid className='h-7 w-7' />
                </ListItemIcon>
                Orders

              </MenuItem>
            </Link>

            <Link to={"mylist"}>
              <MenuItem>

                <ListItemIcon>

                  <FaRegHeart className='w-5 h-5' />
                </ListItemIcon>
                My-List

              </MenuItem >
            </Link >

            <Link to={"/"}>
              <MenuItem>

                <ListItemIcon>
                  <LogOut fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Link>
          </div>
        </div>

        <div className='w-[80%]'>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default YourAccount
