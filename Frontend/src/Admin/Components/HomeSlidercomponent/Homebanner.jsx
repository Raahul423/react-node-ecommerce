import { Button, TablePagination } from '@mui/material'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import AddHomebannerSlide from './AddHomebannerSlide';



const Homebanner = () => {

    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isopen, setIsopen] = useState(false)

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
                    <h1 className='!text-xl '>Home Slider Banners</h1>
                    <Button onClick={() => setIsopen(true)} className='!bg-blue-600 !text-white !px-4 py-2' >ADD HOME SLIDE</Button>
                </div>

                <div className='part-2 shadow-md shadow-gray-600/30 rounded-md'>
                    <div className="scroll rounded-md">
                        <table className="w-full text-sm text-left rtl:text-right text-body">
                            <thead className='sticky top-0 bg-gray-500 rounded-md'>
                                <tr>
                                    <th scope="col" className="text-black px-6 py-3 font-medium">
                                        IMAGE
                                    </th>
                                    <th scope="col" className="text-black px-4 py-3 font-medium">
                                        ACTION
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b border-gray-500/20">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                    </th>

                                    <td align='left' className="text-2xl">
                                        <MdDelete />
                                    </td>
                                </tr>

                                <tr className="bg-white border-b border-gray-500/20">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                    </th>

                                    <td align='left' className="text-2xl">
                                        <MdDelete />
                                    </td>
                                </tr>

                                <tr className="bg-white border-b border-gray-500/20 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                    </th>

                                    <td align='left' className="text-2xl">
                                        <MdDelete />
                                    </td>
                                </tr>

                                <tr className="bg-white border-b border-gray-500/20 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                    </th>

                                    <td align='left' className="text-2xl">
                                        <MdDelete />
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-gray-500/20 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        <img className='h-20 rounded-md hover:scale-102 cursor-pointer transition-all' src="https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg" alt="Banner" />
                                    </th>

                                    <td align='left' className="text-2xl">
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
                <AddHomebannerSlide isOpen={isopen} setIsopen={setIsopen}/>
            </section>
    )
}

export default Homebanner
