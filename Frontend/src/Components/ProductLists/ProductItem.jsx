import React from 'react';
import SelectedItems from './SubProductSlider/SelectedItems'
import { HiOutlineBars3 } from "react-icons/hi2";
import { PiDropboxLogo } from "react-icons/pi";


const ProductItem = () => {

  return (
    <section className='col1 w-[80%]'>
      <div  className='1/2 bg-gray-800/20 p-4 flex justify-between rounded-md sticky z-100 top-0'>
        <div className='flex items-center gap-4'>
          <HiOutlineBars3 />
          <PiDropboxLogo />
          <p>Their are 8 products</p>


        </div>
        hi
        <div>

        </div>
      </div>

      <div className='2/2 w-full'>
        <SelectedItems />
      </div>
    </section>
  )
}

export default ProductItem
