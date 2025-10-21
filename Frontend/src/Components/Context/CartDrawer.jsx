import React, { createContext, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CartDrawerItem from '../DrawerComponent/CartDrawerItem';


const CartContext = createContext();

const CartDrawer = ({children}) => {

   const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <CartDrawerItem/>
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
