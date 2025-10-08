import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { data } from '../../assets/Assests';

const ProductSlider = () => {
  return (
    <section className='col2 w-[25%] bg-yellow-400'>
      <div className='itemlist'>
        <h1 className='mb-2 '>Shop By Category</h1>
        <div className='scroll inset-shadow-xs px-4 '>
          {data.map((items, idx) => (
            <FormGroup key={idx}>
              <FormControlLabel className='text-gray-900/80' control={<Checkbox size='small' color='secondary'/>} label={items} />
            </FormGroup>
          ))}
        </div>

      </div>

      <div>

      </div>

      <div>

      </div>
    </section>
  )
}

export default ProductSlider
