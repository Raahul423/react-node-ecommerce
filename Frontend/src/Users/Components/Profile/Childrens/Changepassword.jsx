import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { MyContext } from '../../../../Provider';
import api from '../../../../Utils/api';

const Changepassword = () => {
    const { toastMessage } = useContext(MyContext)

    const [confirmpassword, setConfirmpassword] = useState();
    const [loading, setLoading] = useState(false);
    const [changePassword, setChangePassword] = useState({
        oldpassword: "",
        newpassword: ""
    })


    const handleclick = (e) => {
        const { name, value } = e.target
        setChangePassword(() => {
            return {
                ...changePassword,
                [name]: value
            }
        })
    }

    const pass = async () => {
        if (!changePassword.oldpassword) {
            toastMessage("error", "Old Password should be required...")
            return;
        }
        if (changePassword.newpassword !== confirmpassword) {
            toastMessage("error", "Invalid confirm password...")
            return;
        }

        try { 
            setLoading(true)
            const response = await api.patch("/users/change-password", changePassword);  
            
            setChangePassword({
                oldpassword:"",
                newpassword:""
            })

            setConfirmpassword("")

            toastMessage("success",response?.data?.message);
        } catch (error) {
            if (error.response) {
                toastMessage("error", error?.response?.data?.message);
            } else {
                toastMessage("error", "Server not responding please wait...")
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
                        <p className="text-white text-sm">Please Wait...</p>
                    </div>
                </div >
            )}
            <section className='md:w-[70%] px-8 border border-gray-700/50 shadow shadow-gray-700/50 rounded-md bg-white py-2'>
                <div className='border-b border-gray-700/45 py-4'>
                    <h1>Change Password</h1>
                </div>

                <div className='flex flex-col gap-6 py-6'>
                    <Box className='md:grid gap-6 grid-cols-2 max-md:flex max-md:flex-col'>
                        <TextField
                            id="outlined-required"
                            label="Old Password"
                            name="oldpassword"
                            onChange={handleclick}
                            value={changePassword.oldpassword}
                        />

                        <TextField
                            id="outlined-disabled"
                            label="New Password"
                            name="newpassword"
                            value={changePassword.newpassword}
                            onChange={handleclick}
                        />

                        <TextField
                            id="outlined-disabled"
                            label="Confirm Password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        />

                    </Box>

                    <Button onClick={pass} className='!bg-primary !text-white !px-4 !w-fit'>Update Password</Button>
                </div>
            </section>
        </>
    )
}

export default Changepassword
