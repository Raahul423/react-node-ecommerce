import React, { createContext, useState } from 'react'
import CartDrawer from './Components/Context/CartDrawer'
import DialogComponent from './Components/Context/DialogComponent'
import Header from './Components/Header/Header'
import Footer from './Components/FooterComponent/Footer'
import ScrollComponent from './Components/ScrolltoTop/ScrollComponent'

const MyContext = createContext();

const Provider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);

    const value = {
        isLogin,
        setIsLogin
    }


    return (
        <MyContext.Provider value={value}>
            <CartDrawer>
                <DialogComponent>
                    <Header />
                    <ScrollComponent />
                    {children}
                    <Footer />
                </DialogComponent>
            </CartDrawer>
        </MyContext.Provider>

    )
}

export default Provider
export {MyContext}
