import { Button } from '@mui/material'
import { Link } from 'react-router';
import SizeComponent from './Size/SizeComponent';
import { useState } from 'react';


const CartComponent = () => {
    const [cartItem, setCartItem] = useState([
        {
            id: 1,
            name: "Campus Sutra",
            title: "Men Comfort Cuban Collar Solid Polycotton Casual Shirt...",
            price: "₹1350",
            originalPrice: "₹1450",
            size: "S",
            img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
        },
        {
            id: 2,
            name: "Levis",
            title: "Men Regular Fit Cotton Casual Shirt...",
            price: "₹1750",
            originalPrice: "₹1950",
            size: "M",
            img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
        },
         {
            id: 3,
            name: "Levis",
            title: "Men Regular Fit Cotton Casual Shirt...",
            price: "₹1750",
            originalPrice: "₹1950",
            size: "M",
            img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
        },
         {
            id: 4,
            name: "Levis",
            title: "Men Regular Fit Cotton Casual Shirt...",
            price: "₹1750",
            originalPrice: "₹1950",
            size: "M",
            img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
        },
    ])


    const sizecomponent = (id, setsize) => {
        setCartItem((prev) => {
            return prev.map((item) => {
                return item.id === id ? { ...item, size: setsize } : item
            })
        })
    }


    const removeItem = (id) => {
        setCartItem((prev) => {
            return prev.filter((item) => {
                return item.id !== id
            })
        })
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
                        <SizeComponent
                            key={item.id}
                            item={item}
                            onsizeChange={sizecomponent}
                            onremove={removeItem}
                        />
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
                    <Link>
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
