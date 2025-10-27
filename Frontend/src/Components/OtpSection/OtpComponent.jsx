import React, { useRef, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router";

const OtpComponent = () => {

    const navigate = useNavigate();

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);


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

    const handleSubmit = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length < 6) {
            toast.error("Please enter full 6-digit OTP");
        } else {
            toast.success(`OTP Submitted: ${enteredOtp}`);
            navigate('/update-password')
        }
    };

    return (
        <section className="my-container">
            <div className=" flex flex-col items-center gap-3 m-auto border border-gray-700/40 rounded-md w-fit px-12 py-2 shadow-gray-700/60 shadow-md bg-white">
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

            <ToastContainer />
        </section>
    )
}

export default OtpComponent
