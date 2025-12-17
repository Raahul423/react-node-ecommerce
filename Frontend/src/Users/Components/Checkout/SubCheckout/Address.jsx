// import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material';
import { useState } from 'react';

const Address = ({ setCollapseisopen, address,setFormdata,setEditIndex,setSelectedValue }) => {
    const [checkValue, setcheckValue] = useState(true);    

    const handleedit = (index) => {
        setFormdata(address[index]);
        setEditIndex(index);
    }

    const click = (index)=>{
        handleedit(index)
        setCollapseisopen(true)
        setSelectedValue(true)
    }


    return (
        <section className='bg-white rounded-md'>
            {address.map((data, idx) => (
                <div key={idx} >
                    <div className='py-4 border-b border-gray-700/50 flex justify-between'>
                        <div className='flex gap-4'>
                            <div>
                                <Radio
                                    checked={checkValue}
                                    onClick={()=>setcheckValue(!checkValue)}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                            </div>

                            <div>
                                <p className='py-1 px-2 bg-gray-700/20 w-fit !text-[10px] rounded-sm uppercase font-medium'>{data.place}</p>
                                <p>{data.name}</p>
                                <div className='flex'>
                                    <p>{data.address}-</p>
                                    <p>{data.city}-</p>
                                    <p>{data.state}-</p>
                                    <p>{data.pincode}</p>
                                </div>
                                <p>{data.phone}</p>
                            </div>
                        </div>

                        <Button onClick={()=>click(idx)} className='h-fit hover:!bg-gray-700/10'>
                            <p>EDIT</p>
                        </Button>

                    </div>
                </div>
            ))}
        </section>
    )
}

export default Address
