import { Rating } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import api from '../../../Utils/api';
import { MyContext } from '../../../Provider';

const MyList = () => {
  const {toastMessage} = useContext(MyContext)
  const [cartItem, setCartItem] = useState([]);


  useEffect(()=>{
    const fetchWishlist = async()=>{
      const res = await api.get("/wishlist/wishlist-products");
      setCartItem(res?.data?.wishlistItems);
    }
    fetchWishlist();
  },[]);
 

  const deletewishlist = async(id)=>{
     const backup = [...cartItem];
    try {
      const res = await api.delete("/wishlist/remove-products",{
        data:{productId : id}
      })
      setCartItem((prev)=>prev.filter((item)=>item?._id !== id));
      toastMessage("success",res?.data?.message);
    } catch (error) {
        setCartItem(backup);
      console.error(error?.message);
    }
  }


  return (
    <section className='border border-gray-600/10 rounded-md shadow-sm shadow-gray-700/80 bg-white'>

        {/* Heading Part of Cart section */}
        <div className='p-4'>
          <h1>My List</h1>
          <p>There are <span className='text-red-600'>{cartItem.length}</span> products in your cart</p>
        </div>
      


      {cartItem.map((item, idx) => (
        <div key={idx} className='flex justify-between border-t-1 border-gray-700/50 p-4'>
          <div className='flex gap-4'>
            <div className='w-25 rounded-md overflow-hidden '>
              <img className='rounded-md hover:scale-110 transition-all ease-in-out cursor-pointer' src={item?.productId?.images[0]?.url} alt="Error" />
            </div>

            <div className='flex flex-col gap-1 justify-center'>
              <p className='!text-sm'>{item?.productId?.name}</p>

              <h1 className='!text-xl'>{item?.productId?.brand}</h1>

              <Rating readOnly name="half-rating-read" defaultValue={item?.productId?.rating} />

              <div className='flex gap-4'>
                <p>₹{item?.productId?.price}</p>
                <p className='line-through text-gray-600/70'>₹{item?.productId?.oldprice}</p>
                <p className='text-red-600'>
                  {item?.productId?.discount}% OFF
                </p>
              </div>
            </div>
          </div>

          <div>
            <RxCross2 onClick={()=>deletewishlist(item?.productId?._id)} className='text-2xl cursor-pointer' />
          </div>
        </div>
      ))}


    </section>
  )
}

export default MyList
