import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { IoMdClose } from 'react-icons/io';
import { Button, CircularProgress, FormControl, MenuItem, Rating, Select } from '@mui/material';
import { IoImagesSharp } from 'react-icons/io5';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { AdminContext } from '../../../AdminAuthProvider';
import api from '../../../Utils/api';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Addnewproduct = ({ open, setOpen }) => {
    const { toastMessage } = useContext(AdminContext)
    const [loading, setloading] = useState(false);
    const [images, setImages] = useState([]);
    const [categorydata, setCategorydata] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [productdetails, setProductdetails] = useState({
        name: "",
        desc: "",
        category: "",
        subcategory: "",
        price: "",
        oldprice: "",
        isfeatured: "", // or boolean
        countInstock: "",
        brand: "",
        discount: "",
        productRam: "",
        productWeight: "",
        size: "",
        rating: ""
    });

    // fetch all categories
    useEffect(() => {
        const categorydetails = async () => {
            try {
                const response = await api.get("/categories/allcategories");
                // console.log(response);

                setCategorydata(response?.data?.rootcategories)
            } catch (error) {
                if (error.response) {
                    toastMessage("error", error?.response?.data?.message);
                } else {
                    toastMessage("error", "Server not responding....")
                }
            }
        }
        categorydetails();
    }, [toastMessage]);



    const handleCategoryChange = (e) => {
        const selectedId = e.target.value;

        setProductdetails((prev) => ({
            ...prev,
            category: selectedId,
            subcategory: "", // reset subcategory
        }));

        const categoryObj = categorydata.find(
            (cat) => cat._id === selectedId
        );

        setSelectedCategory(categoryObj || null);
    };


    const handleChange = (event) => {
        const { name, value } = event.target
        setProductdetails((prev) => ({ ...prev, [name]: value }))
    };

    // image upload from frontend to backend handler
    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (!file) return

        setImages(prev => [...prev, file])
        e.target.value = null
    }

    // remove image from UI 
    const handleRemoveImage = (removeIndex) => {
        setImages((prev) => prev.filter((_, idx) => idx !== removeIndex));
    };


    const Productadd = async () => {
        if (!productdetails.name.trim()) {
            toastMessage("error", "Name is required...")
            return;
        }

        if (!productdetails.desc.trim()) {
            toastMessage("error", "description is required...")
            return;
        }

        if (!productdetails.category) {
            toastMessage("error", "Please Select Category");
            return;
        }

        if (images.length === 0) {
            toastMessage("error", "Upload at least one image")
            return
        }

        try {
            setloading(true);

            const formData = new FormData();

            // text fields
            Object.entries(productdetails).forEach(([key, val]) => {
                formData.append(key, val)
            })

            // images
            images.forEach(file => {
                formData.append("images", file)
            })


            const response = await api.post("/products/product-create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log(response);

            toastMessage("success", response?.data?.message);
            setImages([]);
            setOpen(false);
            setProductdetails({
                name: "",
                desc: "",
                category: "",
                subcategory: "",
                price: "",
                oldprice: "",
                isfeatured: "", // or boolean
                countInstock: "",
                brand: "",
                discount: "",
                productRam: "",
                productWeight: "",
                size: "",
                rating: ""
            });
        } catch (error) {
            if (error.response) {
                toastMessage("error", error?.response?.data?.message);
            } else {
                toastMessage("error", "Server not responding....")
            }
        } finally {
            setloading(false);
        }
    }


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
                        <input type='text' name="name" value={productdetails.name} onChange={handleChange} className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                    </div>

                    <div>
                        <p>Product Description</p>
                        <textarea type='text' name='desc' value={productdetails.desc} onChange={handleChange} className='py-2 h-40 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></textarea>
                    </div>

                    <div className='grid grid-cols-4 gap-6'>
                        <span>
                            <p>Product Category</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                <Select
                                    value={productdetails.category}
                                    onChange={handleCategoryChange}
                                    name="category"
                                >
                                    {categorydata.map((cat) => (
                                        <MenuItem key={cat._id} value={cat._id}>
                                            {cat.name}
                                        </MenuItem>
                                    ))}
                                </Select>

                            </FormControl>
                        </span>

                        <span>
                            <p>Product SubCategory</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                <Select
                                    value={productdetails.subcategory}
                                    onChange={handleChange}
                                    name="subcategory"
                                    disabled={!selectedCategory}
                                >
                                    <MenuItem value="">
                                        None
                                    </MenuItem>
                                    {selectedCategory?.children?.length > 0 ? (
                                        selectedCategory.children.map((subcat) => (
                                            <MenuItem key={subcat._id} value={subcat._id}>
                                                {subcat.name}
                                            </MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem disabled>No Subcategories</MenuItem>
                                    )}
                                </Select>

                            </FormControl>
                        </span>

                        <span>
                            <p>Product Price</p>
                            <input type='text' name='price' value={productdetails.price}
                                onChange={handleChange} className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product OldPrice</p>
                            <input type='text' value={productdetails.oldprice} onChange={handleChange} name='oldprice' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>is Featured?</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={productdetails.isfeatured}
                                    name='isfeatured'
                                    onChange={handleChange}
                                >
                                    <MenuItem value="true">true</MenuItem>
                                    <MenuItem value="false">false</MenuItem>

                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <p>Product Stock</p>
                            <input type='text' value={productdetails.countInstock}
                                name='countInstock'
                                onChange={handleChange}
                                className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product Brand</p>
                            <input type='text' name='brand' value={productdetails.brand} onChange={handleChange} className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product Discount</p>
                            <input type='text' value={productdetails.discount} onChange={handleChange} name='discount' className='py-2 outline-1 border-gray-600/40 border w-full px-2 rounded-md'></input>
                        </span>

                        <span>
                            <p>Product RAMS</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={productdetails.productRam}
                                    onChange={handleChange}
                                    name='productRam'
                                >
                                    <MenuItem value={8}>8GB</MenuItem>
                                    <MenuItem value={16}>16GB</MenuItem>
                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <p>Product WEIGHT</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={productdetails.productWeight}
                                    name='productWeight'
                                    onChange={handleChange}
                                >
                                    {["100g", "500g", "1kg", "2kg", "5kg",].map((weight, idx) => (
                                        <MenuItem value={weight[idx]}>{weight}</MenuItem>

                                    ))}
                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <p>Product SIZE</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={productdetails.size}
                                    name='size'
                                    onChange={handleChange}
                                >
                                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                                        <MenuItem value={size}>{size}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </span>
                    </div>

                    <div>
                        <p>Product Rating</p>
                        <Rating
                            name="rating"
                            value={productdetails.rating}
                            onChange={handleChange}
                            defaultValue={0} precision={1} />
                    </div>

                    <div className="bg-white shadow-md shadow-gray-600/30 px-10 py-8 rounded-md flex flex-col gap-6">

                        <div className='flex flex-col gap-2'>
                            <p>Media & Images</p>
                        </div>

                        <div className="flex gap-4">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative h-45 w-45 border rounded-md p-1 flex items-center justify-center"
                                >
                                    <img
                                        src={URL.createObjectURL(img)}
                                        alt="product"
                                        className="h-full w-full object-cover rounded-md"
                                    />

                                    <div className='absolute -top-2 -right-2 p-1 rounded-full bg-primary '>
                                        <RxCross2 onClick={() => handleRemoveImage(index)} className='!text-md !text-white cursor-pointer' />
                                    </div>
                                </div>
                            ))}


                            <label
                                htmlFor="image-upload"
                                className="h-45 w-45 border border-dashed rounded-md p-1 flex flex-col
      hover:bg-gray-600/20 cursor-pointer items-center justify-center"
                            >
                                <IoImagesSharp className="h-25 w-25" />
                                <p>Upload Image</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    id="image-upload"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>


                        <Button onClick={Productadd} className="!bg-blue-600 !px-8 !py-2 !text-white flex gap-3 cursor-pointer">
                            {loading ?
                                <div className='flex gap-3 items-center '>
                                    <CircularProgress className='!h-6 !w-6 !text-white' />
                                    Uploading.......
                                </div>
                                :
                                <>
                                    <FaCloudUploadAlt className="text-2xl" />
                                    <p>PUBLISH AND VIEW</p>
                                </>}
                        </Button>
                    </div>
                </div>
            </List>
        </Dialog>
    )
}
