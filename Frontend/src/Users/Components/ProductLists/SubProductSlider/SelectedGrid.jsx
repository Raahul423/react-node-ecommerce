import { useContext, useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { MdArrowForwardIos, MdOutlineZoomOutMap } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { DialogContext } from '../../../../Context/DialogComponent';
import { MyContext } from '../../../../Provider';
import api from '../../../../Utils/api';
import { useSwipeable } from "react-swipeable";




const SelectedItems = ({ fetchProducts, loading }) => {
    const navigate = useNavigate();
    const { isAuth, authloading, toastMessage } = useContext(MyContext);
    const { setIsopendialogbox } = useContext(DialogContext)
    const [wishlistMap, setWishlistMap] = useState({});
    

    useEffect(() => {
        if (!isAuth) return;

        const fetchWishlist = async () => {
            try {
                const res = await api.get("/wishlist/wishlist-products");
                
               const map = {};
                res.data.wishlistItems.forEach((item) => {
                    map[item.productId._id] = true;
                });
                setWishlistMap(map);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchWishlist();
    }, [isAuth]);


    const handleWishlist = async (productId) => {
        if (!isAuth) {
            toastMessage("error", "Login to Continue");
            navigate("/login");
            return;
        }

        const isWishlisted = wishlistMap[productId];
        // console.log(isWishlisted); // true or false
        // console.log(wishlistMap);
        
        

        setWishlistMap((prev) => ({
            ...prev,
            [productId]: !isWishlisted,
        }));

        try {
            if (!isWishlisted) {
                await api.post("/wishlist/add-items", { productId });
                toastMessage("success", "Added to Wishlist")
            } else {
                await api.delete("/wishlist/remove-products", {
                    data: { productId },
                });
                toastMessage("success", "Removed from Wishlist")
            }
        } catch (error) {
            setWishlistMap((prev) => ({
                ...prev,
                [productId]: isWishlisted,
            }));
            console.error(error?.message);
        }
    };


    if (authloading) {
        <div>Loading...</div>
    }


    const SwipeCircle = ({ productId }) => {
        const navigate = useNavigate();
        const [deltaX, setDeltaX] = useState(0);

        const handlers = useSwipeable({
            onSwiping: (e) => {
                setDeltaX(Math.min(e.deltaX, 120)); // max drag
            },

            onSwiped: () => {
                if (deltaX > 70) {
                    navigate(`/product/${productId}`);
                }
                setDeltaX(0); // reset
            },

            trackMouse: true,
            preventScrollOnSwipe: true,
        });

        return (
            <div className="w-full mt-3">
                {/* Background strip */}
                <div className="relative w-full h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center px-1  overflow-hidden">

               
                    <span
                        className={`absolute left-12 text-sm text-gray-600 transition-opacity duration-200 ${deltaX > 20 ? "opacity-30" : "opacity-100"
                            }`}
                    >
                        Swipe to see..
                    </span>

                    
                    <div
                        {...handlers}
                        style={{
                            transform: `translateX(${deltaX}px)`,
                            transition: deltaX === 0 ? "transform 0.25s ease" : "none",
                        }}
                        className="
            w-10 h-10
            rounded-full
            bg-primary
            flex items-center justify-center
            cursor-grab active:cursor-grabbing
            shadow-lg
            z-10
          "
                    >
                        <MdArrowForwardIos className="text-white text-lg" />
                    </div>
                </div>
            </div>
        );
    };


    return (
        <section>
            {loading ?
                <>Loading...</>
                :
                <>
                    {fetchProducts.length > 0 ?
                        <div className='grid md:grid-cols-5 grid-cols-2 md:gap-4 gap-3'>
                            {fetchProducts.map((products, idx) => (
                                <div key={idx} className='md:rounded-md shadow md:shadow-gray-500 md:w-47 md:mx-auto'>
                                    <div className='relative md:overflow-hidden group'>
                                        <Link to={`/product/${products?._id}`}>
                                            <img className='p-2 md:h-50  w-full rounded-md object-cover object-top' src={products?.images[0]?.url} alt="error" />

                                            <img className='max-md:hidden p-2 h-60 w-full group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover' src={products?.images[1]?.url} alt='error' />

                                        </Link>

                                        <div className='flex flex-col  justify-center items-center gap-1 absolute md:-top-50 top-0 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100 md:right-3  md:group-hover:top-3 '>
                                            <div onClick={() => setIsopendialogbox(true)} className='info max-md:hidden'>
                                                <MdOutlineZoomOutMap className='text-xl hover:!stroke-white 
                                                ' />
                                            </div>

                                            <div className="info">
                                                {wishlistMap[products._id] ? (
                                                    <FaHeart
                                                        onClick={() => handleWishlist(products._id)}
                                                        className="text-xl text-primary cursor-pointer"
                                                    />
                                                ) : (
                                                    <FaRegHeart
                                                        onClick={() => handleWishlist(products._id)}
                                                        className="text-xl cursor-pointer"
                                                    />
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                    <div className='md:p-4 p-2 flex flex-col gap-1'>
                                        <p className='!text-md text-gray-900/80'>{products.brand}</p>
                                        <p className='!text-[1.1em] font-medium md:two-line-ellipsis one-line-ellipsis'>{products.name}</p>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={products.rating} precision={products.rating} readOnly />
                                        </Stack>

                                        <div className='flex justify-between'>
                                            <p className='text-green-600 flex items-center'>{products?.discount}%</p>
                                            <p className='text-gray-900/80 line-through '>₹{products.oldprice}</p>
                                            <p className='text-primary '>₹{products.price}</p>
                                        </div>


                                        <SwipeCircle productId={products._id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className='flex items-center'>
                            <img src="/noproduct.png" alt="error" />
                            <h1>No product found....</h1>
                        </div>
                    }
                </>}


        </section >
    )
}

export default SelectedItems
