import { Button, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import { LogOut, Settings } from 'lucide-react';
import { useContext, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6'
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { Link } from 'react-router';
import { MyContext } from '../../../Provider';

const LoginCheck = () => {
    const { user, logout } = useContext(MyContext)
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
            <div className='flex items-center'>
                <Tooltip title="tap to open">
                    <Button onClick={handleClick} className='!w-15 !h-15 !rounded-full !min-w-0 !text-black'>
                        <FaCircleUser className='h-10 w-10' />
                    </Button>
                </Tooltip>


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
                    <Link to={"./myaccount/info"}>
                        <MenuItem onClick={handleClose} >
                            <ListItemIcon>
                                <HiOutlineUserCircle className='h-7 w-7' />
                            </ListItemIcon>
                            My Account
                        </MenuItem>
                    </Link>


                    <Link to={"./myaccount/myorder"}>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>
                                <LiaShoppingBagSolid className='h-7 w-7' />
                            </ListItemIcon>
                            Orders

                        </MenuItem>
                    </Link>

                    <Link to={"./myaccount/mylist"}>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>

                                <FaRegHeart className='w-5 h-5' />
                            </ListItemIcon>
                            My-List

                        </MenuItem >
                    </Link >

                    <Link to={"/"} onClick={logout}>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>
                                <LogOut fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Link>
                </Menu >

                <div className='flex flex-col'>
                    <span>{user?.fullName}</span>
                    <span>{user?.email}</span>
                </div>
            </div >
        </>
    )
}

export default LoginCheck
