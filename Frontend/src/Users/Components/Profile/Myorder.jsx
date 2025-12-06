import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";

const Myorder = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Campus Sutra",
      title: "Men Comfort Cuban Collar Solid Polycotton Casual Shirt...",
      price: "₹1350",
      quantity: 1,
      orderId: "6901c10c228db479bb5cd754",
      img: "https://rukminim2.flixcart.com/image/200/200/xif0q/headphone/6/s/j/-original-imahyz8hgbgkyrdd.jpeg?q=90",
      Customername: "Rahul pal",
      place: "Home",
      phone: 7458015120,
      address: "yiu yrwuiyuiyrw",
      city: "Kanpur",
      state: "Uttar pradesh",
      pincode: 208007
    },
  ])
  console.log(setOrders);
  


  return (
    <section className=' flex flex-col gap-2'>
      <div className='p-4 border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white'>
        <h1>My Orders</h1>
        <p>There are <span className='text-red-600'>{orders.length}</span> products in your cart</p>
      </div>

      {orders.map((order, idx) => (
        <div key={idx} className='flex items-center gap-6 justify-around px-2 py-4 border-2 border-gray-600/10 rounded-md hover:shadow-sm hover:shadow-gray-700/80 bg-white transition-all'>
          <div className='overflow-hidden'>
            <img className='w-20' src={order.img} alt="Error" />
          </div>

          <div className='flex flex-col'>
            <p className='!text-sm'>{order.title}</p>
            <span className='text-gray-700/80'>{order.quantity} item</span>
            <span className='!text-sm text-gray-700'>{order.orderId}</span>
          </div>

          <div>
            <p className='py-1 px-2 bg-gray-700/20 w-fit !text-[10px] rounded-sm uppercase font-medium'>{order.place}</p>
            <p className='!text-sm'>{order.Customername}</p>
            <div className='flex flex-nowrap text-gray-600'>
              <p className='!text-sm'>
                <span>{order.address}</span>-<span>{order.city}</span>-<span>{order.state}</span>-<span>{order.pincode}</span>
              </p>

            </div>
            <p className='text-gray-600'>{order.phone}</p>
          </div>

          <span className='font-medium'>{order.price}</span>

          <div>
            <span className='!text-2xs font-medium flex items-center'>
              <GoDotFill className='!text-green-500'/>
              Delivered on Aug 23</span>
            <p className='!text-sm !text-gray-600'>Your item has been delivered</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Myorder
