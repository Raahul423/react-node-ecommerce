import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { Link } from 'react-router'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Context } from '../../../App';


const SelectedItems = () => {
    const context = useContext(Context);

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <section className='grid'>
            <div className='flex flex-wrap items-center gap-4'>
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className='rounded-md shadow shadow-gray-500 w-47 mx-auto'>
                        <div className='relative overflow-hidden group '>

                            <Link onClick={scroll} to={'/product/7686'}>
                                <img className='h-50 w-full rounded-md object-cover' src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" alt="error" />

                                <img className='h-50 w-full group-hover:opacity-100 opacity-0 absolute top-0 left-0 transition-all  duration-800 ease-in-out object-cover' src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" alt="error" />

                            </Link>

                            <div className='flex flex-col  justify-center items-center gap-1 absolute -top-50 transition-all duration-500 opacity-0 group-hover:opacity-100 right-3 group-hover:top-3'>
                                <div onClick={() => context.setIsopendialogbox(true)} className='info'>
                                    <MdOutlineZoomOutMap className='text-xl hover:!stroke-white hover:!fill-white' />
                                </div>

                                <div className='info'>
                                    <FaRegHeart className='text-xl hover:!stroke-white hover:!fill-white' />
                                </div>
                            </div>
                        </div>

                        <div className='p-4 flex flex-col gap-1'>
                            <p className='!text-md text-gray-900/80'>Flying Machine</p>
                            <p className='!text-[1.1em] font-medium'>women-wide leg high-rise...</p>
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            </Stack>

                            <div className='flex justify-between'>
                                <p className='text-gray-900/80 line-through'>₹1,299</p>
                                <p className='text-primary'>₹999</p>
                            </div>

                            <Button className='flex gap-4 items-center w-full !border-1 !border-primary group hover:!border-black hover:!bg-black'>
                                <AiOutlineShoppingCart className='text-primary text-xl group-hover:text-white ' />
                                <p className='text-primary group-hover:text-white text-sm'>Add to Cart</p>
                            </Button>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SelectedItems
