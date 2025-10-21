import { Rating } from '@mui/material'
import React from 'react'

const CartDrawerItem = () => {
  return (
    <section className='my-container py-4'>
      <div>
        <h1>Shopping Cart (0)</h1>
      </div>

      <span className='horizontal-line'/>


     <div className='scroll !max-h-[600px] '>
        {Array.from({ length: 10 }).map((idx) => (
          <div key={idx}>
            <div className='flex justify-between items-center'>
              <div className='flex gap-4 items-center'>
                <div className='rounded-md flex items-center justify-center overflow-hidden'>
                  <img className='h-20 w-20 rounded-md object-cover object-top hover:scale-110 transition-all ease-in-out cursor-pointer' src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg" alt="" />
                </div>
                <div>
                  <p>Nina</p>
                  <p>{Date.now()}</p>
                  <p>Good</p>
                </div>
              </div>


              <div>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              </div>
            </div>

            <span className='horizontal-line'></span>
          </div>
        ))}
      </div>

       

      <div className='fixed bottom-0 w-full'>
         <span className='horizontal-line'/>
         <div>
          hii
         </div>
      </div>


    </section>
  )
}

export default CartDrawerItem

