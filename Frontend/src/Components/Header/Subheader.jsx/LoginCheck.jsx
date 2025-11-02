import { Avatar, Button, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { LogOut, Settings } from 'lucide-react';
import React, { useState } from 'react'
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6'
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';

const LoginCheck = () => {

    const [account, setAccount] = useState(null);
    const open = Boolean(account);

    const handleClick = (event) => {
        setAccount(event.currentTarget);
    };

    const handleClose = () => {
        setAccount(null);
    };


    return (
        <>
            <div className='flex items-center gap-2'>
                <Button onMouseOver={handleClick} className='!w-12 !h-12 !rounded-full !min-w-0 !text-black'>
                    <FaCircleUser className='h-7 w-7' />
                </Button>

                <Menu
                    anchorEl={account}
                    id="account-menu"
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
                                    width: 32,
                                    height: 32,
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
                    <Link to={"./myaccount"}>
                        <MenuItem onClick={handleClose} >
                            <ListItemIcon>
                                <HiOutlineUserCircle className='h-7 w-7' />
                            </ListItemIcon>
                            My Account
                        </MenuItem>
                    </Link>

                    <Link to={"./myaccount"}>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>
                                <MdOutlineLocationOn className='h-7 w-7' />
                            </ListItemIcon>
                            Address

                        </MenuItem>
                    </Link>

                    <Link to={"./myaccount"}>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>
                                <LiaShoppingBagSolid className='h-7 w-7' />
                            </ListItemIcon>
                            Orders
                            
                        </MenuItem>
                    </Link>

                    <Link to={"./myaccount"}>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>

                                <FaRegHeart className='w-5 h-5' />
                            </ListItemIcon>
                            My-List

                        </MenuItem >
                    </Link >

                    <Link to={"./myaccount"}>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>
                                <LogOut fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Link>
                </Menu >

                <div className='cursor-pointer'>
                    <p>Rahul Pal</p>
                    <span>Rpal78624480@gmail.com</span>
                </div>
            </div >
        </>
    )
}

export default LoginCheck
