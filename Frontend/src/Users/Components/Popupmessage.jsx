import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Popupmessage = () => {
    const [popmeassage, setPopmessage] = useState(false);

    useEffect(() => {
        const showpop = sessionStorage.getItem("popupshown");

        if (!showpop) {
            setTimeout(() => {
                setPopmessage(true);
                sessionStorage.setItem("popupshown", "true")
            }, 2000);
        }
    }, [])

    if (!popmeassage) return null


    return (
        <section className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]">

            <motion.div
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className='pop-up w-fit fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>


                <h2 className="md:text-xl text-md font-semibold text-white mb-2">
                    👋 Hi Recruiter!
                </h2>
                <p className="text-white mb-4 leading-relaxed">
                    <p className='flex gap-2 mb-2'>
                        <span>1.</span>
                        <p><span className='text-blue-500'>Google authentication</span> is currently under development.<><span className='text-green-500'>Please use email/password login for now.</span></>  I am  actively working on it.</p>
                    </p>

                    <p className='flex gap-2 mb-2'> <span>2.</span>
                        <p><span className='text-red-600'>Payment Integration</span> is not Working at the moment. I am currently Working on it. (Testing Payments) </p></p>

                    <p className='flex  gap-2'><span>3.</span>
                        <p>Currently <span className='text-red-600'>Cart section</span> page is under processing on mobile devices. 😅   and also working on search box filter products....</p>
                    </p>

                </p>
                <img className='h-50 rounded-md object-cover' src="/Working Backend.gif" alt="" />
                <Button
                    variant="contained"
                    color="primary"
                    className="!bg-black hover:!bg-gray-800 !text-white"
                    onClick={() => setPopmessage(false)}
                >
                    Got it
                </Button>

            </motion.div>


        </section>
    )
}

export default Popupmessage
