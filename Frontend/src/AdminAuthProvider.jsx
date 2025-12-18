import { createContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import CartDrawer from './Context/CartDrawer';
import DialogComponent from './Context/DialogComponent';
import api from './Utils/api';

const AdminContext = createContext();

const AdminAuthProvider = ({children}) => {

    const [adminIsAuth, setAdminIsAuth] = useState(false);
    const [admin, setAdmin] = useState(null);
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
            await api.get("/admins/logout")
            setAdmin(null)
            setAdminIsAuth(false)

            localStorage.removeItem("admintoken");
            localStorage.removeItem("admin")

            toastMessage("success", "Logout Successfully")
        } catch (error) {
            toastMessage("error", error)
        }
    }



    useEffect(() => {
        try {
            const token = localStorage.getItem("admintoken")
            const savedadmin = localStorage.getItem("admin")

            if (!token || !savedadmin) {
                return;
            }

            if (isExpiredToken(token)) {
                logout();
            } else {
                setAdmin(JSON.parse(savedadmin))
                setAdminIsAuth(true)
            }

        } catch (error) {
            toastMessage("error", error)
        } finally {
            setAuthloading(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const value = {
        adminIsAuth,
        setAdminIsAuth,
        toastMessage,
        logout,
        admin,
        setAdmin,
        authloading
    }

    return (
         <AdminContext.Provider value={value}>
            <ToastContainer position="bottom-center" toastStyle={{ background: "#1e1e1e", color: "#fff" }} autoClose={2000} />
            <CartDrawer>
                <DialogComponent>
                    {children}
                </DialogComponent>
            </CartDrawer>
        </AdminContext.Provider>
    )
}


export default AdminAuthProvider
export {AdminContext}