import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_clmkxv9', 'template_jcg3b4p', form.current, 'dmROKhjJgKoFwMbYE')

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();

    };

    return (
        <div className='max-w-7xl mx-auto px-12 lg:mb-20'>
            <div className='min-h-[95vh]'>
                <div className='text-center  lg:mt-28 lg:mb-20 my-5 block'>
                    <h2 className='text-primary lg:text-5xl text-2xl font-bold mb-2 uppercase'>Have Any Question?</h2>
                    <div class="divider w-1/2 mx-auto">
                        <div class="rating ">
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-secondary" />
                        </div>
                    </div>
                    <h4 className='text-xl'>It is a long established fact that a reader will be distracted content of a page when looking.</h4>
                </div>
                <div className='lg:p-10 p-5  w-full bg-base-100 shadow-xl rounded-2xl'>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className='flex lg:flex-row flex-col  gap-5'>
                            <div class="form-control lg:mt-3 w-full">
                                <label class="label">
                                    <span class="label-text font-bold text-lg">Name <span className='text-secondary'>*</span></span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full" required />
                            </div>
                            <div class="form-control lg:mt-3 w-full">
                                <label class="label">
                                    <span class="label-text font-bold text-lg">Email <span className='text-secondary'>*</span></span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" class="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col  gap-5'>
                            <div class="form-control lg:mt-3 w-full">
                                <label class="label">
                                    <span class="label-text font-bold text-lg">Subject <span className='text-secondary'>*</span></span>
                                </label>
                                <input type="text" name="subject" placeholder="Subject" class="input input-bordered w-full" required />
                            </div>
                            <div class="form-control lg:mt-3 w-full">
                                <label class="label">
                                    <span class="label-text font-bold text-lg">Phone <span className='text-secondary'>*</span></span>
                                </label>
                                <input type="tel" name="number" placeholder="Your Contact Number" class="input input-bordered w-full" required min="0" />
                            </div>
                        </div>
                        <div class="form-control mt-3 w-full">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Phone <span className='text-secondary'>*</span></span>
                            </label>
                            <textarea type="text" name="message" placeholder="Message..." class="input input-bordered w-full lg:h-[180px] h-[90px] pt-3" required />
                        </div>
                        <div class="form-control  w-full">
                            <div className='lg:mt-10 mt-6 text-center'>
                                <button type='submit' class="btn btn-primary hover:btn-secondary duration-1000 font-bold px-10">GET IN TOUCH</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ContactEmail;