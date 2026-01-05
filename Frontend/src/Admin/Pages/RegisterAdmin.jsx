import { Button, CircularProgress } from '@mui/material'
import { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import AdminHeader from '../Components/AdminHeader'
import { useNavigate } from 'react-router-dom'
import api from '../../Utils/api'
import { AdminContext } from '../../AdminAuthProvider'

export const RegisterAdmin = () => {
    const { toastMessage } = useContext(AdminContext)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false)
    const [field, setField] = useState({
        fullName: "",
        email: "",
        password: "",
    });


    const handlechange = (e) => {
        const { name, value } = e.target;
        setField((prev) => ({ ...prev, [name]: value }))
    }

    const handlesubmit = async (event) => {
        event.preventDefault();

        const emailRegex = /^\S+@\S+\.\S+$/; // for check Valid emailId

        if (!field.fullName || !field.email || !field.password) {
            toastMessage("error", "Please Fill All Fields...");
            return ;
        }

        if (!emailRegex.test(field.email)) {
            toastMessage("error", "Please enter valid e-mail....")
            return;
        }

        try {
            setLoading(true)
            const response = await api.post("/users/admin/register", field);
            setField({
                fullName:"",
                password:"",
                email:""
            })
            toastMessage("success",response?.data?.message)

        } catch (error) {
            if (error?.response) {
                toastMessage("error",error?.response?.data?.message)
            } else {
                toastMessage("error", "Server not response please try again ....")
            }
        } finally {
            setLoading(false)
        }
    }


    return (
        <section className='h-screen overflow-hidden bg-cover bg-center bg-no-repeat' style={{
            backgroundImage: "url('/admin_bg_image.jpg')"
        }}>

            {loading && (
                <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999]" >
                    <div className="flex flex-col items-center gap-3">
                        <CircularProgress />
                        <p className="text-white text-sm">Processing your registration...</p>
                    </div>
                </div >
            )}

            <AdminHeader />
            <main className='flex justify-center  h-screen'>
                <form  className='flex flex-col  gap-5 max-w-md'>
                    <div className='flex justify-center'>
                        <img className='h-20 w-20' src="/adminlogo.svg" alt="" />
                    </div>

                    <div className='flex flex-col items-center'>
                        <h1 className='!text-4xl font-semibold tracking-wide'>Join us today! Get special </h1 >
                        <h1 className='!text-4xl font-semibold whitespace-nowrap tracking-wide'> benefits and stay up-to-date.</h1>
                    </div>

                    <Button className='!px-5 !py-2 !border !border-blue-400 flex gap-2 w-fit !mx-auto' >
                        <p className='normal-case text-gray-900/80 font-sans !font-semibold'>SignIn With Google</p>
                        <FcGoogle className='text-xl' />
                    </Button>


                    <p className='flex justify-center gap-4 items-center'>
                        <div className="flex-1 h-px bg-gray-600" />
                        <span className='whitespace-nowrap'>Or, Sign Up with your email</span>
                        <div className="flex-1 h-px bg-gray-600" />
                    </p>

                    <div className='w-full'>
                        <label>Full Name</label>
                        <input
                            type="text"
                            onChange={handlechange}
                            value={field.fullName}
                            name='fullName'
                            className='py-3  outline-none !w-full border-1 px-2 rounded-md' />
                    </div>

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

                    <span>
                        <p onClick={() => navigate("/admin/login")} className='hover:!text-primary cursor-pointer underline'>Already Have an Account ?</p>
                    </span>

                    <Button onClick={handlesubmit} className='!bg-blue-600 !px-6 !py-2 !w-full !text-white'>
                        SIGN UP
                    </Button>
                </form>
            </main>
        </section>
    )
}
