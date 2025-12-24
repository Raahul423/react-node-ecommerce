import React, { useState } from 'react'
import { available } from '../../../../assets/Assests'
import Button from '@mui/material/Button'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FaCaretUp } from 'react-icons/fa'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';

const Avalibilty = ({ isopen, availableisopen }) => {
  const [tick, setTick] = useState(null);

  const handleclick=(idx)=>{
    setTick((prev)=> prev === idx ? null : idx)
  }

  return (
    <div>
      <div className='flex justify-between items-center py-3'>
        <h1 className='!text-xl'>Avalibilty</h1>
        <Button onClick={isopen} className='!rounded-full !w-5 !h-5 !text-primary'>
          {availableisopen === true ? <FaCaretUp className='text-2xl text-gray-900/80' /> : <TiArrowSortedDown className='text-2xl text-gray-900/80' />}
        </Button>
      </div>

      <Collapse isOpened={availableisopen}>
        <div className='inset-shadow-xs px-4'>
          {available.map((items, idx) => (
            <FormGroup key={idx}>
              <FormControlLabel className='text-gray-900/90' control={<Checkbox
                size='small'
                checked={tick === idx}
                onChange={()=>handleclick(idx)}
                sx={{
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
  )
}

export default Avalibilty
