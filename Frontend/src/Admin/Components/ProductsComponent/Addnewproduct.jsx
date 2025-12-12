import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { IoMdClose } from 'react-icons/io';
import { FormControl, MenuItem, Select } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Addnewproduct = ({ open, setOpen }) => {

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
                <div className="bg-gray-400/10 px-4 py-8 rounded-md flex flex-col gap-6">
                    <div>
                        <p>Product Name</p>
                        <input type='text' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                    </div>

                    <div>
                        <p>Product Description</p>
                        <textarea type='text' className='py-2 h-40 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></textarea>
                    </div>

                    <div className='grid grid-cols-4 gap-6'>
                        <span>
                            <p>Product Category</p>
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
                        </span>

                        <span>
                            <p>Product SubCategory</p>
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
                        </span>

                         <span>
                            <p>Product Price</p>
                            <input type='text' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                         <span>
                            <p>Product OldPrice</p>
                            <input type='text' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                         <span>
                            <p>is Featured?</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <p>Product Stock</p>
                            <input type='text' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product Brand</p>
                            <input type='text' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                         <span>
                            <p>Product Discount</p>
                            <input type='text' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product RAMS</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <p>Product WEIGHT</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <p>Product SIZE</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </span>
                    </div>
                </div>
            </List>
        </Dialog>
    )
}
