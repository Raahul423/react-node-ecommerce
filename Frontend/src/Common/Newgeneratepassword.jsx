import { Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useContext, useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useNavigate } from 'react-router';
import api from '../Utils/api';
import { MyContext } from '../Provider';
import { AdminContext } from '../AdminAuthProvider';

const Newgeneratepassword = () => {
    const { toastMessage } = useContext(AdminContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState("");
    const [ShowConfirmPassword, setShowConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const [resetpassword, setResetpassword] = useState({
        newpassword: "",
        confirmpassword: "",
    });

    const handleclick = (e) => {
        const { name, value } = e.target
        setResetpassword(() => {
            return {
                ...resetpassword,
                [name]: value
            }
        })
    }


    const check = async () => {
        if (!resetpassword.newpassword || !resetpassword.confirmpassword) {
            toastMessage("error", "Please Fill Both Of Them.")
            return;
        }


        if (resetpassword.newpassword.length < 8) {
            toastMessage("error", "password Should be 8 Character")
            return;
        }

        if (resetpassword.newpassword !== resetpassword.confirmpassword) {
            toastMessage("error", "confirm password not matched.")
            return;
        }

        try {
            setLoading(true)
            const email = localStorage.getItem("email")
            await api.post("/users/resetpassword", {
                email: email,
                newpassword: resetpassword.newpassword
            })

            toastMessage("success", "Successfully reset your password")

            setTimeout(() => {
                if (localStorage.getItem("loginType") === "admin") {
                    navigate('/admin/login')
                    localStorage.removeItem("loginType");
                } else {
                    navigate('/login')
                    localStorage.removeItem("loginType");
                }
            })

            localStorage.removeItem("email");

        } catch (error) {
            if (error.response) {
                toastMessage("error", error.response?.data?.message)
            } else {
                toastMessage("error", "Server not response please try again ...")
            }
        }

    }

    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999]" >
                    <div className="flex flex-col items-center gap-3">
                        <CircularProgress />
                        <p className="text-white text-sm">reset you Password Please Wait...</p>
                    </div>
                </div >
            )}
            <section className='h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat' style={{
                backgroundImage: "url('https://coreui.io/images/ogimages/coreui_1200_600.jpg')"
            }}>
                <div className='w-[30%] py-8 '>
                    <div className='p-8  gap-6 flex flex-col border-1 border-gray-700/30 shadow-md rounded-md  bg-white my-container'>
                        <img src="/forgot-password.gif" alt="Forgot-password" />
                        <h1>Forget Your Password</h1>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"


                        >
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">New-Password</InputLabel>
                                <OutlinedInput
                                    value={resetpassword.newpassword}
                                    onChange={handleclick}
                                    name='newpassword'
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'password' : 'text'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton className='!text-xl'
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="New-Password"
                                />
                            </FormControl>

                        </Box>

                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"


                        >
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm-Password</InputLabel>
                                <OutlinedInput
                                    value={resetpassword.confirmpassword}
                                    onChange={handleclick}
                                    name='confirmpassword'
                                    id="outlined-adornment-password"
                                    type={ShowConfirmPassword ? 'password' : 'text'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton className='!text-xl'
                                                onClick={() => setShowConfirmPassword(!ShowConfirmPassword)}
                                                edge="end"
                                            >
                                                {ShowConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                        </Box>


                        <Button
                            onClick={check}
                            variant="contained"
                            color="primary"
                            className="w-full !py-3 !bg-primary hover:!bg-black !my-3"
                        >
                            Change Password
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newgeneratepassword
