import React, { useState } from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoGrid } from "react-icons/io5";
import { Button } from '@mui/material';
import SelectedGrid from './SubProductSlider/SelectedGrid';
import SelectedList from './SubProductSlider/SelectedList';
import PricelowHigh from './SubProductSlider/PricelowHigh';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const ProductItem = ({ loading, fetchProducts }) => {

  const [itemveiw, setItemveiw] = useState('grid');

  return (
    <section className='col1 md:w-[80%]'>
      <div className=' bg-[#e6e6e6] p-1 flex justify-between rounded-md sticky z-50 md:top-49 top-48 mb-4 shadow-gray-500 shadow '>
        <div className='flex items-center gap-2 itemveiw'>
          <Button onClick={() => setItemveiw('list')} className={`!rounded-full !min-w-[35px] h-[35px] ${itemveiw === 'list' && 'active'}`}>
            <HiOutlineBars3 className='text-xl text-gray-900/80 active' />
          </Button >

          <Button onClick={() => setItemveiw('grid')} className={`!rounded-full !min-w-[35px] h-[35px] ${itemveiw === 'grid' && 'active'}`}>
            <IoGrid className='text-xl text-gray-900/80' />
          </Button>

          <p className='text-gray-900/80'>Their are <span className='text-primary'>{fetchProducts.length}</span> products</p>

        </div>

        <div className='flex gap-2 items-center max-md:hidden'>
          <p className='w-20'>Sort by</p>
          <PricelowHigh />
        </div>

      </div>

      <div className='w-full'>
        {itemveiw === 'grid' ? <SelectedGrid fetchProducts={fetchProducts} loading={loading} /> : <SelectedList fetchProducts={fetchProducts} loading={loading} />}
      </div>

      <Stack
        className="py-4 md:py-6 !items-center"
        spacing={1}
      >
        <Pagination
          count={10}
          size="small"
          className="md:[&_.MuiPaginationItem-root]:!text-base"
        />
      </Stack>

    </section>
  )
}

export default ProductItem
