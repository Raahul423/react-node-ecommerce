import React, { useRef, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router";
import api from "../Utils/api";
import { toast, ToastContainer } from "react-toastify";

const OtpComponent = () => {
    const navigate = useNavigate();

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);
    const email = localStorage.getItem("email")


    const handleChange = (e, index) => {
        const val = e.target.value;
        if (!/^[0-9]?$/.test(val)) return;

        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if (val && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length < 6) {
            toast.error("Please enter full 6-digit OTP")
            return;
        }
        try {
            await api.post('/users/verifyforgetpasswordotp',
                {
                    code: enteredOtp,
                    email: email
                })
            toast.success("Verified your OTP You can reset your Password")
            setTimeout(() => {
                navigate('/update-password')
            }, 1000)

        } catch (error) {
            if (error.response) {
                toast.error(error.response?.data?.message)
            } else {
                toast.error("Server not respond please try again...")
            }
        }
    };

    return (
        <section className='flex items-center justify-center h-screen overflow-hidden bg-cover bg-center bg-no-repeat' style={{
            backgroundImage: "url('https://coreui.io/images/ogimages/coreui_1200_600.jpg')"
        }}>
            <div className=" flex flex-col items-center gap-3  border border-gray-700/40 rounded-md w-fit px-12 py-2 shadow-gray-700/60 shadow-md bg-white">
                <img className="h-50 " src="/verify.gif" alt="Error" />
                <h2 className="text-xl font-semibold">Enter 6-Digit OTP</h2>

                <Box className="flex gap-3">
                    {otp.map((digit, index) => (
                        <TextField
                            key={index}
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            inputProps={{
                                maxLength: 1,
                                style: {
                                    textAlign: "center",
                                    fontSize: "20px",
                                    width: "25px",
                                    height: "25px",
                                },
                            }}
                            variant="outlined"
                        />
                    ))}
                </Box>


                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    className="w-full !py-3 !bg-primary hover:!bg-black !my-3"
                >
                    Verify OTP
                </Button>
            </div>
            <ToastContainer/>
        </section>
    )
}

export default OtpComponent
