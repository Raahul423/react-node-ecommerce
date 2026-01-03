import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { footer, FootertImage } from '../../../assets/Assests';
import { Button } from '@mui/material';
import { FaFacebook,FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='md:bg-[#f1f1f1] bg-gray-800/30 md:mt-8'>
            <div className='my-container'>
                {/* column 1 footer section */}

                <div className='col1 md:flex grid grid-cols-2 items-center justify-between md:px-24 md:py-8'>
                    <div className='p-4 justify-center flex flex-col items-center group md:gap-3 gap-1'>
                        <LiaShippingFastSolid className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='md:text-xl text-[20px] font-medium max-md:text-center'>Free Shipping</h1>
                        <p className='md:text-sm text-xs max-md:text-center '>For all Orders Over $100</p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center md:gap-3 gap-1 group'>
                        <PiKeyReturnLight className='text-5xl  group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='md:text-xl text-[20px] !text-md font-medium max-md:text-center'>30 Days Returns</h1>
                        <p className='md:text-sm text-xs max-md:text-center ' >For an Exchange Product</p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center md:gap-3 gap-1 group'>
                        <IoWalletOutline className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='md:text-xl text-[20px] font-medium max-md:text-center '>Secured Payment</h1>
                        <p className='md:text-sm text-xs max-md:text-center '>Payment Cards Accepted

                        </p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center md:gap-3 gap-1 group'>
                        <BiSupport className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='md:text-xl text-[20px] font-medium max-md:text-center'>Support 24/7

                        </h1>
                        <p className='md:text-sm text-xs max-md:text-center'>Contact us Anytime</p>
                    </div>
                </div>

                <span className='horizontal-line !bg-primary'></span>

                {/* column 2 for footer section */}

                <div className='w-full md:!flex md:py-10 py-2 gap-8 grid grid-cols-1'>
                    <div className='md:w-[30%] md:px-4 max-md:grid gap-2'>
                        <h1 className='md:mb-4 max-md:!text-[20px] '>Contacts Us</h1>
                        <p className='md:py-6 max-md:!text-[10px] '>Classyshop - Mega Super Store
                            507-Union Trade Centre France</p>
                        <a href="mailto:rp3976558@gmail.com">rp3976558@gmail.com</a>
                        <p className='text-primary md:py-5 md:!text-2xl'>(91+)74580-15120</p>
                        <div className='flex items-center gap-2'>
                            <FiMessageSquare className='md:text-5xl text-primary' />
                            <p className='md:!text-md !text-[15px]'>Online Chat <br />
                                Get Expert Help</p>
                        </div>
                    </div>

                    <div className='md:w-[20%] w-full md:px-4'>
                        <h1 className='md:mb-4 max-md:!text-[20px]'>Products</h1>
                        <ul>
                            {footer.slice(0, 6).map((items, idx) => (
                                <li key={idx} className='md:mb-1 cursor-pointer'>
                                    <a className='hover:text-primary max-md:text-xs'>
                                        {items}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className='w-[20%] md:px-4'>
                        <h1 className='md:mb-4 max-md:!text-[20px]'>Products</h1>
                        <ul >
                            {footer.slice(6).map((items, idx) => (
                                <li className='mb-1 cursor-pointer !text-xs'>
                                    <a className='hover:text-primary' key={idx}>
                                        {items}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-[30%] px-4 flex flex-col gap-4 max-md:hidden'>
                        <h1 className='mb-4'>Subscribe to newsletter</h1>

                        <p className=''>Subscribe to our latest newsletter to get news about special discounts.</p>

                        <input className='email ' type="email" placeholder='Your E-mail Address' />

                        <Button className='uppercase !bg-primary !text-white '>Suscribe</Button>

                        <div className='flex gap-4'>
                            <input id='agree' type="checkbox" />
                            <label htmlFor="agree">I agree to the terms and conditions and the privacy policy</label>
                        </div>

                    </div>
                </div>

                <span className='horizontal-line !bg-primary'></span>

                {/* column 3 footer section */}

                <div className='col3 py-2 justify-between md:flex grid-cols-3 cursor-pointer items-center max-md:text-center'>
                    <div className='flex gap-4 items-center max-md:justify-center'>
                        <a href="https://www.linkedin.com/in/raahul423/"><FaLinkedinIn className='text-2xl' /></a>

                        <a href=""><FaInstagram className='text-2xl' /></a>

                        <a href="https://github.com/Raahul423">
                            <FaGithub className='text-2xl' />
                        </a>

                         <a href="">
                            <FaFacebook className='text-2xl' />
                        </a>

                    </div>

                    <div>
                        <p>Rahul © 2025 - Ecommerce Template</p>
                    </div>

                    <div className='flex gap-1 max-md:hidden'>
                        {FootertImage.map((data,idx)=>(
                            <img key={idx} src={data.image} alt="error" />
                        ))}
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Footer
