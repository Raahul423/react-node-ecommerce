import React, { createContext, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { InboxIcon, MailIcon } from 'lucide-react';


const CartContext = createContext();

const CartDrawer = ({children}) => {

   const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
     
      
    </Box>
  );
  return (
    <CartContext.Provider value={{toggleDrawer}}>
     {children}
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>

    </CartContext.Provider>
  )
}

export default CartDrawer
export {CartContext}
