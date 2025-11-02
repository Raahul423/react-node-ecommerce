import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Rating } from '@mui/material';
import { RxCross2 } from "react-icons/rx";

const SizeComponent = ({ item, onsizeChange, onremove }) => {
    const [sizeanchorEl, setSizeAnchorEl] = useState(null);
    const open = Boolean(sizeanchorEl);

    const handleClick = (event) => {
        setSizeAnchorEl(event.currentTarget);
    };

    const handleClose = (newSize) => {
        setSizeAnchorEl(null);
        if(newSize) onsizeChange(item.id, newSize)
    };


    return (
        <section className='py-1'>
            <div className='flex justify-between border-t-1 border-gray-700/50 p-4'>
                <div className='flex gap-4'>
                    <div className='w-25 rounded-md overflow-hidden '>
                        <img className='rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer' src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg" alt="Error" />
                    </div>

                    <div className='flex flex-col gap-1 justify-center'>
                        <p className='!text-sm'>Campus Sutra</p>

                        <h1 className='!text-xl'>Men Comfort Cuban Collar Solid Polycotton Casual Shirt...</h1>

                        <Rating name="half-rating-read" defaultValue={4} precision={1} />

                        <div className='px-2 flex items-center py-1 bg-[#f1f1f1] w-fit rounded-md'>
                            <span onClick={handleClick} className='text-sm flex items-center gap-1 cursor-pointer'>Size: {item.size} <IoMdArrowDropdown /></span>

                            <Menu
                                id="size-menu"
                                anchorEl={sizeanchorEl}
                                open={open}
                                onClose={() => handleClose(null)}

                            >
                                {["S", "M", "L", "XL", "XXL"].map((size) => (
                                    <MenuItem key={size} onClick={()=>handleClose(size)}>
                                        {size}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>

                        <div className='flex gap-4'>
                            <p>₹1350</p>
                            <p className='line-through text-gray-600/70'>₹1450</p>
                            <p className='text-red-600'>
                                19% OFF
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <RxCross2 onClick={()=>onremove(item.id)} className='text-2xl cursor-pointer' />
                </div>
            </div>

        </section>
    )
}

export default SizeComponent
