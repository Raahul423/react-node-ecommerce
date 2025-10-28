import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material';

const Address = () => {
    const [selectedValue, setSelectedValue] = useState('b');
    const [address, setAddress] = useState([
        {
            name: "Rahul pal",
            place: "Home",
            phone: 7458015120,
            address: "yiu yrwuiyuiyrw",
            city: "Kanpur",
            state: "Uttar pradesh",
            pincode: 208007
        }
    ]);

    const handleclick = ()=>{
        setAddress([...address,{...address[0],name:"roy"}])
    }


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <section className='bg-white rounded-md'>
            {address.map((data, idx) => (
                <div key={idx} >
                    <div className='py-4 border-b border-gray-700/50 flex justify-between'>
                        <div className='flex gap-4'>
                            <div>
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
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

                        <Button onClick={handleclick} className='h-fit hover:!bg-gray-700/10'>
                            <p>EDIT</p>
                        </Button>

                    </div>
                </div>
            ))}
        </section>
    )
}

export default Address
