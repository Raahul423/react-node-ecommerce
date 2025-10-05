import React from 'react'
import { AddtwoImage } from '../../assets/Assests'

const SecondAdd = () => {
  return (
    <div className='my-container !pt-14 !pb-10'>
      <div className='flex justify-between gap-2'>
                  {AddtwoImage.map((data,idx)=>(
                      <div key={idx} className='overflow-hidden'>
                      <img className='rounded-xl transform hover:scale-108  hover:rotate-z-3 transition-all duration-300' src={data.Image} alt="" />
                  </div>
                  ))}
              </div>
    </div>
  )
}

export default SecondAdd
