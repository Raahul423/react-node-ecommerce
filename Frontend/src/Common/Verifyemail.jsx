import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { MyContext } from '../Provider'
import api from '../Utils/api'

const Verifyemail = () => {
    const { toastMessage } = useContext(MyContext);
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
                toastMessage("error", "Invalid verification link")
                return;
            }

            console.log(token);
            console.log(id);



            try {
                const res = await api.get(`/users/verify-email?token=${token}&id=${id}`);

                setVerify("Email verify successfully redirect to login...");

                toastMessage("success", res.data.message || "Email verified please login...")

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
                toastMessage(error, msg);
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
        </section>
    )
}

export default Verifyemail