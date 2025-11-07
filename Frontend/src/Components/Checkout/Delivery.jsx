import React, { useState } from 'react'
import Address from './SubCheckout/Address'
import Formaddress from './SubCheckout/Formaddress'

const Delivery = () => {
    const [collapseisopen, setCollapseisopen] = useState(false);
    const [editIndex,setEditIndex]=useState(null);
     const [selectedValue, setSelectedValue] = useState(false);
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

    const [formdata, setFormdata] = useState({
        name: "",
        place: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });



    return (
        <section className='flex flex-col border border-gray-700/40 rounded-md shadow-md gap-4'>
            <div className='Address'>
                <div className='Heading flex items-center gap-4  p-4 w-full bg-primary rounded-tl-md rounded-tr-md'>
                    <p className='px-2  !bg-white rounded-sm !text-primary'>2</p>
                    <h1 className='!text-xl text-white'>Delivery Address</h1>
                </div>
                <Address setCollapseisopen={setCollapseisopen} address={address} setFormdata={setFormdata} setEditIndex={setEditIndex} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            </div>

            <div className='Form-Address w-full'>
                <Formaddress collapseisopen={collapseisopen} setCollapseisopen={setCollapseisopen} formdata={formdata} setFormdata={setFormdata} address={address} setEditIndex={setEditIndex} editIndex={editIndex} setaddress={setAddress} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            </div>
        </section>
    )
}

export default Delivery
 