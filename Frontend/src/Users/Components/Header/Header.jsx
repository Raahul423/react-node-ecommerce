import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import { CartContext } from '../../../Context/CartDrawer';
import { MyContext } from '../../../Provider';
import api from '../../../Utils/api';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import ResponsiveHeader from './ResponsiveHeader';

const Header = () => {
    const { isAuth, authloading, user, logout } = useContext(MyContext);
    const { toggleDrawer } = useContext(CartContext);
    const [cartProducts, setCartProducts] = useState([0])
    const [wishlistProduct, setWishlistProduct] = useState([0])

    useEffect(() => {
        const productCount = async () => {
            const res = await api.get("cartitems/countproduct");
            setCartProducts(res?.data?.totalproducts);
        }
        productCount();
    }, [])

    useEffect(() => {
        const wishlistcount = async () => {
            const res = await api.get("/wishlist/countwishlist");
            setWishlistProduct(res?.data?.wishlistproducts);
        }
        wishlistcount();
    }, [])



    if (authloading) {
        return <div> Loading ..... </div>
    }

    return (
        <header className='bg-white shadow-xl sticky top-0 z-100 '>
            <div className='top-strip border-1 border-gray-300'>
                <div className='my-container p-4 max-md:hidden'>
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


            {/* for destop veiw */}
            <div className='max-md:hidden header border-b-1 border-gray-300'>
                <div className=' my-container flex p-4 py-2 items-center justify-between'>

                    <div className='col1 w-[25%]'>
                        <Link to='/'><img src={assest.logo} alt="logo" /></Link>
                    </div>

                    <div className='col2 w-[45%] '>
                        <Search />
                    </div>

                    <div className='col-3 w-[30%] flex gap-2 justify-end  items-center'>

                        {isAuth === true ?
                            <LoginCheck />
                            :
                            <>
                                <Link to={'/login'} className=' hover:text-primary transition-all cursor-pointer text-xl'>Login</Link>
                                <span>|</span>
                                <Link to={'/register'} className='hover:text-primary transition-all cursor-pointer text-xl'>Register</Link>
                            </>
                        }


                        <Tooltip title='Wishlist'>
                            <Link to={"/myaccount/mylist"} >
                                <IconButton>
                                    <StyledEngineProvider>
                                        <Badge color='secondary' badgeContent={wishlistProduct}>
                                            <FaRegHeart />
                                        </Badge>
                                    </StyledEngineProvider>
                                </IconButton>
                            </Link>
                        </Tooltip>


                        <Tooltip title='Cart'>
                            <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
                                <StyledEngineProvider>
                                    <Badge color='secondary' badgeContent={cartProducts}>
                                        <ShoppingCartIcon />
                                    </Badge>

                                </StyledEngineProvider>
                            </IconButton>
                        </Tooltip>


                    </div>
                </div>
            </div>

            {/* for mobile veiw */}
            <ResponsiveHeader isAuth={isAuth} user={user} logout={logout}/>


            <div>
                <Navbar />
                <Navdrawer />
            </div>
        </header>



    )
}

export default Header
