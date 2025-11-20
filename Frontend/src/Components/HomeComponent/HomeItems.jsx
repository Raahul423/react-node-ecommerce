import React from 'react'
import { ListItem } from '../../assets/Assests'
import { Link } from 'react-router'


const HomeItems = () => {
  return (
    <div className='my-container flex gap-2 justify-between !my-8'>
      {ListItem.map((data, idx) => (
        <Link key={idx}>
          <div key={idx} className='bg-white flex flex-col justify-center items-center px-6 py-4 gap-2 border-1 border-gray-500/20 ' >
            <div className='overflow-hidden'>
              <img className='object-contain hover:scale-105 transition-all' src={data.Image} alt="" />
            </div>

            <span>
              <h2 className='text-xl'>{data.Title}</h2>
            </span>

          </div>
        </Link>


      ))}
    </div>

  )
}

export default HomeItems
