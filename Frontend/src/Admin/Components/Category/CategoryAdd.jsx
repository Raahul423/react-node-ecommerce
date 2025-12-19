import { Button, TablePagination } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import Addcategory from './Addcategory';
import { AdminContext } from '../../../AdminAuthProvider';
import api from '../../../Utils/api';

const CategoryAdd = () => {
    const { toastMessage } = useContext(AdminContext)
    const [showcategory, setShowcategory] = useState([])
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const handlecategory = async () => {
            try {
                const response = await api.get("/categories/category/root");
                console.log(response);
                setShowcategory(response?.data?.rootcategory);
            } catch (error) {
                if (error?.response) {
                    toastMessage("error", error?.response?.data?.message)
                } else {
                    toastMessage("error", "Server not responding....")
                }
            }
        }

        handlecategory();
    }, [toastMessage]);



    const DeleteCategory = async (idx) => {
        try {
            const CategoryId = showcategory[idx]._id
            const response = await api.delete(`/categories/delete/${CategoryId}`);

            setShowcategory(prev =>
                prev.filter(cat => cat._id !== CategoryId)
            );

            toastMessage("success", response?.data?.message);
        } catch (error) {
            if (error?.response) {
                toastMessage("error", error?.response?.data?.message);
            } else {
                toastMessage("error", "Server not responding.....")
            }
        }
    }



    return (
        <section>
            <div className='part-1 flex justify-between items-center py-5'>
                <h1 className='!text-xl '>Category List</h1>
                <Button onClick={() => setOpen(true)} className='!bg-blue-600 !text-white !px-4 py-2' >ADD Category</Button>
            </div>

            <div className="relative overflow-x-auto bg-white border border-gray-600/30 shadow-md shadow-gray-600/60 rounded-md">
                <table className="w-full text-sm text-left scroll text-body">
                    <thead className="bg-gray-600/90">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                IMAGES
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                CATEGORY NAME
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {showcategory.length > 0 ? (
                            showcategory.map((cat, idx) => (
                                <tr key={idx} className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-gray-400">
                                    <th scope="row" className="px-6 py-2">
                                        <img className='h-18 w-18 hover:scale-103 transition-all cursor-pointer object-cover' src={cat.images[0].url} alt="Error" />
                                    </th>

                                    <td className="px-6 py-4 text-[1.2em]">
                                        {cat.name}
                                    </td>


                                    <td align='left'>
                                        <Button onClick={()=>DeleteCategory(idx)} className='!px-4 !py-2 !bg-primary !text-white'>
                                            <p>DELETE</p>
                                        </Button>
                                    </td>

                                </tr>
                            ))
                        ) :
                            (
                                <tr>
                                    <td colSpan={3} className="text-center py-4">
                                        No Categories Found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>


                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>


            <Addcategory open={open} setOpen={setOpen} />
        </section>
    )
}

export default CategoryAdd
