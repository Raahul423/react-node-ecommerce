import React, { useContext } from 'react'
import { Link } from 'react-router'
import Badge from '@mui/material/Badge';
import { assest } from '../../../assets/Assests'
import { FaRegHeart } from 'react-icons/fa'
import { ShoppingCartIcon } from 'lucide-react'
import { IconButton, Tooltip } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from '../Navigation/Navbar';
import Navdrawer from '../DrawerComponent/Navdrawer';
import Search from './Subheader.jsx/Search';
import LoginCheck from './Subheader.jsx/LoginCheck';
import { CartContext } from '../Context/CartDrawer';
import { MyContext } from '../../../Provider';

const Header = () => {
    const { isAuth } = useContext(MyContext);
    const { toggleDrawer } = useContext(CartContext);

    return (
        <header className='bg-white shadow-xl sticky top-0 z-100 '>
            <div className='top-strip border-1 border-gray-300'>
                <div className='my-container p-4'>
                    <div className='flex items-center justify-between '>
                        <div className='col1 w-[50%]'>
                            <p>Get up to 50% off new season styles, limited time only</p>
                        </div>

                        <div className='col2 '>
                            <ul className='flex gap-4'>
                                <Link className='hover:text-primary transition-all'>Help Center</Link>
                                <Link className='hover:text-primary transition-all'>Order-Tracking</Link>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className='header border-b-1 border-gray-300'>
                <div className=' my-container flex p-4 items-center'>
                    <div className='col1 w-[25%]'>
                        <Link to='/'><img src={assest.logo} alt="logo" /></Link>
                    </div>

                    <div className='col2 w-[45%]'>
                        <Search />
                    </div>

                    <div className='col3 w-[30%] flex gap-2 justify-end  items-center'>

                        {isAuth === true ?
                            <LoginCheck />
                            :
                            <>
                                <Link to={'/login'} className='text-xl hover:text-primary transition-all cursor-pointer'>Login</Link>
                                <span>|</span>
                                <Link to={'/register'} className='text-xl hover:text-primary transition-all cursor-pointer'>Register</Link>
                            </>
                        }


                        <Tooltip title='Wishlist'>
                            <IconButton>
                                <StyledEngineProvider>
                                    <Badge color='secondary' badgeContent={4}>
                                        <FaRegHeart />
                                    </Badge>
                                </StyledEngineProvider>
                            </IconButton>
                        </Tooltip>


                        <Tooltip title='Cart'>
                            <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
                                <StyledEngineProvider>
                                    <Badge color='secondary' badgeContent={4}>
                                        <ShoppingCartIcon />
                                    </Badge>

                                </StyledEngineProvider>
                            </IconButton>
                        </Tooltip>


                    </div>
                </div>
            </div>


            <div>
                <Navbar />
                <Navdrawer />
            </div>
        </header>



    )
}

export default Header
