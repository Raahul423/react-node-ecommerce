import { Button, Checkbox, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import demoProducts from '../../../assets/Assests'
import './Dashboard.css'
import { RiDeleteBin6Line } from 'react-icons/ri'

const DashboardProducts = () => {
    const [rows, setRows] = useState(demoProducts)
    return (
        <section >
            <div className='flex justify-between items-center my-6'>
                <h1 className='!text-2xl '>Products</h1>
                <Button className='!px-6 !py-2 !bg-blue-600/80 !text-white'>Add Product</Button>
            </div>

            <div className='border border-gray-600/30  bg-white shadow shadow-gray-600/90 rounded-md overflow-hidden'>

                <div className='flex'>
                    <div className='flex gap-2'>
                        <div>
                            <p>Category By</p>
                        </div>

                        <div>
                            <p>Sub Category By</p>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <TableContainer sx={{ overflowX: "auto" }} className='overflow-x-scroll  scroll'>
                    <Table sx={{ minWidth: 1200 }}>
                        <TableHead>
                            <TableRow className='bg-[#f2f2f2]'>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell className='!font-semibold !w-fit'>PRODUCT </TableCell>
                                <TableCell className='!font-semibold'>CATEGORY</TableCell>
                                <TableCell className='!font-semibold'>SUB CATEGORY</TableCell>
                                <TableCell className='!font-semibold'>PRICE (₹)</TableCell>
                                <TableCell className='!font-semibold'>SALES</TableCell>
                                <TableCell className='!font-semibold'>STOCK</TableCell>
                                <TableCell className='!font-semibold'>RATING</TableCell>
                                <TableCell className='!font-semibold'>ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className='!flex gap-4 '>
                                        <div>
                                            <img className='h-15 w-15 rounded-md object-cover' src={row.img} alt="" />
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <p className='!text-xs font-semibold w-60'>{row.desc}</p>
                                            <p>{row.name} </p>
                                        </div>
                                    </TableCell>

                                    <TableCell>{row.name}</TableCell>

                                    <TableCell align='right'>{row.category}</TableCell>

                                    <TableCell className='!text-blue-700/90 !font-semibold' align="right">₹{row.price}</TableCell>

                                    <TableCell className='!font-semibold' align="right">{row.stock} sale</TableCell>

                                    <TableCell className='!font-semibold !text-blue-700/90' align="right">{row.stock} stocks</TableCell>

                                    <TableCell className='!font-semibold' align="right"><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /></TableCell>

                                    <TableCell className='!font-semibold' align="center"><RiDeleteBin6Line className='text-xl' /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>




        </section>
    )
}

export default DashboardProducts
