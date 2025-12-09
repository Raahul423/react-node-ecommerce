import { Button, FormControl, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import { HiCloudArrowUp } from 'react-icons/hi2';

const ProductRams = () => {
    const [rams, setRams] = useState('');

    const handleChange = (event) => {
        setRams(event.target.value);
    };

    return (
        <section className='pl-75 pr-3 bg-gray-400/10 h-screen'>
            <div className='py-6'>
                <h1 className='!text-2xl '>Add Products RAMS</h1>
            </div>

            <div className=' bg-white shadow-md shadow-gray-600/40 px-8 py-4 flex flex-col gap-4 rounded-md'>
               
                    <span>PRODUCT RAMS</span>

                    <FormControl sx={{ m: 1, minWidth: 120 }} className='!m-0'>
                        <Select
                            value={rams}

                            onChange={handleChange}
                        >
                            <MenuItem value={10}>8GB</MenuItem>
                            <MenuItem value={20}>128GB</MenuItem>
                            <MenuItem value={30}>512GB</MenuItem>
                        </Select>
                    </FormControl>

                    <Button className='!bg-blue-600 !py-2 !px-4 flex gap-2 w-fit'>
                        <HiCloudArrowUp className='text-white text-2xl' />
                        <span className='text-md text-white'>Publish and Veiw</span>
                    </Button>
                
            </div>


        </section>
    )
}

export default ProductRams
