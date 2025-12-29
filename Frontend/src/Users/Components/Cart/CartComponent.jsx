import { Button, Rating } from '@mui/material'
import { RxCross2 } from "react-icons/rx";
import { Link, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';


const CartComponent = () => {
    const { toastMessage, authloading } = useContext(MyContext);
    const { isAuth } = useContext(MyContext);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {

        const cartItmedata = async () => {
            const res = await api.get("/cartitems/allproducts");
            setCartItem(res?.data?.cartItems);
            console.log(res);

        }
        cartItmedata();
    }, []);

    if (authloading) {
        return <div>Loading...</div>;
    }

    if (!isAuth) {
        toastMessage("error", "Please login first!");
        return <Navigate to="/login" replace />;
    }




    const deleteCartItems = async (productId) => {
        try {
            const itemid = productId
            const res = await api.delete("cartitems/deleteitem", {
                data: { itemId: itemid }
            });
            setCartItem((prev) => {
                return prev.filter((item) => {
                    return item?._id !== itemid
                })
            })
            toastMessage("success", res?.data?.message);
        } catch (error) {
            console.error(error?.message);
        }
    }

    return (
        <section className='my-container flex px-12 py-10 gap-6'>
            <div className='col1 w-[70%] border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white h-fit'>

                {/* Heading Part of Cart section */}
                <div className='p-4'>
                    <h1>Your Cart</h1>
                    <p>There are <span className='text-red-600'>{cartItem.length}</span> products in your cart</p>
                </div>


                {/* data section of cart section  */}

                <div>
                    {cartItem.map((item) => (
                        <div className='flex justify-between border-t-1 border-gray-700/50 p-4'>
                            <div className='flex gap-4'>
                                <div className='w-25 rounded-md overflow-hidden '>
                                    <img className='rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer' src={item?.productItems?.images[0]?.url} alt="Error" />
                                </div>

                                <div className='flex flex-col gap-1 justify-center'>
                                    <p className='!text-sm'>{item?.productItems?.name}</p>

                                    <h1 className='!text-xl'>{item?.productItems.brand}</h1>

                                    <Rating name="half-rating-read" defaultValue={item?.productItems?.rating} readOnly />


                                    <div className='flex gap-4'>
                                        <p>₹{item?.productItems?.price}</p>
                                        <p className='line-through text-gray-600/70'>₹{item?.productItems?.oldprice}</p>
                                        <p className='text-red-600'>
                                            {item?.productItems?.discount}% OFF
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <RxCross2 onClick={() => deleteCartItems(item?._id)} className='text-2xl cursor-pointer' />
                            </div>
                        </div>
                    ))}
                </div>


            </div>



            {/* Cart Totals Sections  */}

            <div className='col1 w-[30%]  px-6 border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white h-fit sticky top-60'>
                <div className='border-gray-700/60 border-b-1 py-3 '>
                    <h1>Cart Totals
                    </h1>
                </div>

                <div>
                    <div className='flex justify-between py-3'>
                        <p>Subtotal</p>
                        <p>₹5,450.00</p>
                    </div>
                    <div className='flex justify-between py-3'>
                        <p>Shipping</p>
                        <p>₹Free</p>
                    </div>
                    <div className='flex justify-between py-3'>
                        <p>Total Amount</p>
                        <p>₹5,450.00</p>
                    </div>
                </div>
                <div className='py-6'>
                    <Link to={"/checkout"}>
                        <Button className='flex gap-4 items-center w-full !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3'>
                            <p className='text-white text-sm'>Checkout</p>
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default CartComponent
