
import { BrowserRouter, Outlet, Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/FooterComponent/Footer'
import Products from './Pages/Products'
import Header from './Components/Header/Header'
import ProductsId from './Pages/ProductsId'
import NotFound from './Pages/NotFound'

function App() {
  const location = useLocation();

  return (
    <>
    {location.pathname !== "*" && <Header/>} 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductsId/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {location.pathname !== "*" &&  <Footer/>}
    </>
  )
}

export default App
