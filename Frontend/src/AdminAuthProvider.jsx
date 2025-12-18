import { createContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import CartDrawer from './Context/CartDrawer';
import DialogComponent from './Context/DialogComponent';
import api from './Utils/api';
import { Navigate } from 'react-router';

const AdminContext = createContext();

const AdminAuthProvider = ({ children }) => {

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
            await api.get("/users/logout");

        } catch (error) {
            toastMessage("error", error.message);
        } finally {
            // 🔥 FORCE CLEANUP
            localStorage.removeItem("admintoken");
            localStorage.removeItem("admin");

            delete api.defaults.headers.common["Authorization"];

            setAdmin(null);
            setAdminIsAuth(false);

            toastMessage("success", "Logout Successfully");
        }
    };




    useEffect(() => {
        const token = localStorage.getItem("admintoken");
        const savedadmin = localStorage.getItem("admin");

        if (!token || !savedadmin) {
            setAuthloading(false);
            return;
        }

        if (isExpiredToken(token)) {
            localStorage.removeItem("admintoken");
            localStorage.removeItem("admin");
            setAuthloading(false);
            return <Navigate to="/admin/login"/> ;
        }

        setAdmin(JSON.parse(savedadmin));
        setAdminIsAuth(true);
        setAuthloading(false);

    }, []);


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
        <>
            <ToastContainer position="bottom-center" toastStyle={{ background: "#1e1e1e", color: "#fff" }} autoClose={2000} />
            <AdminContext.Provider value={value}>
                <CartDrawer>
                    <DialogComponent>
                        {children}
                    </DialogComponent>
                </CartDrawer>
            </AdminContext.Provider>
        </>
    )
}


export default AdminAuthProvider
export { AdminContext }