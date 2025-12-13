import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { IoMdClose } from 'react-icons/io';
import { Button, FormControl, MenuItem, Rating, Select } from '@mui/material';
import { IoImagesSharp } from 'react-icons/io5';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Addnewproduct = ({ open, setOpen }) => {
    const [value, setValue] = useState({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        price: "",
        oldPrice: "",
        featured: "", // or boolean
        stock: "",
        brand: "",
        discount: "",
        rams: "",
        weight: "",
        size: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        setValue((prev) => ({ ...prev, [name]: value }))
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
                        Add New Product
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <div className="bg-gray-400/10 px-4 py-8 rounded-md flex flex-col gap-6">
                    <div>
                        <p>Product Name</p>
                        <input type='text' name="name" value={value.name} onChange={handleChange} className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                    </div>

                    <div>
                        <p>Product Description</p>
                        <textarea type='text' name='description' value={value.description} onChange={handleChange} className='py-2 h-40 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></textarea>
                    </div>

                    <div className='grid grid-cols-4 gap-6'>
                        <span>
                            <p>Product Category</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                <Select
                                    value={value.category}
                                    onChange={handleChange}
                                    className='cursor-pointer'
                                    name='category'
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
                                    value={value.subcategory}
                                    onChange={handleChange}
                                    name='subcategory'
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
                            <input type='text' name='price' value={value.price}
                                onChange={handleChange} className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product OldPrice</p>
                            <input type='text' value={value.oldPrice} onChange={handleChange} name='oldPrice' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>is Featured?</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={value.featured}
                                    name='featured'
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>

                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <p>Product Stock</p>
                            <input type='text' value={value.stock}
                                name='stock'
                                onChange={handleChange}
                                className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product Brand</p>
                            <input type='text' name='brand' value={value.brand} onChange={handleChange} className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product Discount</p>
                            <input type='text' value={value.discount} onChange={handleChange} name='discount' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product RAMS</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={value.rams}
                                    onChange={handleChange}
                                    name='rams'
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
                                    value={value.weight}
                                    name='weight'
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
                                    value={value.size}
                                    name='size'
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Yes</MenuItem>
                                    <MenuItem value={20}>No</MenuItem>

                                </Select>
                            </FormControl>
                        </span>
                    </div>

                    <div>
                        <p>Product Rating</p>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </div>

                    <div className="bg-white shadow-md shadow-gray-600/30 px-10 py-8 rounded-md flex flex-col gap-6">

                        <div className='flex flex-col gap-2'>
                            <p>Media & Images</p>
                        </div>


                        <div className="h-45 w-45 border border-dashed rounded-md p-1 flex flex-col hover:bg-gray-600/20 cursor-pointer items-center justify-center">
                            <IoImagesSharp className='h-25 w-25' />
                            <p>Image Upload</p>
                        </div>

                        <Button className="!bg-blue-600 !px-8 !py-2 !text-white flex gap-3 cursor-pointer">
                            <FaCloudUploadAlt className="text-2xl" />
                            PUBLISH AND VIEW
                        </Button>
                    </div>
                </div>
            </List>
        </Dialog>
    )
}
