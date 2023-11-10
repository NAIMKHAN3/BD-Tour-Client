import React from 'react';
import { CiFacebook } from 'react-icons/ci'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { AiFillYoutube } from 'react-icons/ai'
import { MdOutlineLocationOn, MdOutlinePhoneInTalk, MdOutlineMail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='bg-gray-600 p-5' data-aos="fade-up" data-aos-duration="1000">
            <div className='max-w-[80%] my-10 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-9 gap-5'>
                    <div className='col-span-3'>
                        <img className='w-24' src={"https://i.ibb.co/tCp8p57/Capture-removebg-preview.png"} alt="" />
                        <p className='text-white my-5 font-semibold'>BD Tour started life as a business lines and calls provider in Birmingham City Centre, we moved our offices to Halesowen in 2012. We expanded over the following years to cover all forms of business communications and gained customers from all over the UK.</p>
                        <div className='flex my-5'>
                            <span className='text-secondary text-6xl mr-3'><CiFacebook /></span>
                            <span className='text-secondary text-6xl mr-3'><TiSocialTwitterCircular /></span>
                            <span className='text-secondary text-6xl mr-3'><AiFillYoutube /></span>
                        </div>
                    </div>
                    <div className='col-span-2 text-white'>
                        <h1 className='text-3xl font-semibold'>Services</h1>
                        <h5 className='font-semibold mt-5'>Dhaka Tour</h5>
                        <h5 className='font-semibold mt-3'>Chittagong Tour</h5>
                        <h5 className='font-semibold mt-3'>Rajshahi Tour</h5>
                        <h5 className='font-semibold mt-3'>Barishal Tour</h5>
                        <h5 className='font-semibold mt-3'>Khulna Tour</h5>
                        <h5 className='font-semibold mt-3'>Rangpur Tour</h5>
                        <h5 className='font-semibold mt-3'>Mymenshing Tour</h5>
                        <h5 className='font-semibold mt-3'>Sylhet Tour</h5>

                    </div>
                    <div className='col-span-2 text-white'>
                        <h1 className='text-3xl font-semibold'>Useful Links
                        </h1>
                        <h5 className='font-semibold mt-10'>Our Brochure</h5>
                        <h5 className='font-semibold mt-3'>Order Form</h5>
                        <h5 className='font-semibold mt-3'>Finance Calculator</h5>
                        <h5 className='font-semibold mt-3'>Blog</h5>
                    </div>
                    <div className='col-span-2 text-white'>
                        <h1 className='text-3xl font-semibold'>Contact Us
                        </h1>
                        <div className='mt-10 flex'>
                            <span className=' '><MdOutlineLocationOn className='text-4xl bg-primary p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>BD Tour Group Holdings Ltd,<br /> Commercial House, 21a Stone Street,<br /> Dudley, West Midlands, DY1 1NJ</h1>
                        </div>

                        <div className='mt-5 flex'>
                            <span className=' '><MdOutlinePhoneInTalk className='text-4xl bg-primary p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>0800 849 8585</h1>
                        </div>
                        <div className='mt-5 flex'>
                            <span className=' '><MdOutlineMail className='text-4xl bg-primary p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>hello@bd-tour.co.uk</h1>
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-white my-10' />
                <h1 className='font-semibold text-center my-3 text-white'>© 2023 BD Tour Group Holdings Ltd. All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;