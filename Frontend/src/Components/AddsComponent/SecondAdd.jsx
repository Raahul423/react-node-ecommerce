import React from 'react'
import { addimage } from '../../assets/Assests'


const SecondAdd = () => {
  return (
    <div className='my-container !pt-14 !pb-10'>
      <div className='flex justify-between gap-2'>
                  {addimage.map((data,idx)=>(
                      <div key={idx} className='overflow-hidden rounded-xl'>
                      <img className='rounded-xl transform hover:scale-105  hover:rotate-z-2 transition-all duration-300' src={data.image} alt="error" />
                  </div>
                  ))}
              </div>
    </div>
  )
}

export default SecondAdd
