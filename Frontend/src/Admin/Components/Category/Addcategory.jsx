import React, { useContext, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { RxCross2 } from "react-icons/rx";
import Slide from '@mui/material/Slide';
import { IoMdClose } from 'react-icons/io';
import { FaCloudUploadAlt, FaImage } from 'react-icons/fa';
import { Button, CircularProgress } from '@mui/material';
import { AdminContext } from '../../../AdminAuthProvider';
import api from '../../../Utils/api';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Addcategory = ({ open, setOpen }) => {
    const { toastMessage } = useContext(AdminContext)
    const [name, setName] = useState("")
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleImageChange = (e) => {
        const Files = Array.from(e.target.files);
        setImages(Files);
    }

    const handleSubmit = async () => {
        if (!name.trim()) {
            toastMessage("error", "Category Name is Required");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);

        images.forEach((img) => {
            formData.append("images", img);
        })

        console.log(images);


        try {
            setLoading(true)
            const res = await api.post("/categories/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })

            toastMessage("success", res?.data?.message);

            setName("");
            setImages([]);
            setOpen(false)
        } catch (error) {
            if (error?.response) {
                toastMessage("error", error?.response?.data?.message)
            } else {
                toastMessage("error", "Server not responding...")
            }
        } finally {
            setLoading(false)
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
                        Add New Category
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <div className="bg-white shadow-md shadow-gray-600/30 px-10 py-8 rounded-md flex flex-col gap-6">

                    <div className='flex flex-col gap-2'>
                        <p>Category Name</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='px-2 py-1 w-100 border border-gray-600/60 outline-none' />
                    </div>


                    <label className="relative h-45 w-45 border border-dashed rounded-md p-2 flex flex-col hover:bg-gray-600/20 cursor-pointer items-center justify-center">

                        {/* <span onClick={onclick} className='absolute -top-2 -right-2 text-md bg-red-500 p-1 rounded-full z-99'>
                            <RxCross2 className='!text-white' />
                        </span> */}

                        {images.length == 0 ?
                            <span className=''>
                                <img className='object-cover' src='/imageUpload.gif' alt="Error" />
                                <p>Click to Upload Image...</p>
                            </span>

                            :
                            <>
                                {images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={URL.createObjectURL(img)}
                                        alt="preview"
                                        className="object-cover rounded"
                                    />
                                ))}
                            </>
                        }

                        <input
                                    type="file"
                                    multiple
                                    hidden
                                    accept='image/*'
                                    onChange={handleImageChange}
                                />
                    </label>

                    <Button onClick={handleSubmit} className="!bg-blue-600 !px-8 !py-2 !text-white flex gap-3 cursor-pointer">
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

export default Addcategory
