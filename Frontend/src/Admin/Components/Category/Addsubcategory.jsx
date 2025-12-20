import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { IoMdClose } from 'react-icons/io';
import { Button, CircularProgress, FormControl, MenuItem, Select } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { AdminContext } from '../../../AdminAuthProvider';
import api from '../../../Utils/api';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Addsubcategory = ({ open, setOpen }) => {
    const { toastMessage } = useContext(AdminContext);
    const [parentCategory, setParentCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const [formdata, setFormdata] = useState({
        name: "",
        parentId: ""
    })

    useEffect(() => {
        const ParentCategory = async () => {
            try {
                const response = await api.get("/categories/category/root");
                setParentCategory(response?.data?.rootcategory)
            } catch (error) {
                if (error?.response) {
                    toastMessage("error", error?.response?.data?.message);
                } else {
                    toastMessage("error", "Server not responding.....")
                }
            }
        }

        ParentCategory();
    }, [toastMessage]);

    const handlesubCategory = async () => {
        if (!formdata.name.trim() === "") {
            toastMessage("error", "SubCategory name is required...");
            return;
        }

        if (!formdata.parentId) {
            toastMessage("error", "Please Select a Parent Category")
            return;
        }
        try {
            setLoading(true)
            await api.post("/categories/create", formdata);
            toastMessage("success", "SubCategory Created Successfully...");

            setFormdata({ name: "", parentId: "" });
            setOpen(false);
        } catch (error) {
            if (error?.response) {
                toastMessage("error", error?.response?.data?.message);
            } else {
                toastMessage("error", "Server not responding.....")
            }
        }finally{
            setLoading(false)
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormdata((prev) => ({
            ...prev,
            [name]: value
        }));
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
                        <p className='!text-xl'>Parent Category</p>
                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                            <Select
                                name='parentId'
                                value={formdata.parentId}
                                onChange={handleChange}
                            >
                                {parentCategory.map((cat, idx) => (
                                    <MenuItem key={idx} value={cat?._id}>{cat?.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='flex flex-col gap-2 w-100'>
                        <p>Sub Category Name</p>
                        <input
                            type="text"
                            name='name'
                            value={formdata.name}
                            onChange={handleChange}
                            className='px-2 py-2 border border-gray-600/40 outline-none rounded-md uppercase' />
                    </div>

                    <Button onClick={handlesubCategory} className="!bg-blue-600 !px-8 !py-2 !text-white flex gap-3 cursor-pointer">
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
            </List>
        </Dialog>
    )
}

export default Addsubcategory
