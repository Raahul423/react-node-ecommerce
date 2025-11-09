import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Popupmessage = () => {
    const [popmeassage, setPopmessage] = useState(false);

    useEffect(() => {
        const showpop = sessionStorage.getItem("popupshown");

        if(!showpop){
            setTimeout(() => {
                 setPopmessage(true);
            sessionStorage.setItem("popupshown","true")
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
            className='pop-up w-fit fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>


                <h2 className="text-xl font-semibold text-white mb-2">
                    👋 Hi Recruiter!
                </h2>
                <p className="text-white mb-4 leading-relaxed">
                    The <span className="font-medium text-primary">Frontend</span> part of
                    this project is <span className="text-green-600 font-semibold">100% complete</span>.
                    <br />
                    Currently, the <span className="text-blue-600 font-semibold">Backend</span> integration
                    is in progress... 🚀
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
