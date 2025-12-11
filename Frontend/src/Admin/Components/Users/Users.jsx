import { Button, Checkbox, TablePagination } from '@mui/material'
import { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { MdOutlineMarkEmailRead, MdOutlinePhone } from "react-icons/md";

const Users = () => {
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
            <div className='flex justify-between items-center py-6'>
                <h1 className='!text-2xl '>Users List</h1>

            </div>




            <div className="relative overflow-x-auto  py-4 bg-white rounded-md shadow-md shadow-gray-600/50">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="bg-gray-800/70 border-b border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                <Checkbox />
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                USER
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                USER PHONE NO.
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                CREATED
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-600/20 border-b border-default">
                            <th className="px-6 py-4">
                                <Checkbox />
                            </th>
                            <td scope="row"  className="px-6 py-4 font-medium text-heading whitespace-nowrap flex gap-4">
                                <span>
                                    <img className='h-10 w-10 object-cover' src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg" alt="" />
                                </span>

                                <span className=''>
                                    INFO
                                    <span className='flex items-center gap-2'>
                                        <MdOutlineMarkEmailRead />
                                        jhdkjah@gmail.com
                                    </span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <MdOutlinePhone />
                                    <span>**********</span>
                                </span>

                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <SlCalender />
                                    25-01-2026
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <Button className='!bg-primary !text-white !py1 !px-4 cursor-pointer'>DELETE</Button>
                            </td>
                        </tr>

                         <tr className="odd:bg-white even:bg-gray-600/20 border-b border-default">
                            <th className="px-6 py-4">
                                <Checkbox />
                            </th>
                            <td scope="row"  className="px-6 py-4 font-medium text-heading whitespace-nowrap flex gap-4">
                                <span>
                                    <img className='h-10 w-10 object-cover' src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg" alt="" />
                                </span>

                                <span className=''>
                                    INFO
                                    <span className='flex items-center gap-2'>
                                        <MdOutlineMarkEmailRead />
                                        jhdkjah@gmail.com
                                    </span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <MdOutlinePhone />
                                    <span>**********</span>
                                </span>

                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <SlCalender />
                                    25-01-2026
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <Button className='!bg-primary !text-white !py1 !px-4 cursor-pointer'>DELETE</Button>
                            </td>
                        </tr>

                         <tr className="odd:bg-white even:bg-gray-600/20 border-b border-default">
                            <th className="px-6 py-4">
                                <Checkbox />
                            </th>
                            <td scope="row"  className="px-6 py-4 font-medium text-heading whitespace-nowrap flex gap-4">
                                <span>
                                    <img className='h-10 w-10 object-cover' src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg" alt="" />
                                </span>

                                <span className=''>
                                    INFO
                                    <span className='flex items-center gap-2'>
                                        <MdOutlineMarkEmailRead />
                                        jhdkjah@gmail.com
                                    </span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <MdOutlinePhone />
                                    <span>**********</span>
                                </span>

                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <SlCalender />
                                    25-01-2026
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <Button className='!bg-primary !text-white !py1 !px-4 cursor-pointer'>DELETE</Button>
                            </td>
                        </tr>

                         <tr className="odd:bg-white even:bg-gray-600/20 border-b border-default">
                            <th className="px-6 py-4">
                                <Checkbox />
                            </th>
                            <td scope="row"  className="px-6 py-4 font-medium text-heading whitespace-nowrap flex gap-4">
                                <span>
                                    <img className='h-10 w-10 object-cover' src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg" alt="" />
                                </span>

                                <span className=''>
                                    INFO
                                    <span className='flex items-center gap-2'>
                                        <MdOutlineMarkEmailRead />
                                        jhdkjah@gmail.com
                                    </span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <MdOutlinePhone />
                                    <span>**********</span>
                                </span>

                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <SlCalender />
                                    25-01-2026
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <Button className='!bg-primary !text-white !py1 !px-4 cursor-pointer'>DELETE</Button>
                            </td>
                        </tr>

                         <tr className="odd:bg-white even:bg-gray-600/20 border-b border-default">
                            <th className="px-6 py-4">
                                <Checkbox />
                            </th>
                            <td scope="row"  className="px-6 py-4 font-medium text-heading whitespace-nowrap flex gap-4">
                                <span>
                                    <img className='h-10 w-10 object-cover' src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg" alt="" />
                                </span>

                                <span className=''>
                                    INFO
                                    <span className='flex items-center gap-2'>
                                        <MdOutlineMarkEmailRead />
                                        jhdkjah@gmail.com
                                    </span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <MdOutlinePhone />
                                    <span>**********</span>
                                </span>

                            </td>
                            <td className="px-6 py-4">
                                <span className='flex items-center gap-2'>
                                    <SlCalender />
                                    25-01-2026
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <Button className='!bg-primary !text-white !py1 !px-4 cursor-pointer'>DELETE</Button>
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

        </section>
    )
}


export default Users