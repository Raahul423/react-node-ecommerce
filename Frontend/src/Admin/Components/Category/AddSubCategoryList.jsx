import { Button } from '@mui/material'
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { GoDotFill } from 'react-icons/go'
import { MdOutlineDelete } from 'react-icons/md';

import { RiArrowDownSLine } from 'react-icons/ri'
import { TiPencil } from 'react-icons/ti';

const AddSubCategoryList = () => {
    const [isopen, setIsopen] = useState(null)

    const click = (index) => {
        setIsopen(isopen == index ? null : index)
    }

    return (
        <section>
            <div className='part-1 flex justify-between items-center py-5'>
                <h1 className='!text-xl '>Sub Category List</h1>
                <Button className='!bg-blue-600 !text-white !px-4 py-2' >ADD SUB CATEGORY</Button>
            </div>


            <div class="relative overflow-x-auto bg-white border border-gray-600/30 shadow-md shadow-gray-600/60 rounded-md">
                <table class="w-full text-sm text-left scroll text-body">
                    <tbody>
                        <>
                            <tr onClick={() => click(0)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>Fastion</p>

                                    <RiArrowDownSLine className='text-2xl' />
                                </td>
                            </tr>

                            <Collapse isOpened={isopen === 0}>
                                <div className='px-6'>
                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Mens</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Women</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Kids</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            </Collapse>


                        </>

                        <>
                            <tr onClick={() => click(1)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>Electronics</p>

                                    <RiArrowDownSLine className='text-2xl' />
                                </td>
                            </tr>

                            <Collapse isOpened={isopen === 1}>
                                <div className='px-6'>
                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Mens</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Women</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Kids</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            </Collapse>


                        </>

                        <>
                            <tr onClick={() => click(2)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>Bags</p>

                                    <RiArrowDownSLine className='text-2xl' />
                                </td>
                            </tr>

                            <Collapse isOpened={isopen === 2}>
                                <div className='px-6'>
                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Mens</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Women</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Kids</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            </Collapse>


                        </>

                        <>
                            <tr onClick={() => click(3)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>Footwear</p>

                                    <RiArrowDownSLine className='text-2xl' />
                                </td>
                            </tr>

                            <Collapse isOpened={isopen === 3}>
                                <div className='px-6'>
                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Mens</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Women</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>

                                    <div className='!justify-between flex py-3 border-b border-gray-600/30'>
                                        <p className='flex items-center gap-1 text-slate-800/90 normal-case'>Kids</p>
                                        <div className='flex gap-5'>
                                            <MdOutlineDelete className='text-2xl cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            </Collapse>


                        </>

                        <>
                            <tr onClick={() => click(4)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>Groceries</p>

                                </td>
                            </tr>
                        </>

                        <>
                            <tr onClick={() => click(5)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>Beauty</p>                                  
                                </td>
                            </tr>

                        </>

                        <>
                            <tr onClick={() => click(5)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>jewellery</p>
                                </td>
                            </tr>
                        </>

                        <>
                            <tr onClick={() => click(5)} class="bg-gray-700 border-b border-gray-400 ">
                                <td class="px-6 py-3 text-white text-xl flex justify-between">
                                    <p>wellness</p>
                                </td>
                            </tr>
                        </>




                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default AddSubCategoryList




