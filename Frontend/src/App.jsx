import { Route, Routes } from 'react-router-dom'
import Home from './Users/Pages/Home'
import Products from './Users/Pages/Products'
import ProductsId from './Users/Pages/ProductsId'
import NotFound from './Users/Pages/NotFound'
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



function App() {

  return (
    <Provider>
      <Routes>
        <Route path=''></Route>
      </Routes>










      {/* {these for Users route} */}
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
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
        <Route path='/verify-email' element={<Verifyemail/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Provider>
  )
}
export default App;


