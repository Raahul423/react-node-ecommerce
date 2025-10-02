import React from 'react'
import { AddtwoImage } from '../../assets/Assests'

const SecondAdd = () => {
  return (
    <div className='my-container !pt-14 !pb-10'>
      <div className='flex justify-between gap-2'>
                  {AddtwoImage.map((data,idx)=>(
                      <div key={idx}>
                      <img className='rounded-xl' src={data.Image} alt="" />
                  </div>
                  ))}
              </div>
    </div>
  )
}

export default SecondAdd
