import React, { createContext,  useState } from 'react'
import CartDrawer from './Components/Context/CartDrawer'
import DialogComponent from './Components/Context/DialogComponent'
import { toast, ToastContainer } from 'react-toastify'
const MyContext = createContext();

const Provider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);



    localStorage.getItem(token);

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


    const logout = () => {
        setToken(null)
        setUser(null)
        setIsLogin(false)


        localStorage.removeItem("token");
        // localStorage.removeItem("user")

        toastMessage("success", "Logout Successfully")
    }



    const value = {
        isLogin,
        setIsLogin,
        toastMessage,
        logout,
        user,
        setUser,
        token,
        setToken
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
