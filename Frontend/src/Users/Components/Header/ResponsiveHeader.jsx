import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { InboxIcon, MailIcon } from 'lucide-react';
import { useState } from 'react'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { assest } from '../../../assets/Assests';
import { Link } from 'react-router-dom';
import LoginCheck from './Subheader.jsx/LoginCheck';
import Search from './Subheader.jsx/Search';

const ResponsiveHeader = ({ isAuth }) => {

    const [open, setOpen] = useState(false);

    const HeaderDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={HeaderDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <section className='md:hidden my-container !my-4'>
            <div className='flex  items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <HiOutlineBars3CenterLeft className='text-2xl' onClick={HeaderDrawer(true)} />
                        <Drawer open={open} onClose={HeaderDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </div>

                    <Link to={"/"}>
                        <img className='w-35' src={assest.logo} alt="error" />
                    </Link>

                </div>

                <div>
                    {isAuth === true ?
                        <LoginCheck />
                        :
                        <>
                            <Link to={'/login'} className=' hover:text-primary transition-all cursor-pointer'>Login</Link>
                            <span> | </span>
                            <Link to={'/register'} className='hover:text-primary transition-all cursor-pointer'>Register</Link>
                        </>
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
