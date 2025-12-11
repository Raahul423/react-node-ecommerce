import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { IoMdClose } from 'react-icons/io';
import { Button, FormControl, MenuItem, Select } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Addsubcategory = ({ open, setOpen }) => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={() => setOpen(false)}
            slots={{
                transition: Transition,
            }}
        >
            <AppBar sx={{ position: 'relative' }} className='!bg-gray-800/80 !shadow-md !shadow-gray-800/40'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setOpen(false)}
                        aria-label="close"
                    >
                        <IoMdClose />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Add New SubCategory
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <div className="bg-white shadow-md shadow-gray-600/30 px-10 py-8 rounded-md flex flex-col gap-6">

                    <h1>Add Sub Category</h1>

                    <div className='flex flex-col gap-2 w-100 '>
                        <p className='!text-xl'>Product Category</p>
                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                            <Select
                                value={value}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Name, A to Z</MenuItem>
                                <MenuItem value={20}>Name, Z to A</MenuItem>
                                <MenuItem value={30}>Price, Low to High</MenuItem>
                                <MenuItem value={30}>Price, High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                     <div className='flex flex-col gap-2 w-100'>
                            <p>Sub Category Name</p>
                            <input type="text" className='px-2 py-2 border border-gray-600/40 outline-none rounded-md' />
                        </div>

                         <Button className="!bg-blue-600 !px-8 !py-2 !text-white flex gap-3 cursor-pointer">
                        <FaCloudUploadAlt className="text-2xl" />
                        PUBLISH AND VIEW
                    </Button>

                </div>
            </List>
        </Dialog>
    )
}

export default Addsubcategory
