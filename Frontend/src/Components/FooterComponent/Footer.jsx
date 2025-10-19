import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { footer, FootertImage } from '../../assets/Assests';
import { Button } from '@mui/material';
import { Link } from 'react-router';
import { FaFacebook,FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='bg-[#fafafa] mt-14'>
            <div className='my-container'>

                {/* column 1 footer section */}

                <div className='col1 flex items-center justify-between px-24 py-8'>
                    <div className='p-4 justify-center flex flex-col items-center group gap-3'>
                        <LiaShippingFastSolid className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>Free Shipping</h1>
                        <p className='text-sm'>For all Orders Over $100</p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center gap-3 group'>
                        <PiKeyReturnLight className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>30 Days Returns</h1>
                        <p className='text-sm'>For an Exchange Product</p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center gap-3 group'>
                        <IoWalletOutline className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>Secured Payment</h1>
                        <p className='text-sm'>Payment Cards Accepted

                        </p>
                    </div>

                    <div className='p-4 justify-center flex flex-col items-center gap-3  group'>
                        <BiSupport className='text-5xl group-hover:-translate-y-1 transition-all group-hover:text-primary' />
                        <h1 className='text-xl font-medium'>Support 24/7

                        </h1>
                        <p className='text-sm'>Contact us Anytime</p>
                    </div>
                </div>

                <span className='horizontal-line'></span>

                {/* column 2 for footer section */}

                <div className='col2 w-full flex py-10 gap-8'>
                    <div className='w-[30%] px-4'>
                        <h1 className='mb-4'>Contacts Us</h1>
                        <p className='py-6 '>Classyshop - Mega Super Store
                            507-Union Trade Centre France</p>
                        <a href="mailto:rp3976558@gmail.com">rp3976558@gmail.com</a>
                        <p className='text-primary py-5 !text-2xl'>(91+)74580-15120</p>
                        <div className='flex items-center gap-2'>
                            <FiMessageSquare className='text-5xl text-primary' />
                            <p className='!text-md'>Online Chat <br />
                                Get Expert Help</p>
                        </div>
                    </div>

                    <div className='w-[20%] px-4'>
                        <h1 className='mb-4'>Products</h1>
                        <ul>
                            {footer.slice(0, 6).map((items, idx) => (
                                <li key={idx} className='mb-1 cursor-pointer'>
                                    <a className='hover:text-primary'>
                                        {items}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className='w-[20%] px-4'>
                        <h1 className='mb-4'>Products</h1>
                        <ul >
                            {footer.slice(6).map((items, idx) => (
                                <li className='mb-1 cursor-pointer'>
                                    <a className='hover:text-primary' key={idx}>
                                        {items}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-[30%] px-4 flex flex-col gap-4'>
                        <h1 className='mb-4'>Subscribe to newsletter</h1>

                        <p>Subscribe to our latest newsletter to get news about special discounts.</p>

                        <input className='email ' type="email" placeholder='Your E-mail Address' />

                        <Button className='uppercase !bg-primary !text-white '>Suscribe</Button>

                        <div className='flex gap-4'>
                            <input id='agree' type="checkbox" />
                            <label htmlFor="agree">I agree to the terms and conditions and the privacy policy</label>
                        </div>

                    </div>
                </div>

                <span className='horizontal-line'></span>

                {/* column 3 footer section */}

                <div className='col3 py-2 justify-between flex cursor-pointer items-center'>
                    <div className='flex gap-4 items-center'>
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

                    <div className='flex gap-1'>
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
