import { Button } from '@mui/material'
import { useEffect, useState } from 'react';
import { IoMdCash } from 'react-icons/io';
import { IoLogoPaypal } from 'react-icons/io5';
import { SiRazorpay } from "react-icons/si";
import api from '../../../../Utils/api';

const Paymentsection = () => {
    const [orderItems, setOrderItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const Orders = async () => {
            try {
                const res = await api.get("cartitems/allproducts");
                console.log(res);

                setOrderItems(res?.data?.cartItems);
            } catch (error) {
                console.error(error?.message);
            }
        }
        Orders();
    }, []);

    useEffect(() => {
    const calTotal = orderItems.reduce(
      (acc, item) => acc + (item.productItems?.price * item.quantity),
      0
    );
    setTotal(calTotal);
  }, [orderItems]);
    return (
        <section className='my-container rounded-md'>
            <div className='py-3 border-b border-gray-700/30'>
                <h1>Your Order</h1>
            </div>

            <div className='flex justify-between py-3 border-gray-700/30 border-b'>
                <p>Product</p>
                <p>Subtotal</p>
            </div>


            <div className='scroll my-4'>
                {orderItems.map((items, idx) => (
                    <div key={idx} className='flex justify-between my-2'>
                        <div className='flex gap-2 items-center'>
                            <img className='h-15 w-15 object-cover object-top rounded-md' src={items?.productItems?.images[0]?.url} alt="error" />

                            <div className='flex flex-col'>
                                <p>{items?.productItems?.name}</p>
                                <p>Qty: <span>{items.quantity}</span></p>
                            </div>
                        </div>

                        <div>
                            <p>₹{items?.productItems?.price.toLocaleString('en-IN')}.00</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='flex justify-between'>
                <p className='font-semibold !text-xl'>Total Amount:</p>
                <span className='font-semibold !text-xl'>₹{total.toLocaleString('en-IN')}.00</span>
            </div>

            <div className='flex flex-col gap-4 py-4'>
                <Button className=' flex gap-4 !bg-primary !text-white hover:!bg-black !py-2 items-center'>
                    <SiRazorpay className='text-xl' />
                    <p>Razor Pay</p>
                </Button>

                <Button className=' flex gap-4 items-center !bg-yellow-300 hover:!bg-amber-400 !text-white !py-2'>
                    <IoLogoPaypal className="text-xl text-blue-500" />
                    <p className='text-black'>PayPal</p>
                </Button>

                <Button className='flax gap-4 items-center !bg-gray-800/90 !text-white hover:!bg-black !py-2'>
                    <IoMdCash className="text-xl" />
                    <p>Cash on Delivery</p></Button>
            </div>
        </section>
    )
}

export default Paymentsection
