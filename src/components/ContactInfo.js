import React from 'react';
import { IoLocationOutline, IoCallOutline, IoAtOutline } from "react-icons/io5";

const ContactInfo = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div className='min-h-fit'>
                <div className='text-center  lg:mt-28 lg:mb-20 my-5 block'>
                    <h2 className='text-primary lg:text-5xl text-2xl font-bold mb-2 uppercase'>Get In Touch</h2>
                    <div className="divider w-1/2 mx-auto">
                        <div className="rating ">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-secondary" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-secondary" />
                        </div>
                    </div>
                    <h4 className='text-xl'>We always try to provide the best food!</h4>
                </div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row justify-evenly  w-full gap-10">
                        <div className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <div className="mx-auto text-4xl text-primary p-5 bg-[#f5f5f5] rounded-full"><IoLocationOutline /></div>
                                <h2 className="card-title text-2xl font-bold my-2 mx-auto">Address</h2>
                                <p className='font-semibold text-xl'>Mirpur-2, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <div className="mx-auto text-4xl text-primary p-5 bg-[#f5f5f5] rounded-full"><IoAtOutline /></div>
                                <h2 className="card-title text-2xl font-bold my-2 mx-auto">Email</h2>
                                <p className='font-semibold text-xl'>contact@example.com</p>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <div className="mx-auto text-4xl text-primary p-5 bg-[#f5f5f5] rounded-full"><IoCallOutline /></div>
                                <h2 className="card-title text-2xl font-bold my-2 mx-auto">Phone</h2>
                                <p className='font-semibold text-xl'>+8801234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactInfo;