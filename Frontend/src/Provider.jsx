import React, { createContext, useState } from 'react'
import CartDrawer from './Components/Context/CartDrawer'
import DialogComponent from './Components/Context/DialogComponent'
import Header from './Components/Header/Header'
import Footer from './Components/FooterComponent/Footer'
import ScrollComponent from './Components/ScrolltoTop/ScrollComponent'
import { toast, ToastContainer } from 'react-toastify'

const MyContext = createContext();

const Provider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const toastMessage = (type, message) => {
        switch (type) {
            case "success":
                toast.success(message);
                break;
            case "error":
                toast.error(message);
                break;
            default:
                toast(message);
        }
    }

    const value = {
        isLogin,
        setIsLogin,
        toastMessage
    }


    return (
        <MyContext.Provider value={value}>
            <ToastContainer position="bottom-center" toastStyle={{background:"#1e1e1e",color:"#fff"}} autoClose={2000} />
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
export { MyContext }
