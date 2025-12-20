import { createContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import api from './Utils/api';
import CartDrawer from './Context/CartDrawer';
import DialogComponent from './Context/DialogComponent';
import { Navigate } from 'react-router-dom';
const MyContext = createContext();

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [authloading, setAuthloading] = useState(true)


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



    useEffect(() => {
        const token = localStorage.getItem("token")
        const saveduser = localStorage.getItem("user")

        if (!token || !saveduser) {
            setAuthloading(false)
            return;
        }

        if (isExpiredToken(token)) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setAuthloading(false);
            return <Navigate to="/" />;
        }

        setUser(JSON.parse(saveduser));
        setIsAuth(true);
        setAuthloading(false);
    }, [])

    const value = {
        isAuth,
        setIsAuth,
        toastMessage,
        logout,
        user,
        setUser,
        authloading
    }


    return (
        <>
            <ToastContainer position="bottom-center" toastStyle={{ background: "#1e1e1e", color: "#fff" }} autoClose={2000} />
            <MyContext.Provider value={value}>
                <CartDrawer>
                    <DialogComponent>
                        {children}
                    </DialogComponent>
                </CartDrawer>
            </MyContext.Provider>
        </>

    )
}

export default Provider
export { MyContext }
