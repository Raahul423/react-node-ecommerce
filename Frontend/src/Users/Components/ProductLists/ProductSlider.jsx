import React, { useState } from 'react'
import Category from './SubProductSlider/Category'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ProductSlider = () => {

  const [collapseisopen, setCollapseisopen] = useState(true);
  const [tick, setTick] = useState(null);

  const handlechange = (idx) => {
    setTick((prev) => prev === idx ? null : idx);
  }

  const isopen = () => {
    setCollapseisopen(!collapseisopen);
  }

  return (
    <section className='col2 w-[20%] flex flex-col gap-5 sticky top-53.5'>
      <div className='sticky top-53.5' >

        <div className='itemlist 1/3 '>
          <Category isopen={isopen} collapseisopen={collapseisopen} />
        </div>
        <span className='horizontal-line'></span>

        <div className='2/3 flex flex-col gap-3'>
          <div className='flex'>
            <h1 className='!text-xl'>Filter By Price</h1>
          </div>

          <div>
            <RangeSlider min={0} max={100} defaultValue={[0, 100]} />
          </div>

          <div className='flex justify-between'>
            <div className='flex items-center'>
              <p>From: </p>
              <span className='font-semibold'>₹100</span>
            </div>
            <div className='flex items-center'>
              <p>From: </p>
              <span className='font-semibold'>₹1000</span>
            </div>
          </div>
        </div>
        <span className='horizontal-line'></span>


        <div className='3/3 flex flex-col gap-2'>
          <div>
            <h2 className='!text-xl'>Filter By Rating</h2>
          </div>

          <div className=''>
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx}>
                <FormGroup >
                  <FormControlLabel className='text-gray-900/90' control={<Checkbox
                    size='small'
                    checked={tick === idx}
                    onChange={() => handlechange(idx)}
                    sx={{
                      color: '#101828/90',
                      '&.Mui-checked': {
                        color: '#ff5252',
                      },
                    }} />}
                    label={
                      <Stack>
                        <Rating defaultValue={idx} readOnly />
                      </Stack>} />
                </FormGroup>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default ProductSlider
