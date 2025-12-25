import { useState } from 'react'

import { Box, Button, Rating, TextField } from '@mui/material'

const ReviewSection = () => {
    const [section, setSection] = useState("Description")
    return (
        <section className='my-6'>
            <div className='flex gap-10'>
                <h1 onClick={() => setSection("Description")} className='hover:text-primary cursor-pointer'>Description</h1>

                <h1 onClick={() => setSection("Review")} className='hover:text-primary cursor-pointer'>Review(23)</h1>
            </div>

            <div className='my-4'>
                {section === "Description" ?
                    <div className='p-6 shadow-gray-600 shadow rounded-md'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at provident corporis distinctio assumenda eaque, ducimus officia quam? Nostrum incidunt aliquid aut officia sunt dolorum modi quasi inventore quos. Voluptatum optio quam, dolorum tenetur placeat incidunt vero hic aliquam? Deserunt, at a eligendi consectetur praesentium harum? Incidunt provident odit repellendus animi doloremque eligendi, ipsa, molestias consectetur, aliquam nesciunt assumenda. Obcaecati.</p>
                    </div>
                    :
                    <div className='w-[80%] px-8 py-4 shadow shadow-gray-700/90 rounded-md'>
                        <div className='py-4'>
                            <h1>Customer questions & answers</h1>
                        </div>

                        <div className='scroll !max-h-[400px]'>
                            {Array.from({ length: 10 }).map((idx) => (
                                <div key={idx}>
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




                        <div className='flex flex-col gap-6 p-4 bg-gray-700/10 my-8 justify-center rounded-md'>
                            <h1>Add a Review</h1>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1 } }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="outlined-basic"
                                    label="Write a review "
                                    variant="outlined"
                                    minRows={6}
                                    multiline
                                    InputProps={{
                                        sx: {
                                            alignItems: 'flex-start',
                                            textAlign: 'start'
                                        }
                                    }} />
                            </Box>

                            <Rating name="half-rating-read" defaultValue={2} precision={1} />

                            <Button className='flex gap-4 !bg-primary items-center w-fit !border-1 !border-primary hover:!border-black hover:!bg-black'>
                                <p className='text-white text-sm'>Submit Review</p>
                            </Button>

                        </div>


                    </div>
                }
            </div>
        </section>
    )
}

export default ReviewSection
