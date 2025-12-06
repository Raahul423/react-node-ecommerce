import React from 'react'
import { AddtwoImage } from '../../../../assets/Assests'

const Addtwo = () => {
    return (
        <div className='flex justify-between gap-2'>
            {AddtwoImage.map((data,idx)=>(
                <div key={idx}>
                <img className='rounded-xl' src={data.Image} alt="" />
            </div>
            ))}
        </div>
    )
}

export default Addtwo
