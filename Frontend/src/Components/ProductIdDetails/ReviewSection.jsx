import React, { useState } from 'react'
import Description from './SubProduct/Description'
import Review from './SubProduct/Review'

const ReviewSection = () => {
    const [section,setSection] = useState("Description")
    return (
        <section className='my-6'>
            <div className='flex gap-10'>
                <h1 onClick={()=>setSection("Description")} className='hover:text-primary cursor-pointer'>Description</h1>

                <h1 onClick={()=>setSection("Review")} className='hover:text-primary cursor-pointer'>Review(23)</h1>
            </div>

            <div className='py-4'>
               {section === "Description" ? <Description/> : <Review/>}
            </div>
        </section>
    )
}

export default ReviewSection
