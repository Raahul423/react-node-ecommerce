import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { TiArrowSortedDown } from "react-icons/ti";
import Button from '@mui/material/Button';
import { FaCaretUp } from "react-icons/fa";
import { data } from '../../../assets/Assests';


const Category = ({ isopen, collapseisopen }) => {

    return (
        <div>
            <div className='flex justify-between items-center py-3'>
                <h1 className='!text-xl'>Shop By Category</h1>
                <Button onClick={isopen} className='!rounded-full !w-5 !h-5 !text-primary'>
                    {collapseisopen === true ? <FaCaretUp className='text-2xl text-gray-900/80' /> : <TiArrowSortedDown className='text-2xl text-gray-900/80' />}
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
    )
}

export default Category
