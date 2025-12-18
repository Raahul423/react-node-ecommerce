import React, {useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { MyContext } from '../Provider'
import api from '../Utils/api'
import { toast, ToastContainer } from 'react-toastify'

const Verifyemail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [verify, setVerify] = useState("Verifying your email please wait ....")

    const getQueryParams = () => {
        return new URLSearchParams(location.search);
    }

    useEffect(() => {
        const verify = async () => {
            const query = getQueryParams();
            const token = query.get("token");
            const id = query.get("id");

            if (!token || !id) {
                setVerify("Invalid verification link")
                return;
            }


            try {
                const res = await api.get(`/users/verify-email?token=${token}&id=${id}`);

                setVerify("Email verify successfully redirect to login...");

                toast.success(res.data.message || "Email verified please login...")

                setTimeout(() => {
                    if (res?.data?.role === "admin") {
                        navigate('/admin/login')
                    } else {
                        navigate('/login')
                    }

                }, 2000);
            } catch (error) {
                const msg = error.response?.data?.message || "verification failed please try again..."

                setVerify(msg)
                toast.error(error.msg);
            }
        };
        verify();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section>
            <div className='my-container flex justify-center items-center'>
                <p className='!text-xl'>{verify}</p>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default Verifyemail