import { Button, Dialog, DialogContent } from '@mui/material';
import React, { createContext, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import Productdetails from '../ProductIdDetails/Productdetails';


const DialogContext = createContext();

const DialogComponent = ({children}) => {

  const [opendialogbox, setIsopendialogbox] = useState(false);
  
    const handleClose = () => {
      setIsopendialogbox(false);
    };

  return (
    <DialogContext.Provider value={{setIsopendialogbox}} >
      {children}
       <Dialog
          open={opendialogbox}
          onClose={handleClose}
        >
          <DialogContent className='flex relative'>
            <div onClick={handleClose} className='absolute top-5 right-5'>
              <Button className='!text-black'>
                <IoClose className='text-2xl' />
              </Button>
            </div>
            <Productdetails />
          </DialogContent>

        </Dialog>
    </DialogContext.Provider>
  )
}

export default DialogComponent;
export {DialogContext}
