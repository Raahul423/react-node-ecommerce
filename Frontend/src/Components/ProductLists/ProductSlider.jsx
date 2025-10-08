import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { data } from '../../assets/Assests';
import { Collapse } from 'react-collapse';
import { TiArrowSortedDown } from "react-icons/ti";
import Button from '@mui/material/Button';
import { FaCaretUp } from "react-icons/fa";


const ProductSlider = () => {
  const [collapseisopen, setCollapseisopen] = useState(true);

  const isopen = () => {
    setCollapseisopen(!collapseisopen);
  }


  return (
    <section className='col2 w-[25%] '>
      <div className='itemlist 1/3 '>
        <div className='flex justify-between items-center py-3'>
          <h1 className='!text-xl'>Shop By Category</h1>
          <Button onClick={isopen} className='!rounded-full !w-5 !h-5 !text-primary'>
            <TiArrowSortedDown className={`text-2xl text-gray-900/80 ${collapseisopen == false ? '':'hidden'  }`} />
            <FaCaretUp className={`text-2xl text-gray-900/80 ${collapseisopen == true ? '':'hidden'  }`}/>
          </Button>
        </div>

        <Collapse isOpened={collapseisopen}>
          <div className='scroll inset-shadow-xs px-4'>
            {data.map((items, idx) => (
              <FormGroup key={idx}>
                <FormControlLabel className='text-gray-900/90' control={<Checkbox size='small' sx={{
                  color: '#101828/90',
                  '&.Mui-checked': {
                    color: '#ff5252',
                  },
                }} />}
                  label={items} />
              </FormGroup>
            ))}
          </div>
        </Collapse>
      </div>

      <div className='2/3 '>

      </div>

      <div>

      </div>
    </section>
  )
}

export default ProductSlider
