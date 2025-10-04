import React from 'react'
import { ListItem } from '../../assets/Assests'
import { Link } from 'react-router'


const HomeItems = () => {
  return (
      <div className='my-container flex gap-2 justify-between !my-8'>
      {ListItem.map((data,idx)=>(
        <Link key={idx}>
        <div key={idx} className='bg-white flex flex-col justify-center items-center p-6 gap-2 border-1 border-gray-500/20 ' >
            <img className='h-25 w-30 object-contain hover:scale-105 transition-all' src={data.Image} alt="" />
            <h1 className='!text-xl'>{data.Title}</h1>
        </div>
        </Link>
        
        
      ))}
    </div>
    
  )
}

export default HomeItems
