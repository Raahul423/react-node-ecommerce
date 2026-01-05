import { FaUser } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isLoginActive = location.pathname === "/admin/login";
    const isRegisterActive = location.pathname === "/admin/register";

    return (
        <section> <div className='h-15  w-full flex justify-between items-center px-6'>
            <div>
                <img src="/Logo.jpg" alt="admin header" />
            </div>

            <div className='flex'>
                <p onClick={() => navigate("/admin/login")} className={`flex items-center gap-1 px-6  rounded-full py-2 cursor-pointer ${isLoginActive ? "bg-gray-600/40" : "hover:bg-gray-600/10"}`}>
                    <FiLogIn />
                    <span>LOGIN</span>
                </p>

                <p onClick={() => navigate("/admin/register")} className={`flex items-center gap-1 active:bg-gray-600/20 px-6 py-2 rounded-full cursor-pointer ${isRegisterActive ? "bg-gray-600/40" : "hover:bg-gray-600/10"}`}>
                    <FaUser />
                    <span>SIGN UP</span>
                </p>
            </div>
        </div></section>
    )
}

export default AdminHeader
