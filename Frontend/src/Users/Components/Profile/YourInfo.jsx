import React, { useContext, useEffect, useState } from 'react'
import { Collapse } from 'react-collapse';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import Changepassword from './Childrens/Changepassword';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';

const YourInfo = () => {
  const { user, toastMessage, setUser} = useContext(MyContext)
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [updatedetails, setUpdatedetails] = useState({
    fullName: "",
    mobile: ""
  })

  useEffect(() => {
    if (user) {
      setUpdatedetails({
        fullName: user?.fullName || "",
        mobile: user?.mobile || ""
      })
    }
  }, [user])
  

  const handlechnage = (e) => {
    const { name, value } = e.target;
    setUpdatedetails((prev => ({
      ...prev, [name]: value
    })))
  }



  const UpdateUser = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await api.patch("/users/update-account", updatedetails)
      if (response?.createdUser) {
        setUser(response.createdUser)
        localStorage.setItem("user",JSON.stringify(response.createdUser))
      } else {
        const olduser = {
          ...user,
          fullName: updatedetails.fullName,
          mobile: updatedetails.mobile
        }
        setUser(olduser)
        localStorage.setItem("user",JSON.stringify(olduser))
      }

      toastMessage("success", response.message || "Successfully Updated")
    } catch (error) {
      if (error.response) {
        toastMessage("error", error.response?.data?.message)
      } else {
        toastMessage("error", "Something Wrong Please try again...");
      }
    }
    finally {
      setLoading(false)
    }
  }

  
  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999]" >
          <div className="flex flex-col items-center gap-3">
            <CircularProgress className='text-primary'/>
            <p className="text-white text-sm">Updating your details please wait....</p>
          </div>
        </div >
      )}
      <section className='flex flex-col gap-10'>
        <div className='md:w-[70%] md:px-8 px-4 border border-gray-700/50 shadow shadow-gray-700/50 rounded-md bg-white py-2 '>
          <div className='flex justify-between border-b border-gray-700/45 md:py-4 py-2'>
            <h1 className='max-md:!text-[20px]'>My Profile</h1>
            <Button onClick={() => setIsOpen(!isOpen)} className='max-md:!text-[12px]'>CHANGE PASSWORD</Button>
          </div>

          <div className='flex flex-col gap-6 py-6 '>
            <Box className='md:grid gap-6 grid-cols-2 max-md:flex max-md:flex-col gap-'>
              <TextField
                id="outlined-required"
                label="Name"
                name='fullName'
                defaultValue={user?.fullName}
                value={updatedetails.fullName}
                onChange={handlechnage}
              />

              <TextField
                disabled
                id="outlined-disabled"
                label="E-Mail"
                defaultValue={user?.email}

              />
              <div className='items-center border border-gray-700/50 w-fit md:py-3 max-md:w-[90%] max-md:flex'>
                <span className='p-3 border-r border-gray-700/50'>
                  +91
                </span>
                <input type="number"
                  className='outline-none px-4'
                  placeholder='Phone Number'
                  name='mobile'
                  value={updatedetails.mobile}
                  onChange={handlechnage}
                  defaultValue={user?.mobile}

                />
              </div>
            </Box>

            <Button onClick={UpdateUser} className='!bg-primary !text-white !px-4 !w-fit'>Update Profile</Button>
          </div>
        </div>

        <Collapse isOpened={isOpen}>
          <Changepassword />
        </Collapse>

      </section>
    </>
  )
}

export default YourInfo
