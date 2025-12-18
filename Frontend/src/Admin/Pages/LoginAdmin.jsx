import { Button, CircularProgress } from '@mui/material'
import { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import AdminHeader from '../Components/AdminHeader'
import api from '../../Utils/api'
import { AdminContext } from '../../AdminAuthProvider'


export const LoginAdmin = () => {
    const { toastMessage, setAdminIsAuth, setAdmin} = useContext(AdminContext)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false)
    const [onclick, setOnclick] = useState("")
    const [field, setField] = useState({
        email: "",
        password: "",
        loginType: "admin"
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setField((prev) => ({ ...prev, [name]: value }))
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    const ForgotPassword = async () => {
        setOnclick("ForgotPassword")
        if (field.email.trim() === '') {
            toastMessage("error", "Please Enter E-mail...");
            return;
        }
        if (!emailRegex.test(field.email)) {
            toastMessage("error", "Please Enter Valid E-mail...");
            return;
        }

        try {
            setLoading(true)
            const res = await api.post('/users/forget-password', { email: field.email })

            localStorage.setItem("email", field.email);
            toastMessage("success", res?.data.message)
            setTimeout(() => {
                navigate("/forgot-password")
            }, 2000);
        } catch (error) {
            if (error?.response) {
                toastMessage("error", error?.response?.data?.message)
            } else {
                toastMessage("error", "Server not respond please try again...")
            }
        } finally {
            setLoading(false)
        }
    }

    const adminLogin = async () => {
        
        if (!field.email.trim() === '') {
            toastMessage("error", "Please Provide E-mail");
            return;
        }

        if (!emailRegex.test(field.email)) {
            toastMessage("error", "Please Provide Valid E-mail Id...")
            return;
        }

        if (!field.password.trim() === "") {
            toastMessage("error", "Please Provide Password...")
            return;
        }

        try {
            setLoading(true);
            const response = await api.post('/users/login', field);
            const { token, createdUser} = response.data;

            setAdminIsAuth(true)
            setAdmin(createdUser)

            localStorage.setItem("admintoken", token);
            localStorage.setItem("admin", JSON.stringify(createdUser));

            toastMessage("success"," Admin Login successfully");

            setTimeout(() => {
                navigate('/admin')
            }, 1000);
        } catch (error) {
            if (error?.response) {
                toastMessage("error", error?.response?.data?.message)
            } else {
                toastMessage("error", "Server not Responding. Please try Again...")
            }
        }finally{
            setLoading(false)
        }
    }


    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999]" >
                    <div className="flex flex-col items-center gap-3">
                        <CircularProgress />
                        {onclick === "ForgotPassword" ? <p className="text-white text-sm">Please Wait..Verifying your details....</p> : <p className="text-white text-sm">Processing your Login deatils please wait...</p>}

                    </div>
                </div >
            )}

            <section className='h-screen overflow-hidden bg-cover bg-center bg-no-repeat' style={{
                backgroundImage: "url('/admin_bg_image.jpg')"
            }}>
                <AdminHeader />
                <main className='flex justify-center  h-screen'>
                    <form onSubmit={handlechange} className='flex flex-col  gap-5 max-w-md'>
                        <div className='flex justify-center'>
                            <img className='h-20 w-20' src="https://ecommerce-admin-view.netlify.app/icon.svg" alt="" />
                        </div>

                        <div className='flex flex-col items-center'>
                            <h1 className='!text-4xl font-semibold tracking-wide'>Welcome Back! </h1 >
                            <h1 className='!text-4xl font-semibold whitespace-nowrap tracking-wide'> Sign in with your credentials.</h1>
                        </div>

                        <Button className='!px-5 !py-2 !border !border-blue-400 flex gap-2 w-fit !mx-auto' >
                            <p className='normal-case text-gray-900/80 font-sans !font-semibold'>SignIn With Google</p>
                            <FcGoogle className='text-xl' />
                        </Button>


                        <p className='flex justify-center gap-4 items-center'>
                            <div className="flex-1 h-px bg-gray-600" />
                            <span className='whitespace-nowrap'>Or, Sign In with your email</span>
                            <div className="flex-1 h-px bg-gray-600" />
                        </p>


                        <div className='w-full'>
                            <label>E-mail</label>
                            <input
                                ype="mail"
                                value={field.email}
                                name='email'
                                onChange={handlechange}
                                className='py-3  outline-none !w-full border-1 px-2 rounded-md' />
                        </div>

                        <div className='w-full'>
                            <label>Password</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? "password" : "text"}
                                    value={field.password}
                                    name='password'
                                    onChange={handlechange}
                                    className='py-3  outline-none !w-full border-1 px-2 rounded-md' />


                                <Button onClick={() => setShowPassword(!showPassword)} className='!absolute top-1/2 -translate-y-1/2 right-3 hover:!bg-gray-600/20 !rounded-full !p-1'>

                                    {showPassword ? <IoEye className='text-2xl text-gray-600' /> : <IoEyeOff className='text-2xl text-gray-600' />}

                                </Button>

                            </div>
                        </div>

                        <div onClick={ForgotPassword} className='flex justify-end'>
                            <p className='hover:!text-primary cursor-pointer underline'>Forgot Password ?</p>
                        </div>


                        <div className='flex justify-between'>
                            <span>Don't have an Account</span>
                            <span onClick={() => navigate('/admin/register')} className='hover:!text-primary cursor-pointer underline'>Sign Up</span>
                        </div>

                        <Button onClick={adminLogin} className='!bg-blue-600 !px-6 !py-2 !w-full !text-white'>
                            SIGN IN
                        </Button>
                    </form>
                </main>
            </section>
        </>
    )
}
