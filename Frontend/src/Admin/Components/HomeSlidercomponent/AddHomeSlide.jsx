import React from 'react'
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { IoMdClose } from 'react-icons/io';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Button } from '@mui/material';
import { IoImagesSharp } from 'react-icons/io5';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddHomeSlide = ({ open, setOpen }) => {

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
                        Add Product
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <div className="bg-white shadow-md shadow-gray-600/30 px-10 py-8 rounded-md flex flex-col gap-5">
                    <div className="h-45 w-45 border border-dashed rounded-md p-1 flex flex-col hover:bg-gray-600/20 cursor-pointer items-center justify-center">
                        <IoImagesSharp className='h-25 w-25'/>
                        <p>Image Upload</p>
                    </div>

                    <Button className="!bg-blue-600 !px-8 !py-2 !text-white flex gap-3">
                        <FaCloudUploadAlt className="text-2xl" />
                        PUBLISH AND VIEW
                    </Button>
                </div>
            </List>
        </Dialog>
    )
}

export default AddHomeSlide
