
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/FooterComponent/Footer'
import Products from './Pages/Products'
import Header from './Components/Header/Header'
import ProductsId from './Pages/ProductsId'
import NotFound from './Pages/NotFound'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Productdetails from './Components/ProductIdDetails/Productdetails'
import { IoClose } from 'react-icons/io5'
import { createContext } from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'

const Context = createContext();

function App() {
  const location = useLocation();

  const [opendialogbox, setIsopendialogbox] = useState(false);

  const handleClose = () => {
    setIsopendialogbox(false);
  };



  return (
    <>
      <Context.Provider value={{setIsopendialogbox}}>
        {location.pathname !== "*" && <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductsId />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {location.pathname !== "*" && <Footer />}
      </Context.Provider>


      <div>
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
      </div>
    </>
  )
}
export default App
export {Context}


