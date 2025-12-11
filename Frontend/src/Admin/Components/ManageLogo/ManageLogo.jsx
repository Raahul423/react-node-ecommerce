import { Button } from "@mui/material"
import { FaCloudUploadAlt } from "react-icons/fa"


const ManageLogo = () => {
    return (
        <section>
            <div className='flex justify-between items-center py-6'>
                <h1 className='!text-2xl '>Manage Logo</h1>
            </div>

            <div className="bg-white shadow-md shadow-gray-600/30 px-10 py-8 rounded-md flex flex-col gap-5">
                <div className="h-35 w-35 border border-dashed rounded-md p-1">
                    hello
                </div>

                <Button className="!bg-blue-600 !px-8 !py-2 !text-white flex gap-3">
                    <FaCloudUploadAlt className="text-2xl" />
                    PUBLISH AND VIEW
                </Button>
            </div>
        </section>
    )
}

export default ManageLogo
