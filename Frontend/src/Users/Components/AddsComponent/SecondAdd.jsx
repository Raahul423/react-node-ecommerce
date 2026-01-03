import React from 'react'
import { addimage } from '../../../assets/Assests'


const SecondAdd = () => {
  return (
    <section className='my-container md:!pt-14 md:!pb-10 max-md:py-6'>
      <div className='md:flex grid-cols-2 grid justify-between gap-2'>
                  {addimage.map((data,idx)=>(
                      <div key={idx} className='overflow-hidden rounded-xl'>
                      <img className='rounded-xl  transform hover:scale-105  hover:rotate-z-2 transition-all duration-300' src={data.image} alt="error" />
                  </div>
                  ))}
              </div>
    </section>
  )
}

export default SecondAdd
