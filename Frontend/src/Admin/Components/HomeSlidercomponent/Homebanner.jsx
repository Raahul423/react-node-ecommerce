import { Button, TablePagination } from '@mui/material'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const Homebanner = () => {

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
        <section className='pl-75 pr-3 bg-gray-400/10 h-screen'>
            <div className='part-1 flex justify-between items-center py-5'>
                <h1 className='!text-xl '>Home Slider Banners</h1>
                <Button className='!bg-blue-600 !text-white !px-4 py-2' >ADD HOME SLIDE</Button>
            </div>

            <div className='part-2 shadow-md shadow-gray-600/30 rounded-md'>
                <div class="scroll rounded-md">
                    <table class="w-full text-sm text-left rtl:text-right text-body">
                        <thead className='sticky top-0 bg-gray-500 rounded-md'>
                            <tr>
                                <th scope="col" class="text-black px-6 py-3 font-medium">
                                    IMAGE
                                </th>
                                <th scope="col" class="text-black px-4 py-3 font-medium">
                                    ACTION
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b border-gray-500/20">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                </th>

                                <td align='left' class="text-2xl">
                                    <MdDelete />
                                </td>
                            </tr>

                            <tr class="bg-white border-b border-gray-500/20">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                </th>

                                <td align='left' class="text-2xl">
                                    <MdDelete />
                                </td>
                            </tr>

                            <tr class="bg-white border-b border-gray-500/20 ">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                </th>

                                <td align='left' class="text-2xl">
                                    <MdDelete />
                                </td>
                            </tr>

                            <tr class="bg-white border-b border-gray-500/20 ">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                </th>

                                <td align='left' class="text-2xl">
                                    <MdDelete />
                                </td>
                            </tr>
                            <tr class="bg-white border-b border-gray-500/20 ">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                </th>

                                <td align='left' class="text-2xl">
                                    <MdDelete />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                 <TablePagination
                        component="div"
                        count={100}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

            </div>
        </section>
    )
}

export default Homebanner
