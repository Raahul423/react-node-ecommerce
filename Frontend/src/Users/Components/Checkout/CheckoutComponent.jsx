import { useContext, useState } from 'react'
import Paymentsection from './SubCheckout/Paymentsection'
import { MyContext } from '../../../Provider'
import { Check } from 'lucide-react'
import { Link } from 'react-router'
import { Box, Button, Radio, TextField } from '@mui/material'
import { Collapse } from 'react-collapse';
import { FiMinus, FiPlus } from 'react-icons/fi'


const CheckoutComponent = () => {
    const { logout, user, authloading } = useContext(MyContext);
    const [checkValue, setcheckValue] = useState(true);
    const [markValue, setMarkValue] = useState(false);
    const [collapseisopen, setCollapseisopen] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [addressType, setAddressType] = useState("Home");
    const [address, setAddress] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        locality: "",
    });


    const handleEdit = (idx) => {
        const selectedAddress = address[idx];

        setEditIndex(idx);
        setCollapseisopen(true);
        setMarkValue(true);

        setFormData({
            name: selectedAddress.name,
            phone: selectedAddress.phone,
            address: selectedAddress.address,
            city: selectedAddress.city,
            state: selectedAddress.state,
            pincode: selectedAddress.pincode,
            locality: selectedAddress.locality || "",
        });

        setAddressType(selectedAddress.place);
    };


    const handleSaveAddress = () => {
        const newAddress = {
            ...formData,
            place: addressType,
        };

        setAddress((prev) => [...prev, newAddress]);

        
        setFormData({
            name: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
            locality: "",
        });

        setAddressType("Home");
        setCollapseisopen(false);
        setMarkValue(false);
    };



    const handlechange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }


    const handleclick = () => {
        setCollapseisopen(!collapseisopen);
        setMarkValue(!markValue)
    }

    if (authloading) {
        return <div>Loading...</div>
    }

    return (
        <section className='bg-red my-container flex w-full py-6 gap-6'>
            <div className='col1 w-[75%] flex flex-col gap-6'>

                <div className='border border-gray-700/50 rounded-md px-6 py-4 justify-between flex bg-white shadow-md'>
                    <div className='flex gap-4'>
                        <div>
                            <p className='px-2 bg-gray-700/20 rounded-sm text-primary !text-sm mt-1'>1</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h1 className='!text-xl text-gray-700/70'>LOGIN</h1>
                                <Check className='text-primary' />
                            </div>

                            <div className='flex gap-4'>
                                <p>{user?.fullName}</p>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to="/" onClick={logout}>
                            <Button className=' !px-6 !text-white !bg-primary hover:!bg-black'>
                                LOGOUT
                            </Button>
                        </Link>
                    </div>
                </div>



                <div className='bg-white rounded-md'>
                    {address.map((data, idx) => (
                        <div key={idx} >
                            <div className='py-4 border-b border-gray-700/50 flex justify-between'>
                                <div className='flex gap-4'>
                                    <div>
                                        <Radio
                                            checked={checkValue}
                                            onClick={() => setcheckValue(!checkValue)}
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

                                <Button onClick={() => handleEdit(idx)} className='h-fit hover:!bg-gray-700/10'>
                                    <p>EDIT</p>
                                </Button>

                            </div>
                        </div>
                    ))}
                </div>




                <div className='flex bg-white rounded-md py-5'>
                    <div>
                        <Radio
                            onClick={handleclick}
                            checked={markValue}
                        />
                    </div>
                    <div className='w-[90%]'>
                        <div className='flex justify-between'>
                            <h1 className='!text-xl text-primary'>ADD A NEW ADDRESS</h1>
                            {collapseisopen === false ? <FiPlus onClick={handleclick} className={'text-2xl cursor-pointer'} /> : <FiMinus onClick={handleclick} className={'text-2xl cursor-pointer'} />}

                        </div>

                        <Collapse isOpened={collapseisopen}>
                            <div className='flex flex-col gap-6 py-5 w-[75%]'>

                                <Box className='flex gap-6'>
                                    <TextField
                                        name="name"
                                        value={formData.name}
                                        onChange={handlechange}
                                        label="Name" />


                                    <TextField
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handlechange}
                                        label="10-digit mobile number" type='number' />
                                </Box>



                                <Box className='flex gap-6'>
                                    <TextField
                                        name='pincode'
                                        value={formData.pincode}
                                        onChange={handlechange}
                                        label="Pincode" />

                                    <TextField
                                        label="Locality" />
                                </Box>



                                <Box>
                                    <TextField className='!w-full'
                                        name='address'
                                        value={formData.address}
                                        onChange={handlechange}
                                        label="Address"
                                        minRows={6}
                                        multiline
                                    />
                                </Box>



                                <Box className='flex gap-6'>
                                    <TextField
                                        name='city'
                                        value={formData.city}
                                        onChange={handlechange}
                                        label="City/District/Town" />


                                    <TextField
                                        name='state'
                                        value={formData.state}
                                        onChange={handlechange}
                                        label="State" />
                                </Box>

                            </div>

                            <div className='w-[75%]'>
                                <p className='text-gray-700/80'>Address Type</p>
                                <div className='flex gap-6 py-2'>
                                    <div className='flex'>
                                        <Radio
                                            className='!p-0'
                                            checked={addressType === "Home"}
                                            onClick={() => setAddressType("Home")}
                                        // onChange={handleChange}
                                        />

                                        <p className='px-2'>Home</p>
                                    </div>

                                    <div className='flex'>
                                        <Radio
                                            className='!p-0'
                                            checked={addressType === "Work"}
                                            onClick={() => setAddressType("Work")}
                                        // onChange={handleChange}
                                        />

                                        <p className='!px-2'>Work</p>
                                    </div>
                                </div>

                                {editIndex !== null ? (
                                    <Button className='flex gap-4 items-center w-full !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3 !mt-6'>
                                        <p className='text-white text-sm'>update Addesss</p>
                                    </Button>
                                ) : (
                                    <Button onClick={handleSaveAddress} className='flex gap-4 items-center w-full !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3 !mt-6'>
                                        <p className='text-white text-sm'>Save Addesss</p>
                                    </Button>
                                )}
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

            <div className='col2 w-[35%] bg-white rounded-md shadow-md border border-gray-700/30 sticky top-58 h-fit'>
                <Paymentsection />
            </div>
        </section>
    )
}

export default CheckoutComponent
