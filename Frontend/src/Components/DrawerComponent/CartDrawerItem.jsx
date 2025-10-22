import { Button } from '@mui/material';
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';

const CartDrawerItem = () => {
  return (
    <section className='my-container py-4 relative'>
      <div>
        <h1>Shopping Cart (0)</h1>
      </div>

      <span className='horizontal-line' />


      <div className='scroll !max-h-[550px] '>
        {Array.from({ length: 4 }).map((idx) => (
          <div key={idx} className='flex justify-between items-center px-1 py-2  border-b-1 border-gray-600/50'>
            <div className='flex gap-2'>
              <div className="h-20 w-20  overflow-hidden rounded-md">
                <img className='h-20 w-20 rounded-md object-cover object-top hover:scale-110 transition-all ease-in-out cursor-pointer' src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg" alt="" />
              </div>

              <div className='flex flex-col justify-center '>
                <p className="text-gray-800/90">mandarin collar prin...</p>
                <div className='flex gap-4 justify-around'>
                  <p className="text-gray-800/90">Qty : 1</p>
                  <p className="">₹785.00</p>
                </div>
              </div>
            </div>


            <div>
              <MdDelete className='text-2xl' />
            </div>
          </div>
        ))}
      </div>



      <div className='fixed bottom-2 flex flex-col'>
        <div className='flex justify-between border-t-1 border-gray-600/50 py-3'>
          <p className='!font-medium'>2 item</p>
          <p className='!font-medium'>₹1,784.00</p>
        </div>


        <div className='flex justify-between border-t-1 border-gray-600/50 py-3'>
          <p className='!font-medium'>Total (tax excl.)</p>
          <p className='!font-medium'>₹1,784.00</p>
        </div>


        <div className='flex justify-between gap-6'>
          <Link to={'/cart'}>
            <Button className='flex gap-4 items-center w-fit !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3'>
              <p className='text-white text-sm'>View Cart</p>
            </Button>
          </Link>

          <Link to={'/checkout'} >
            <Button className='flex gap-4 items-center w-fit !border-1 !border-primary hover:!border-black  hover:!bg-black !px-10 !py-3 group'>
              <p className='text-primary text-sm group-hover:text-white'>Checkout</p>
            </Button>
          </Link>

        </div>
      </div>


    </section>
  )
}

export default CartDrawerItem

