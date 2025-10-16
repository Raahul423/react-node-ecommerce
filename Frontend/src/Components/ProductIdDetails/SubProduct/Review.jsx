import { Checkbox, FormControlLabel, FormGroup, Rating } from '@mui/material'
import React from 'react'

const Review = () => {
  return (
    <section className='w-[80%] px-8 py-4 shadow shadow-gray-700/90'>
      <div className='py-4'>
        <h1>Customer questions & answers</h1>
      </div>


      <div className='scroll !max-h-[400px]'>
        {Array.from({ length: 10 }).map(() => (
          <div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-4 items-center'>
                <div className=' h-20 w-20 bg-gray-700/80  rounded-full flex items-center justify-center overflow-hidden'>
                  <img className='h-20 w-20' src="https://ecommerce-frontend-view.netlify.app/user.jpg" alt="" />
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




        <div>
          <h1>Add a Review</h1>
        </div>


    </section>
  )
}

export default Review
