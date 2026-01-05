import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { Avatar, Badge, Divider, IconButton, ListItemIcon, Menu, MenuItem, StyledEngineProvider, Tooltip } from '@mui/material';
import { IoNotifications } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../AdminAuthProvider';

const Header = () => {
  const { logout, admin } = useContext(AdminContext)
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    logout();
    navigate('/admin/login');
  }


  return (
    <section className='bg-white h-13 flex justify-between items-center  shadow-md shadow-gray-700/20 z-10 sticky top-0'>
      <div className='part-1 bg-red'>
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
          <Button onClick={handleClick} className='!h-10 !w-10 !rounded-full !min-w-0 !text-black overflow-hidden !p-0'>
            <FaCircleUser className='h-8 w-8' />
          </Button>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar />
            <span className='flex flex-col'>
              <p>{admin?.fullName}</p>
              <p>{admin?.email}</p>
            </span>

          </MenuItem>
          <Divider />
          <MenuItem onClick={Logout}>
            <ListItemIcon>
              <FiLogOut fontSize="large" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>

      </div>
    </section>
  )
}

export default Header
