import { Route, Routes } from 'react-router-dom'
import Home from './Users/Pages/Home'
import Products from './Users/Pages/Products'
import ProductsId from './Users/Pages/ProductsId'
import Login from './Users/Pages/Login'
import Register from './Users/Pages/Register'
import Checkout from './Users/Pages/Checkout'
import YourCart from './Users/Pages/YourCart'
import YourAccount from './Users/Pages/YourAccount'
import Newpassword from './Users/Pages/Newpassword'
import Provider from './Provider'
import YourInfo from './Users/Components/Profile/YourInfo'
import MyList from './Users/Components/Profile/MyList'
import Myorder from './Users/Components/Profile/Myorder'
import Dashboard from './Admin/Pages/Dashboard'
import Homebanner from './Admin/Components/HomeSlidercomponent/Homebanner'
import CategoryAdd from './Admin/Components/Category/CategoryAdd'
import AddSubCategoryList from './Admin/Components/Category/AddSubCategoryList'
import AddProduct from './Admin/Components/ProductsComponent/AddProduct'
import Order from './Admin/Components/OrderComponent/Order'
import Users from './Admin/Components/Users/Users'
import ManageLogo from './Admin/Components/ManageLogo/ManageLogo'
import AdminLayout from './Admin/Layout/AdminLayout'
import Layout from './Users/Layout/Layout'
import { RegisterAdmin } from './Admin/Pages/RegisterAdmin'
import { LoginAdmin } from './Admin/Pages/LoginAdmin'
import Verifyemail from './Verifyemail'
import OtpComponent from './OtpComponent'







function App() {

  return (
    <Provider>
      {/* {admin route} */}
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/homeslide' element={<Homebanner />} />
          <Route path='/category' element={<CategoryAdd />} />
          <Route path='/subCatergory/list' element={<AddSubCategoryList />} />
          <Route path='/addProducts' element={<AddProduct />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/users' element={<Users />} />
          <Route path='/managelogo' element={<ManageLogo />} />
        </Route>
        <Route path='/admin/register' element={<RegisterAdmin />} />
        <Route path='/admin/login' element={<LoginAdmin />} />



        {/* {User Routes} */}
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
          <Route path='/update-password' element={<Newpassword />} />
        </Route>

        {/* {access for both User as well as admin} */}
        <Route path='/verify-email' element={<Verifyemail />} />
        <Route path='/forgot-password' element={< OtpComponent/>} />
      </Routes>

      {/* <Route path='*' element={<NotFound />} /> */}
    </Provider>
  )
}
export default App;


