import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/FooterComponent/Footer'
import Products from './Pages/Products'
import Header from './Components/Header/Header'
import ProductsId from './Pages/ProductsId'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Register from './Pages/Register'
import DialogComponent from './Components/Context/DialogComponent'
import CartDrawer from './Components/Context/CartDrawer'
import Popupmessage from './Components/Popupmessage'
import Checkout from './Pages/Checkout'
import YourCart from './Pages/YourCart'
import YourAccount from './Pages/YourAccount'
import ScrollComponent from './Components/ScrolltoTop/ScrollComponent'
import ForgotPassword from './Pages/ForgotPassword'
import Newpassword from './Pages/Newpassword'

function App() {
  const location = useLocation();


  return (
    <>
    
      <CartDrawer>
        <DialogComponent>
          {location.pathname !== "*" && <Header />}
          <ScrollComponent/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<ProductsId />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<YourCart />} />
            <Route path='/myaccount' element={<YourAccount />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/update-password' element={<Newpassword/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {location.pathname !== "*" && <Footer />}
        </DialogComponent>
      </CartDrawer>
    </>
  )
}
export default App;


