import { Button, TablePagination } from '@mui/material'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import Addcategory from './Addcategory';

const CategoryAdd = () => {
     const [open, setOpen] = React.useState(false);
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <section>
            <div className='part-1 flex justify-between items-center py-5'>
                <h1 className='!text-xl '>Category List</h1>
                <Button onClick={()=>setOpen(true)} className='!bg-blue-600 !text-white !px-4 py-2' >ADD Category</Button>
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
                        <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-gray-400">
                            <th scope="row" className="px-6 py-2">
                                <img className='h-13 w-13 hover:scale-103 transition-all cursor-pointer' src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="" />
                            </th>
                            <td className="px-6 py-4">
                                Fastion
                            </td>

                            <td align='left' className="text-2xl px-6">
                                <MdDelete />
                            </td>
                        </tr>
                        <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-gray-400">
                            <th scope="row" className="px-6 py-4">
                                <img className='h-13 w-13 hover:scale-103 transition-all cursor-pointer' src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="" />
                            </th>
                            <td className="px-6 py-4">
                                Fastion
                            </td>

                            <td align='left' className="text-2xl px-6">
                                <MdDelete />
                            </td>
                        </tr>

                        <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-gray-400">
                            <th scope="row" className="px-6 py-2">
                                <img className='h-13 w-13 hover:scale-103 transition-all cursor-pointer' src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="" />
                            </th>
                            <td className="px-6 py-4">
                                Fastion
                            </td>

                            <td align='left' className="text-2xl px-6">
                                <MdDelete />
                            </td>
                        </tr>

                        <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-gray-400">
                            <th scope="row" className="px-6 py-2">
                                <img className='h-13 w-13 hover:scale-103 transition-all cursor-pointer' src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="" />
                            </th>
                            <td className="px-6 py-4">
                                Fastion
                            </td>

                            <td align='left' className="text-2xl px-6">
                                <MdDelete />
                            </td>
                        </tr>

                        <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-gray-400">
                            <th scope="row" className="px-6 py-2">
                                <img className='h-13 w-13 hover:scale-103 transition-all cursor-pointer' src="https://serviceapi.spicezgold.com/download/1763965324754_4819.png" alt="" />
                            </th>
                            <td className="px-6 py-4">
                                Fastion
                            </td>

                            <td align='left' className="text-2xl px-6">
                                <MdDelete />
                            </td>
                        </tr>

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


            <Addcategory open={open} setOpen={setOpen}/>
        </section>
    )
}

export default CategoryAdd
