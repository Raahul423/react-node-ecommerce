import { Route, Routes } from 'react-router-dom'
import Home from './Users/Pages/Home'
import Products from './Users/Pages/Products'
import ProductsId from './Users/Pages/ProductsId'
import Login from './Users/Pages/Login'
import Register from './Users/Pages/Register'
import Checkout from './Users/Pages/Checkout'
import YourCart from './Users/Pages/YourCart'
import YourAccount from './Users/Pages/YourAccount'
import ForgotPassword from './Users/Pages/ForgotPassword'
import Newpassword from './Users/Pages/Newpassword'
import Provider from './Provider'
import YourInfo from './Users/Components/Profile/YourInfo'
import MyList from './Users/Components/Profile/MyList'
import Myorder from './Users/Components/Profile/Myorder'
import Layout from './Layout'
import Verifyemail from './Users/Pages/verifyemail'
import Dashboard from './Admin/Pages/Dashboard'
import AdminLayout from './AdminLayout'
import HomeSlide from './Admin/Pages/HomeSlide'







function App() {

  return (
    <Provider>

      {/* {admin route} */}
      <Routes>
         <Route element={<AdminLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='homeslide' element={<HomeSlide/>}/>
        </Route>





        {/* {User Routes} */}
        <Route element={<Layout />} >
          <Route path='/admin' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductsId />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<YourCart />} />
          <Route path='/myaccount' element={<YourAccount />}>
            <Route path='info' element={<YourInfo />} />
            <Route path='mylist' element={<MyList />} />
            <Route path='myorder' element={<Myorder />} />
          </Route>
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/update-password' element={<Newpassword />} />
        </Route>
        <Route path='/verify-email' element={<Verifyemail />} />
      </Routes>
      {/* <Route path='*' element={<NotFound />} /> */}
    </Provider>
  )
}
export default App;


