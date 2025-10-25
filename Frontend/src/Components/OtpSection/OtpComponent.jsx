import React, { useRef, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

const OtpComponent = () => {

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);


    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
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
        }
    };

    return (
        <section className="flex flex-col items-center m-auto border w-fit px-6 py-2">
            <img className="h-50 " src="/otp.png" alt="Error" />
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
                className=""
            >
                Verify OTP
            </Button>

            <ToastContainer />
        </section>
    )
}

export default OtpComponent
