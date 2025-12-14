import React, { createContext, useEffect, useState } from 'react'
import CartDrawer from './Users/Components/Context/CartDrawer'
import DialogComponent from './Users/Components/Context/DialogComponent'
import { toast, ToastContainer } from 'react-toastify'
import api from './Utils/api';
const MyContext = createContext();

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    


    const isExpiredToken = (token) => {
        try {
            if (!token) return true;

            const encodedbase64 = token.split(".")[1]
            const decodedpayload = JSON.parse(atob(encodedbase64))
            const expiredToken = decodedpayload.exp * 1000;
            return Date.now() > expiredToken
        } catch (error) {
            console.log(error);
            return true;
        }
    }


    const logout = async () => {
        try {
            await api.get("/users/logout")
            setUser(null)
            setIsAuth(false)

            localStorage.removeItem("token");
            localStorage.removeItem("user")

            toastMessage("success", "Logout Successfully")
        } catch (error) {
            toastMessage("error", error)
        }
    }


    const toastMessage = (type, message) => {
        switch (type) {
            case "success":
                toast.success(message);
                break;
            case "error":
                toast.error(message);
                break;
        }
    }


    useEffect(() => {
        try {
            const token = localStorage.getItem("token")
            const saveduser = localStorage.getItem("user")

            if (!token || !saveduser) {
                return;
            }

            if (isExpiredToken(token)) {
                logout();
            } else {
                setUser(JSON.parse(saveduser))
                setIsAuth(true)
            }

        } catch (error) {
            toastMessage("error", error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const value = {
       isAuth,
       setIsAuth,
        toastMessage,
        logout,
        user,
        setUser,
    }


    return (
        <MyContext.Provider value={value}>
            <ToastContainer position="bottom-center" toastStyle={{ background: "#1e1e1e", color: "#fff" }} autoClose={2000} />
            <CartDrawer>
                <DialogComponent>
                    {children}
                </DialogComponent>
            </CartDrawer>
        </MyContext.Provider>

    )
}

export default Provider
export { MyContext }
