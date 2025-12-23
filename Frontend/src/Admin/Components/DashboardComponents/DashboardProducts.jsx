import { Button, Checkbox, FormControl, MenuItem, Rating, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { AdminContext } from '../../../AdminAuthProvider';
import api from '../../../Utils/api';

const DashboardProducts = () => {
    const { toastMessage } = useContext(AdminContext)
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalProduct, setTotalProduct] = useState(0);


    useEffect(() => {
        const productsdata = async () => {
            try {
                const res = await api.get(`/products/allproducts?page=${page + 1}&limit=${rowsPerPage}`);

                setProducts(res?.data?.product)
                setTotalProduct(res?.data?.totalProducts)
            } catch (error) {
                if (error?.response) {
                    toastMessage("error", error?.response?.data?.message);
                } else {
                    toastMessage("error", "server not responding.....");
                }
            }
        }
        productsdata();
    }, [page, rowsPerPage, toastMessage])

    const handleChangePage = (event,newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <section >
            <div className='flex justify-between items-center my-6'>
                <h1 className='!text-2xl '>Products</h1>
                <Button className='!px-6 !py-2 !bg-blue-600/80 !text-white'>Add Product</Button>
            </div>

            <div className='relative border border-gray-600/30  bg-white shadow-md shadow-gray-600/90 rounded-md overflow-hidden'>

                <TableContainer sx={{ overflowX: "auto" }} className='scroll'>
                    <Table >
                        <TableHead className='sticky top-0 z-99'>
                            <TableRow className='bg-[#f2f2f2]'>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell className='!font-semibold !w-fit'>PRODUCT </TableCell>
                                <TableCell className='!font-semibold'>CATEGORY</TableCell>
                                <TableCell className='!font-semibold whitespace-nowrap'>SUB CATEGORY</TableCell>
                                <TableCell className='!font-semibold whitespace-nowrap'>PRICE (₹)</TableCell>
                                <TableCell className='!font-semibold'>SALES</TableCell>
                                <TableCell className='!font-semibold'>STOCK</TableCell>
                                <TableCell className='!font-semibold'>ACTION</TableCell>
                            </TableRow>
                        </TableHead>



                        <TableBody>
                            {products.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className='!flex gap-4 '>
                                        <div>
                                            <img className='h-15 w-15 rounded-md object-cover' src={row.images[0].url} alt="Error" />
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <p className='!text-xs font-semibold w-60'>{row.brand}</p>
                                            <p>{row.name} </p>
                                        </div>
                                    </TableCell>

                                    <TableCell align='center'>{row.category?.name}</TableCell>

                                    <TableCell align='center'>{row.subcategory?.name}</TableCell>

                                    <TableCell className='!text-blue-700/90 !font-semibold' align="center">₹{row.price}</TableCell>

                                    <TableCell className='!font-semibold whitespace-nowrap' align="center">{row.countInstock} Stock</TableCell>

                                    <TableCell className='!font-semibold !text-blue-700/90' align="center">{row.stock} stocks</TableCell>


                                    <TableCell className='!font-semibold' align="center">
                                        <Button className='!bg-primary !px-4 !py-1'>
                                            <p className='!text-white'>DELETE</p>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <div>
                    <TablePagination
                        component="div"
                        count={totalProduct}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>

            </div>

        </section>
    )
}

export default DashboardProducts
