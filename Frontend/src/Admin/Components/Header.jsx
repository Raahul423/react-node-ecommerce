import React from 'react'
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { Badge, IconButton, StyledEngineProvider, Tooltip } from '@mui/material';
import { IoNotifications } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';

const Header = () => {
  return (
    <section className='bg-white h-13 flex justify-between items-center  shadow-md shadow-gray-700/20 z-10 sticky top-0'>
      <div className='part-1 pl-[20%] bg-red'>
        <Button className='!text-xl !text-gray-700 !rounded-full '>
          <RiMenu2Fill />
        </Button>
      </div>

      <div className='part-2 flex items-center gap-6 px-8'>
        <Tooltip title='notification'>
          <IconButton className='!p-0'>
            <StyledEngineProvider>
              <Badge color='secondary' badgeContent={4}>
               <IoNotifications />
              </Badge>
            </StyledEngineProvider>
          </IconButton>
        </Tooltip>


        <Tooltip title="tap to open">
                    <Button  className='!h-10 !w-10 !rounded-full !min-w-0 !text-black overflow-hidden !p-0'>
                      <FaCircleUser className='h-8 w-8'/>
                    </Button>
                </Tooltip>
      </div>
    </section>
  )
}

export default Header
