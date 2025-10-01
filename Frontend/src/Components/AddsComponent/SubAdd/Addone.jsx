import React from 'react'

const Addone = () => {
  return (
    <div className='w-full flex gap-6 h-120 overflow-hidden rounded-xl'>
       <div className='col1 w-[70%] rounded-xl'>
                    <img className='h-120 w-full rounded-xl object-cover' src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" alt="Error" />
                </div>

                <div className='col2 w-[30%] flex flex-col gap-4 overflow-hidden '>
                    <div className=' relative overflow-hidden rounded-xl'>
                        <img className='w-full rounded-xl' src="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" alt="error" />
                        <p className='absolute top-0 right-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, labore.</p>
                    </div>
                    <div className='overflow-hidden rounded-xl'>
                        <img className='w-full rounded-xl' src="https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg" alt="" />
                    </div>
                </div>
    </div>
  )
}

export default Addone
