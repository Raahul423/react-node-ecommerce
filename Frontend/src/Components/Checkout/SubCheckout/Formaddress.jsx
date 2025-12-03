import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { FiMinus, FiPlus } from "react-icons/fi";
import { Collapse } from 'react-collapse';
import { toast, ToastContainer } from 'react-toastify';

const Formaddress = ({ collapseisopen, setCollapseisopen, formdata, setFormdata, address, setaddress, setEditIndex, editIndex,selectedValue,setSelectedValue }) => {
    const change = () => {
        setCollapseisopen(!collapseisopen)
        setSelectedValue(!selectedValue)
    }

    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };

    const changeformvalue = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    // console.log(changeformvalue);




    const handleUpdate = () => {
        const updated = [...address];
        updated[editIndex] = { ...updated[editIndex], ...formdata };
        setaddress(updated);
        setEditIndex(null);
        setFormdata({
            name: "",
            place: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            pincode: ""
        })
        toast.success("Updated Address")
    }

    return (
        <section className='flex bg-white rounded-md py-5'>
            <div>
                <Radio
                    checked={selectedValue === true}
                    value = {true}
                    onClick={change}
                />
            </div>
            <div className='w-[90%]'>
                <div className='flex justify-between'>
                    <h1 className='!text-xl text-primary'>ADD A NEW ADDRESS</h1>
                    <FiPlus onClick={change} className={`text-2xl cursor-pointer ${collapseisopen === false ? '' : 'hidden'}`} />
                    <FiMinus onClick={change} className={`text-2xl cursor-pointer ${collapseisopen === true ? '' : 'hidden'}`} />
                </div>

                <Collapse isOpened={collapseisopen}>

                    <div className='flex flex-col gap-6 py-5 w-[75%]'>

                        <Box className='flex gap-6'>
                            <TextField
                                name="name"
                                value={formdata.name}
                                onChange={changeformvalue}
                                label="Name" />

                            <TextField
                                name='phone'
                                value={formdata.phone}
                                onChange={changeformvalue}
                                label="10-digit mobile number" type='number' />
                        </Box>



                        <Box className='flex gap-6'>
                            <TextField
                                name='pincode'
                                value={formdata.pincode}
                                onChange={changeformvalue}
                                label="Pincode" />


                            <TextField
                                label="Locality" />
                        </Box>



                        <Box>
                            <TextField className='!w-full'
                                name='address'
                                value={formdata.address}
                                onChange={changeformvalue}
                                label="Address"
                                minRows={6}
                                multiline
                            />
                        </Box>



                        <Box className='flex gap-6'>
                            <TextField
                                name='city'
                                value={formdata.city}
                                onChange={changeformvalue}
                                label="City/District/Town" />


                            <TextField
                                name='state'
                                value={formdata.state}
                                onChange={changeformvalue}
                                label="State" />
                        </Box>

                    </div>

                    <div className='w-[75%]'>
                        <p className='text-gray-700/80'>Address Type</p>
                        <div className='flex gap-6 py-2'>
                            <div className='flex'>
                                <Radio
                                    className='!p-0'
                                    checked={selectedValue === 'a'}
                                    // onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />

                                <p className='px-2'>Home</p>
                            </div>

                            <div className='flex'>
                                <Radio
                                    className='!p-0'
                                    checked={selectedValue === 'a'}
                                    // onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />

                                <p className='!px-2'>Work</p>
                            </div>
                        </div>

                        {editIndex !== null ? (
                            <Button onClick={handleUpdate} className='flex gap-4 items-center w-full !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3 !mt-6'>
                                <p className='text-white text-sm'>update Addesss</p>
                            </Button>
                        ) : (
                            <Button onClick={() => setaddress([...address, formdata])} className='flex gap-4 items-center w-full !border-1 !border-primary hover:!border-black !bg-primary hover:!bg-black !px-10 !py-3 !mt-6'>
                                <p className='text-white text-sm'>Save Addesss</p>
                            </Button>
                        )}


                    </div>
                </Collapse>


<ToastContainer/>
            </div>
        </section>
    )
}

export default Formaddress
