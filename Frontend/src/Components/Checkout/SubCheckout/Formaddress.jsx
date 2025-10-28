import Radio from '@mui/material/Radio';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Formaddress = () => {
    const [selectedValue, setSelectedValue] = useState('b');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section className='flex bg-white'>
            <div>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </div>
            <div className='w-[70%]'>
                <h1 className='!text-xl'>ADD A NEW ADDRESS</h1>
                <div className='flex flex-col gap-6'>

                    <Box className='flex gap-6'>
                        <TextField label="Name" />
                        <TextField label="10-digit mobile number" />
                    </Box>


                    
                        <Box className='flex gap-6'>
                            <TextField  label="Pincode"/>
                            <TextField  label="Locality"/>
                        </Box>
                    

                    
                        <Box className='flex'>
                            <TextField  label="Address"  />
                        </Box>
                  

                   
                        <Box className='flex gap-6'>
                            <TextField  label="City/District/Town" />
                            <TextField label="State"  />
                        </Box>
                    
                </div>
            </div>
        </section>
    )
}

export default Formaddress
