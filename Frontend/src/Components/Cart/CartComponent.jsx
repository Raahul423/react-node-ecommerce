import { Button } from '@mui/material'
import { Link } from 'react-router';
import SizeComponent from './Size/SizeComponent';


const CartComponent = () => {

    return (
        <section className='my-container flex px-12 py-10 gap-6'>
            <div className='col1 w-[70%] border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white'>

                {/* Heading Part of Cart section */}
                <div className='p-4'>
                    <h1>Your Cart</h1>
                    <p>There are <span className='text-red-600'>4</span> products in your cart</p>
                </div>


                {/* data section of cart section  */}

                <div>
                    <SizeComponent productsize={"S"} />
                    <SizeComponent productsize={"S"} />
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
