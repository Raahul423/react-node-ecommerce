import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { assest } from '../../../assets/Assests';
import { Link, useNavigate } from 'react-router-dom';
import LoginCheck from './Subheader.jsx/LoginCheck';
import Search from './Subheader.jsx/Search';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FaHeart, FaUser } from 'react-icons/fa';
import { RiAccountCircleFill, RiShoppingBag4Fill } from "react-icons/ri";
import { FaCartShopping } from 'react-icons/fa6';
import { BiSolidCategory } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const ResponsiveHeader = ({ isAuth, user, logout }) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const HeaderDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const menuItems = [
        { text: 'My Account', icon: <RiAccountCircleFill />, path: "/myaccount/info" },
        { text: 'My Orders', icon: <RiShoppingBag4Fill />, path: "/myaccount/myorder" },
        { text: 'My Wishlist', icon: <FaHeart />, path: "/myaccount/mylist" },
        { text: 'My Cart', icon: <FaCartShopping />, path: "/veiwcart" },
        { text: 'LogOut', icon: <FiLogOut />, action: "logout" }
    ];

    const handlemenu = (item) => {
        if (item.action === "logout") {
            logout();
            return;
        } else {
            navigate(item.path)
        }
    }


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={HeaderDrawer(false)}>
            <List>
                {menuItems.slice(0, 4).map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon className='!min-w-10 text-2xl'>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText onClick={() => handlemenu(item)} primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {menuItems.slice(4).map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon className='!min-w-10 text-2xl'>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText onClick={logout} primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <section className='md:hidden my-container !mt-6 sticky top-0'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div>
                        <HiOutlineBars3CenterLeft className='text-3xl' onClick={HeaderDrawer(true)} />
                        <Drawer open={open} onClose={HeaderDrawer(false)}>
                            <div className='px-4 gap-4 bg-primary h-15 flex items-center'>
                                {isAuth ?
                                    <div className='flex items-center gap-2'>
                                        <img className='h-8 w-8 object-cover rounded-full' src={user?.avatar} alt="error" />
                                        <p className='flex flex-col '>
                                            <span className='text-white'>Welcome back,</span>
                                            <span className='text-white'>{user?.fullName}</span>
                                        </p>
                                    </div>
                                    :
                                    <>
                                        <FaUser className='text-2xl text-white' />
                                        <p className='!text-xl text-white'>Login & Signup</p>
                                    </>
                                }

                            </div>
                            {DrawerList}
                        </Drawer>
                    </div>

                    <Link to={"/"}>
                        <img className='w-40 ' src={assest.logo} alt="error" />
                    </Link>

                </div>

                <div>
                    {isAuth === true ?
                        <LoginCheck />
                        :
                        <div className='flex items-center gap-2'>
                            <MdOutlineAccountCircle className='text-2xl' />
                            <Link to={'/login'} className=' hover:text-primary transition-all cursor-pointer text-xl'>Login</Link>
                        </div>
                    }
                </div>

            </div>

            <div className='mt-5'>
                <Search />
            </div>

        </section>
    )
}

export default ResponsiveHeader;
