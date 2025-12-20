import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';
import { GoDotFill } from 'react-icons/go'
import { MdKeyboardArrowUp, MdOutlineDelete } from 'react-icons/md';

import { RiArrowDownSLine } from 'react-icons/ri'
import Addsubcategory from './Addsubcategory';
import { AdminContext } from '../../../AdminAuthProvider';
import api from '../../../Utils/api';


const AddSubCategoryList = () => {
    const { toastMessage } = useContext(AdminContext)
    const [open, setOpen] = useState(false);
    const [isopen, setIsopen] = useState(null)
    const [categorydata, setCategorydata] = useState([]);

    const click = (index) => {
        setIsopen(isopen == index ? null : index)
    }

    useEffect(() => {
        const categoryDetails = async () => {
            try {
                const response = await api.get("/categories/allcategories");
                // console.log(response);

                setCategorydata(response?.data?.rootcategories)
            } catch (error) {
                if (error?.response) {
                    toastMessage("error", error?.response?.data?.message);
                } else {
                    toastMessage("error", "Server not responding....")
                }
            }
        }
        categoryDetails();
    }, [toastMessage])


    return (
        <section>
            <div className='part-1 flex justify-between items-center py-5'>
                <h1 className='!text-xl '>Sub Category List</h1>
                <Button onClick={() => setOpen(true)} className='!bg-blue-600 !text-white !px-4 py-2' >ADD SUB CATEGORY</Button>
            </div>


            <div class="relative overflow-x-auto bg-white border border-gray-600/30 shadow-md shadow-gray-600/60 rounded-md">
                <table class="w-full text-sm text-left scroll text-body">
                    <tbody>
                        {categorydata.map((cat, idx) => (
                            <>
                                <tr onClick={() => click(idx)} class="bg-gray-700 border-b border-gray-400 ">
                                    <td class="px-6 py-3 text-white text-xl flex justify-between">
                                        <p>{cat.name}</p>
                                        {categorydata[idx]?.children.length == 0 ? null : (
                                            <>
                                                {isopen === idx ? <MdKeyboardArrowUp className='text-2xl cursor-pointer' /> : <RiArrowDownSLine className='text-2xl cursor-pointer' />}
                                            </>
                                        )}

                                    </td>
                                </tr>

                                <Collapse isOpened={isopen === idx}>
                                    {categorydata[idx].children.map((subcat, idx) => (
                                        <div key={idx} className='px-6'>
                                            <div className='!justify-between flex py-3 border-b border-gray-600/30'>

                                                <p className='flex items-center gap-1 text-slate-800/90 normal-case'>{subcat.name}</p>

                                                <Button className='!bg-primary !text-white !px-4 !py-1'>
                                                    Delete
                                                </Button>

                                            </div>
                                        </div>
                                    ))}

                                </Collapse>
                            </>
                        ))}

                    </tbody>
                </table>
            </div>
            <Addsubcategory open={open} setOpen={setOpen} />
        </section>
    )
}

export default AddSubCategoryList




