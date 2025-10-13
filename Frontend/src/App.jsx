
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/FooterComponent/Footer'
import Products from './Pages/Products'
import Header from './Components/Header/Header'
import ProductsId from './Pages/ProductsId'

function App() {

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductsId/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
