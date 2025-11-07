import React, { useState } from 'react'

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


  return (
    <section className='border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white'>
      <div className='p-4'>
        <h1>My Orders</h1>
        <p>There are <span className='text-red-600'>{orders.length}</span> products in your cart</p>
      </div>

      {orders.map((order, idx) => (
        <div key={idx} className='flex items-center gap-6 justify-between px-6'>
          <div>
            <img className='h-25' src={order.img} alt="Error" />
          </div>

          <div className='flex flex-col'>
            <p className='!text-sm'>{order.title}</p>
            <p>{order.quantity} item</p>
            <p className='!text-sm'>{order.orderId}</p>
          </div>

          <div>
            <p className='py-1 px-2 bg-gray-700/20 w-fit !text-[10px] rounded-sm uppercase font-medium'>{order.place}</p>
            <p className='!text-sm'>{order.Customername}</p>
            <div className='flex flex-nowrap'>
              <p>
                <span>{order.address}</span>-<span>{order.city}</span>-<span>{order.state}</span>-<span>{order.pincode}</span>
              </p>

            </div>
            <p>{order.phone}</p>
          </div>

          <span>{order.price}</span>

          <div >
            <p className='!text-sm'>Delivered on Aug 23</p>
            <p className='!text-sm'>Your item has been delivered</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Myorder
