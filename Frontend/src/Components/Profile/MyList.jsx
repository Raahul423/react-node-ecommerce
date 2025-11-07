import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const MyList = () => {
  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      name: "Campus Sutra",
      title: "Men Comfort Cuban Collar Solid Polycotton Casual Shirt...",
      price: "₹1350",
      originalPrice: "₹1450",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },
    {
      id: 2,
      name: "Levis",
      title: "Men Regular Fit Cotton Casual Shirt...",
      price: "₹1750",
      originalPrice: "₹1950",
      img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
    },

  ])


  const removeItem = (id) => {
    setCartItem((prev) => {
      return prev.filter((item) => {
        return item.id !== id
      })
    })
  }


  return (
    <section className='border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white'>

        {/* Heading Part of Cart section */}
        <div className='p-4'>
          <h1>Your Cart</h1>
          <p>There are <span className='text-red-600'>{cartItem.length}</span> products in your cart</p>
        </div>
      


      {cartItem.map((item, idx) => (
        <div key={idx} className='flex justify-between border-t-1 border-gray-700/50 p-4'>
          <div className='flex gap-4'>
            <div className='w-25 rounded-md overflow-hidden '>
              <img className='rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer' src={item.img} alt="Error" />
            </div>

            <div className='flex flex-col gap-1 justify-center'>
              <p className='!text-sm'>{item.name}</p>

              <h1 className='!text-xl'>{item.title}</h1>

              <Rating readOnly name="half-rating-read" defaultValue={4} precision={1} />

              <div className='flex gap-4'>
                <p>{item.price}</p>
                <p className='line-through text-gray-600/70'>{item.originalPrice}</p>
                <p className='text-red-600'>
                  19% OFF
                </p>
              </div>
            </div>
          </div>

          <div>
            <RxCross2 onClick={() => removeItem(item.id)} className='text-2xl cursor-pointer' />
          </div>
        </div>
      ))}


    </section>
  )
}

export default MyList
