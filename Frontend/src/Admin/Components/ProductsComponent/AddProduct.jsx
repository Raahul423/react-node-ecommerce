import React, { useContext, useEffect, useState } from 'react'
import { Button, Checkbox, FormControl, MenuItem, Rating, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { MdDeleteOutline } from 'react-icons/md';
import { Addnewproduct } from './Addnewproduct';
import { AdminContext } from '../../../AdminAuthProvider';
import api from '../../../Utils/api';

const AddProduct = () => {
    const { toastMessage } = useContext(AdminContext);
    const [open, setOpen] = useState(false);
    const [totalproduct, setTotalproduct] = useState(0)
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [value, setValue] = useState('');
    const [subcat, setSubcat] = useState('');

    useEffect(() => {
        const fetchPrdoucts = async () => {
            try {
                const res = await api.get(
                    `/products/allproducts?page=${page + 1}&limit=${rowsPerPage}`
                );

                setProducts(res.data.product);       
                setTotalproduct(res.data.totalProducts); 

            } catch (error) {
                if (error?.response) {
                    toastMessage("error", error?.response?.data?.messge);
                } else {
                    toastMessage("error", "Server not responding...");
                }
            }
            
        }

        fetchPrdoucts()
    }, [page, rowsPerPage, toastMessage])


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const subCategory = (event) => {
        setSubcat(event.target.value)
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value,10));
        setPage(0);
    };


    return (
        <section>
            <div className='flex justify-between items-center py-6'>
                <h1 className='!text-2xl '>Products List</h1>
                <Button onClick={() => setOpen(true)} className='!px-6 !py-2 !bg-blue-600/80 !text-white'>Add Product</Button>
            </div>

            <div className='relative border border-gray-600/30  bg-white shadow-md shadow-gray-600/90 rounded-md overflow-x-auto'>
                <div className='flex px-4 py-6'>
                    <div className='flex gap-10 '>
                        <div className='flex flex-col gap-2'>
                            <p className='!text-xl'>Category By</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                                <Select
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Name, A to Z</MenuItem>
                                    <MenuItem value={20}>Name, Z to A</MenuItem>
                                    <MenuItem value={30}>Price, Low to High</MenuItem>
                                    <MenuItem value={30}>Price, High to Low</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='!text-xl'>SubCategory By</p>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                <Select
                                    value={subcat}
                                    onChange={subCategory}
                                >
                                    <MenuItem value={10}>Name, A to Z</MenuItem>
                                    <MenuItem value={20}>Name, Z to A</MenuItem>
                                    <MenuItem value={30}>Price, Low to High</MenuItem>
                                    <MenuItem value={30}>Price, High to Low</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                <TableContainer sx={{ overflowX: "auto" }} className='scroll'>
                    <Table sx={{ minWidth: 1200 }}>
                        <TableHead className='sticky top-0'>
                            <TableRow className='bg-[#f2f2f2]'>
                                <TableCell><Checkbox /></TableCell>
                                <TableCell className='!font-semibold !w-fit'>PRODUCT </TableCell>
                                <TableCell className='!font-semibold'>CATEGORY</TableCell>
                                <TableCell className='!font-semibold whitespace-nowrap'>SUB CATEGORY</TableCell>
                                <TableCell className='!font-semibold whitespace-nowrap'>PRICE (₹)</TableCell>
                                <TableCell align='center' className='!font-semibold'>RATING</TableCell>
                                <TableCell className='!font-semibold'>STOCK</TableCell>
                                <TableCell className='!font-semibold'>ACTION</TableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>
                            {products.map((row) => (
                                <TableRow key={row?._id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className='!flex gap-4 '>
                                        <div>
                                            <img className='h-17 w-17 rounded-md object-cover' src={row.images[0].url} alt="Error" />
                                        </div>

                                        <div className='flex flex-col gap-1 justify-around'>
                                            <p className='!font-semibold w-60'>{row.desc}</p>
                                            <p>{row.name} </p>
                                        </div>
                                    </TableCell>

                                    <TableCell>{row.category.name}</TableCell>

                                    <TableCell align='center'>{row.subcategory.name}</TableCell>

                                    <TableCell className='!text-primary !font-semibold' align="center">₹{row.price}</TableCell>

                                    <TableCell className='!font-semibold' align="center">
                                        <Rating
                                            value={row.rating}
                                            readOnly
                                        >
                                        </Rating>
                                    </TableCell>

                                    <TableCell className='!font-semibold !text-primary whitespace-nowrap' align="center">{row.countInstock} stocks</TableCell>


                                    <TableCell className='cursor-pointer !font-semibold ' align="center">
                                        <Button className='!px-4 !py-1 !bg-primary not-visited:'>
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
                        count={totalproduct}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>

            </div>
            <Addnewproduct open={open} setOpen={setOpen} />
        </section>
    )
}

export default AddProduct
