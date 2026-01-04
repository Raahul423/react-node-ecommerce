import React, { useContext, useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router'
import { CircularProgress, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaRegHeart } from 'react-icons/fa';
import { LogOut } from 'lucide-react';
import { MyContext } from '../../Provider';
import api from '../../Utils/api';


const YourAccount = () => {
  const { user, logout, setUser, toastMessage, isAuth,authloading } = useContext(MyContext)
  const [preview, setPreview] = useState(user?.avatar)
  const [loading, setLoading] = useState(false)

  if(authloading){
    return <div> Loading... </div>
  }

  if(!isAuth){
    toastMessage("error","Login to Proceed..")
    return <Navigate to="/" replace/>
  }


  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl)


    try {
      setLoading(true)
      const formData = new FormData();
      formData.append('avatar', file);

      const res = await api.post("/users/upload-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      const data = res.data;;
      if (!data.success) {
        toastMessage("error", data.message || "Upload failed");
      }

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setPreview(data.user.avatar);

    } catch (err) {
      if (err?.res) {
        toastMessage("error", err?.res?.data?.message)
      } else {
        toastMessage("error", "Server not responding please try again...")
      }
    } finally {
      setLoading(false)
    }

  }


  return (
    <section className='bg-[#f5f0f0] py-8'>
      <div className='my-container flex gap-6 '>

        <div className='w-[20%] border border-gray-700/40 shadow-gray-700/40 shadow-md rounded-md bg-white h-fit sticky top-60' >

          <div className='flex flex-col justify-center items-center gap-1 py-5 '>
            {loading == true ? <CircularProgress /> : <label className='relative cursor-pointer'>
              <div className='h-30 w-30 bg-gray-400 rounded-full overflow-hidden flex items-center justify-center'>
                {preview || user?.avatar ? (
                  <img
                    className='h-30 w-30 object-cover'
                    src={preview || user?.avatar}
                    alt="Avatar"
                  />
                ) : (
                  <HiOutlineUserCircle className='h-24 w-24 text-white' />
                )}
              </div>
              <span className='absolute bottom-1 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full'>
                Change
              </span>
              <input
                type="file"
                accept="image/*"
                className='hidden'
                onChange={handleAvatarChange}
              />
            </label>}


            <h3>{user?.fullName}</h3>
            <p>{user?.email}</p>
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
                My-Wishlist

              </MenuItem >
            </Link >


            <Link to={"/"} onClick={logout}>
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
